function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  )
}

function checkForCharacterCollision({
  characters,
  player,
  characterOffset = { x: 0, y: 0 }
}) {
  player.interactionAsset = null
  // monitor for character collision
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i]
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {
          ...character,
          position: {
            x: character.position.x + characterOffset.x,
            y: character.position.y + characterOffset.y
          }
        }
      })
    ) {
      player.interactionAsset = character
      break
    }
  }
}

function checkForInteractionPoints({ interactionPoints, characterOffset = { x: 0, y: 0 } }) {
  for (let i = 0; i < interactionPoints.length; i++) {
    const point = interactionPoints[i];
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {
          ...point,
          position: {
            x: point.position.x + characterOffset.x,
            y: point.position.y + characterOffset.y
          }
        }
      })
    ) {
      const message = point.interact();
      if (message) {
        document.querySelector('#characterDialogueBox').innerHTML = message;
        document.querySelector('#characterDialogueBox').style.display = 'flex';
        player.isInteracting = true;
        player.interactionAsset = point;
      } else {
        document.querySelector('#characterDialogueBox').style.display = 'none';
        player.isInteracting = false;
        player.interactionAsset = null;
      }
      return;
    }
  }
}