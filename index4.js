const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Check for mobile or web ?
// function resizeCanvas() {
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight
// }

// window.addEventListener('resize', resizeCanvas)

const correctCode = "0728"; // Replace with your desired code

// Function to show the code entry interface
function showCodeEntry() {
    document.getElementById('codeEntry').style.display = 'block';
}

// Function to hide the code entry interface
function hideCodeEntry() {
    document.getElementById('codeEntry').style.display = 'none';
}

// Add event listener for the submit button
document.getElementById('submitCode').addEventListener('click', () => {
    const enteredCode = document.getElementById('codeInput').value;
    if (enteredCode === correctCode) {
        // Code is correct, trigger the desired action
        // For example, navigate to another page
        //Animation
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = 'game_birthday_home.html'; // Replace with your desired HTML file name
        }, 2000); // Replace with your desired HTML file name
    } else {
        // Code is incorrect, show an error message
    }
});

// window.addEventListener('resize', function () {
//     const url = new URL(window.location);
//     url.searchParams.set('x', playerWorldPosition.x);
//     url.searchParams.set('y', playerWorldPosition.y);
//     window.location.href = url.toString();
//     // location.reload();
// });

// window.addEventListener('orientationchange', function () {
//     location.reload();
// });
// resizeCanvas()

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 140) {
    collisionsMap.push(collisions.slice(i, 140 + i))
}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += 70) {
    battleZonesMap.push(battleZonesData.slice(i, 70 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 140) {
    charactersMap.push(charactersMapData.slice(i, 140 + i))
}

let playerWorldPosition = {
    x: 1510, // Adjust this value to your desired starting x position
    y: 3050  // Adjust this value to your desired starting y position
}
// getPlayerWorldPositionFromURL();

const boundaries = []
const offset = {
    x: canvas.width / 2 - playerWorldPosition.x,
    y: canvas.height / 2 - playerWorldPosition.y
};
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1265) {
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }

    })
})

const battleZones = []

battleZonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
            battleZones.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const characters = []
// const informtionImg = new Image()
// informtionImg.src = './img/information.png'
const informtionImg = new Image()
informtionImg.src = './img/steven_img.png'
const catImg = new Image()
catImg.src = './img/cat.png'
const catblackImg = new Image()
catblackImg.src = './img/cat_black.png'
const catwhiteImg = new Image()
catwhiteImg.src = './img/cat_white.png'
const catbrownImg = new Image()
catbrownImg.src = './img/cat_brown.png'
const catsealImg = new Image()
catsealImg.src = './img/cat_seal.png'
const catorangesitting = new Image();
catorangesitting.src = './img/cat_orange_sitting.png'
const catgameboy = new Image();
catgameboy.src = './img/cat_gameboy.png'
const arwen = new Image();
arwen.src = './img/arwen_img.png'
const aragorn = new Image();
aragorn.src = './img/aragorn_img.png'
const invisibleInteractionForDoor = new Image();
invisibleInteractionForDoor.src = './img/invisible_image_48x48.png'
//MARK: Characters
charactersMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // if (symbol === 1267) {
        //   characters.push(
        //     new Character({
        //       position: {
        //         x: j * Boundary.width + offset.x,
        //         y: i * Boundary.height + offset.y
        //       },
        //       image: informtionImg,
        //       dialogue: ['Wahhouu tu as trouve le dernier panneau!', 'Voici ton premier prix du jour 1!!', "Et non ce n'est pas une roche hehe", "Regarde dans le seul livre que j'ai lu!"]
        //     })
        //   )
        // } else if (symbol === 1268) {
        //   characters.push(
        //     new Character({
        //       position: {
        //         x: j * Boundary.width + offset.x,
        //         y: i * Boundary.height + offset.y
        //       },
        //       image: informtionImg,
        //       dialogue: ['Bravo tu as trouve le 2e panneau!', 'Fun fact: ...', 'Les pingouins males offrent souvent des pierres a leurs partenaires comme cadeau!']
        //     })
        //   )
        // }

        if (symbol === 1269) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y - 30
                    },
                    image: informtionImg,
                    frames: {
                        max: 4,
                        hold: 30
                    },
                    animate: true,
                    scale: 1.5,
                    dialogue: ['Steven: COUCOU!', 'Enfin le dernier jour !!', 'Il faut cogner a la porte !!']
                })
            )
        } else if (symbol === 1270) {
            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: catImg,
                frames: {
                    max: 4,
                    hold: 60
                },
                animate: true,
                scale: 0.2,
                dialogue: ['Meoowwwww... je suis perdu...']
            }))

        }
        else if (symbol === 1271) {
            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: catblackImg,
                frames: {
                    max: 4,
                    hold: 60
                },
                animate: true,
                scale: 0.2,
                dialogue: ['zzzzzzzzzzzzzzzzz', '---..', 'let me sleep']
            }))

        }

        else if (symbol === 1272) {

            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: catwhiteImg,
                frames: {
                    max: 4,
                    hold: 60
                },
                animate: true,
                scale: 0.2,
                dialogue: ['Meow meow meow.', 'Une belle journee!', '.----']
            }))

        }

        else if (symbol === 1273) {

            const x = j * Boundary.width + offset.x;
            const y = i * Boundary.height + offset.y;

            // characters.push(new Cat({
            //   position: { x, y },
            //   image: catbrownImg,
            //   frames: { max: 4, hold: 60 },
            //   animate: true,
            //   scale: 0.2,
            //   dialogue: ['running', 'running....', '.....'],
            //   initialPlayerPosition: playerWorldPosition,
            // }));
            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: catbrownImg,
                frames: {
                    max: 4,
                    hold: 60
                },
                animate: true,
                scale: 0.2,
                dialogue: ['...', 'Laisse moi prendre une marche', '..---']
            }))
        }

        else if (symbol === 1274) {
            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: catorangesitting,
                frames: {
                    max: 4,
                    hold: 60
                },
                animate: true,
                scale: 0.2,
                dialogue: ['Pleasee ouvre la porte !']
            }))

        } else if (symbol === 1275) {
            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: catsealImg,
                frames: {
                    max: 4,
                    hold: 60
                },
                animate: true,
                scale: 0.2,
                dialogue: ['Elo!', 'je fais du pain', "Si tu n'as pas remarqué mais cest du code morse!"]
            }))
        }
        else if (symbol === 1276) {

            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: catgameboy,
                frames: {
                    max: 4,
                    hold: 10
                },
                animate: true,
                scale: 0.2,
                dialogue: ['...', 'gotta go fast', "je dois trouver un chat noir, blanc et brun"]
            }))
        }

        else if (symbol === 1277) {

            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y - 30
                },
                image: arwen,
                frames: {
                    max: 4,
                    hold: 10
                },
                animate: false,
                scale: 0.7,
                dialogue: ['Arwen: Puisses-tu trouver la joie et la paix en ce jour spécial, chère Camille.']
            }))
        } else if (symbol === 9999) {
            //MARK: TODO: trouver un moyen dinteragir avec la porte 
            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: invisibleInteractionForDoor,
                scale: 1,
                dialogue: ['...', '......', '.............']
            }))
        }
        else if (symbol === 9998) {
            //MARK: TODO: trouver un moyen dinteragir avec la porte 
            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: invisibleInteractionForDoor,
                scale: 1,
                dialogue: ['...', '......', '!!!'],
                onConversationEnd: () => {
                    // Add your specific action here
                    console.log("End of conversation with the door");
                    //Animation
                    showCodeEntry();
                    // window.location.href = 'game_birthday_home.html';
                    // For example, you can open the door, unlock a new area, etc.
                }
            }))
        }



        else if (symbol === 1278) {

            characters.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y - 30
                },
                image: aragorn,
                frames: {
                    max: 4,
                    hold: 10
                },
                animate: false,
                scale: 0.7,
                dialogue: ['Aragorn: Joyeux anniversaire, Camille, que ta journée soit magique !']
            }))
        }

        if (symbol !== 0) {
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }
    })
})


const image = new Image()
image.src = './img/Pellet Town.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
    // position: {
    //   x: canvas.width / 2 - 192 / 4 / 2,
    //   y: canvas.height / 2 - 68 / 2
    // },
    position: {
        x: canvas.width / 2 - playerDownImage.width / 2,
        y: canvas.height / 2 - playerDownImage.height / 2
    },
    image: playerDownImage,
    frames: {
        max: 6,
        hold: 10
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const movables = [
    background,
    ...boundaries,
    foreground,
    ...battleZones,
    ...characters,
]
const renderables = [
    background,
    ...boundaries,
    ...battleZones,
    ...characters,
    player,
    foreground
]

const battle = {
    initiated: false
}

//MARK: Animate 1
// function animate() {
//   const animationId = window.requestAnimationFrame(animate)
//   renderables.forEach((renderable) => {
//     renderable.draw()
//   })

//   let moving = true
//   player.animate = false

//   if (battle.initiated) return

//   // activate a battle
//   if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
//     for (let i = 0; i < battleZones.length; i++) {
//       const battleZone = battleZones[i]
//       const overlappingArea =
//         (Math.min(
//           player.position.x + player.width,
//           battleZone.position.x + battleZone.width
//         ) -
//           Math.max(player.position.x, battleZone.position.x)) *
//         (Math.min(
//           player.position.y + player.height,
//           battleZone.position.y + battleZone.height
//         ) -
//           Math.max(player.position.y, battleZone.position.y))
//       if (
//         rectangularCollision({
//           rectangle1: player,
//           rectangle2: battleZone
//         }) &&
//         overlappingArea > (player.width * player.height) / 2 &&
//         Math.random() < 0.01
//       ) {
//         // deactivate current animation loop
//         window.cancelAnimationFrame(animationId)

//         audio.Map.stop()
//         audio.initBattle.play()
//         audio.battle.play()

//         battle.initiated = true
//         gsap.to('#overlappingDiv', {
//           opacity: 1,
//           repeat: 3,
//           yoyo: true,
//           duration: 0.4,
//           onComplete() {
//             gsap.to('#overlappingDiv', {
//               opacity: 1,
//               duration: 0.4,
//               onComplete() {
//                 // activate a new animation loop
//                 initBattle()
//                 animateBattle()
//                 gsap.to('#overlappingDiv', {
//                   opacity: 0,
//                   duration: 0.4
//                 })
//               }
//             })
//           }
//         })
//         break
//       }
//     }
//   }

//   if (keys.w.pressed && lastKey === 'w') {
//     player.animate = true
//     player.image = player.sprites.up

//     checkForCharacterCollision({
//       characters,
//       player,
//       characterOffset: { x: 0, y: 3 }
//     })

//     for (let i = 0; i < boundaries.length; i++) {
//       const boundary = boundaries[i]
//       if (
//         rectangularCollision({
//           rectangle1: player,
//           rectangle2: {
//             ...boundary,
//             position: {
//               x: boundary.position.x,
//               y: boundary.position.y + 3
//             }
//           }
//         })
//       ) {
//         moving = false
//         break
//       }
//     }

//     if (moving)
//       movables.forEach((movable) => {
//         movable.position.y += 3
//       })
//   } else if (keys.a.pressed && lastKey === 'a') {
//     player.animate = true
//     player.image = player.sprites.left

//     checkForCharacterCollision({
//       characters,
//       player,
//       characterOffset: { x: 3, y: 0 }
//     })

//     for (let i = 0; i < boundaries.length; i++) {
//       const boundary = boundaries[i]
//       if (
//         rectangularCollision({
//           rectangle1: player,
//           rectangle2: {
//             ...boundary,
//             position: {
//               x: boundary.position.x + 3,
//               y: boundary.position.y
//             }
//           }
//         })
//       ) {
//         moving = false
//         break
//       }
//     }

//     if (moving)
//       movables.forEach((movable) => {
//         movable.position.x += 3
//       })
//   } else if (keys.s.pressed && lastKey === 's') {
//     player.animate = true
//     player.image = player.sprites.down

//     checkForCharacterCollision({
//       characters,
//       player,
//       characterOffset: { x: 0, y: -3 }
//     })

//     for (let i = 0; i < boundaries.length; i++) {
//       const boundary = boundaries[i]
//       if (
//         rectangularCollision({
//           rectangle1: player,
//           rectangle2: {
//             ...boundary,
//             position: {
//               x: boundary.position.x,
//               y: boundary.position.y - 3
//             }
//           }
//         })
//       ) {
//         moving = false
//         break
//       }
//     }

//     if (moving)
//       movables.forEach((movable) => {
//         movable.position.y -= 3
//       })
//   } else if (keys.d.pressed && lastKey === 'd') {
//     player.animate = true
//     player.image = player.sprites.right

//     checkForCharacterCollision({
//       characters,
//       player,
//       characterOffset: { x: -3, y: 0 }
//     })

//     for (let i = 0; i < boundaries.length; i++) {
//       const boundary = boundaries[i]
//       if (
//         rectangularCollision({
//           rectangle1: player,
//           rectangle2: {
//             ...boundary,
//             position: {
//               x: boundary.position.x - 3,
//               y: boundary.position.y
//             }
//           }
//         })
//       ) {
//         moving = false
//         break
//       }
//     }

//     if (moving)
//       movables.forEach((movable) => {
//         movable.position.x -= 3
//       })
//   }
// }

//MARK: Animate 2
function animate() {
    const animationId = window.requestAnimationFrame(animate)
    renderables.forEach((renderable) => {
        renderable.draw()
    })

    let moving = true
    player.animate = false

    if (battle.initiated) return

    // activate a battle
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        for (let i = 0; i < battleZones.length; i++) {
            const battleZone = battleZones[i]
            const overlappingArea =
                (Math.min(
                    player.position.x + player.width,
                    battleZone.position.x + battleZone.width
                ) -
                    Math.max(player.position.x, battleZone.position.x)) *
                (Math.min(
                    player.position.y + player.height,
                    battleZone.position.y + battleZone.height
                ) -
                    Math.max(player.position.y, battleZone.position.y))
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: battleZone
                }) &&
                overlappingArea > (player.width * player.height) / 2 &&
                Math.random() < 0.01
            ) {
                // deactivate current animation loop
                window.cancelAnimationFrame(animationId)

                audio.Map.stop()
                audio.initBattle.play()
                audio.battle.play()

                battle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    repeat: 3,
                    yoyo: true,
                    duration: 0.4,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity: 1,
                            duration: 0.4,
                            onComplete() {
                                // activate a new animation loop
                                initBattle()
                                animateBattle()
                                gsap.to('#overlappingDiv', {
                                    opacity: 0,
                                    duration: 0.4
                                })
                            }
                        })
                    }
                })
                break
            }
        }
    }

    if (keys.w.pressed && lastKey === 'w') {
        player.animate = true
        player.image = player.sprites.up

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: 0, y: 3 }
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            playerWorldPosition.y -= 4
            movables.forEach((movable) => {
                movable.position.y += 4
            })
        }

    } else if (keys.a.pressed && lastKey === 'a') {
        player.animate = true
        player.image = player.sprites.left

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: 3, y: 0 },
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                movable.position.x += 4
            })
            playerWorldPosition.x -= 4
        }

    } else if (keys.s.pressed && lastKey === 's') {
        player.animate = true
        player.image = player.sprites.down

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: 0, y: -3 }
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                movable.position.y -= 4
            })
            playerWorldPosition.y += 4
        }

    } else if (keys.d.pressed && lastKey === 'd') {
        player.animate = true
        player.image = player.sprites.right

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: -3, y: 0 },
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                movable.position.x -= 4
            })
            playerWorldPosition.x += 4
        }

    }

    // Update cat's position
    characters.forEach(character => {
        if (character instanceof Cat) {
            character.update(offset)
        }
    })
}
// animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    if (player.isInteracting) {
        switch (e.key) {
            case ' ':
                player.interactionAsset.dialogueIndex++

                const { dialogueIndex, dialogue, onConversationEnd } = player.interactionAsset
                if (dialogueIndex <= dialogue.length - 1) {
                    document.querySelector('#characterDialogueBox').innerHTML =
                        player.interactionAsset.dialogue[dialogueIndex]
                    return
                }

                // finish conversation
                player.isInteracting = false
                player.interactionAsset.dialogueIndex = 0
                document.querySelector('#characterDialogueBox').style.display = 'none'

                if (onConversationEnd) {
                    onConversationEnd();
                }

                break
        }
        return
    }

    switch (e.key) {
        case ' ':
            if (!player.interactionAsset) return

            // beginning the conversation
            const firstMessage = player.interactionAsset.dialogue[0]
            document.querySelector('#characterDialogueBox').innerHTML = firstMessage
            document.querySelector('#characterDialogueBox').style.display = 'flex'
            player.isInteracting = true
            break
        case 'w':
            hideCodeEntry();
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            hideCodeEntry();
            keys.a.pressed = true
            lastKey = 'a'
            break

        case 's':
            hideCodeEntry();
            keys.s.pressed = true
            lastKey = 's'
            break

        case 'd':
            hideCodeEntry();
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})

let clicked = false
addEventListener('click', () => {
    if (!clicked) {
        audio.Map.play()
        clicked = true
    }
})

function getPlayerWorldPositionFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const x = parseFloat(urlParams.get('x'));
    const y = parseFloat(urlParams.get('y'));

    if (!isNaN(x)) {
        playerWorldPosition.x = x;
    }
    if (!isNaN(y)) {
        playerWorldPosition.y = y;
    }
    console.log(playerWorldPosition)

}
//Mobile:
let touchIntervals = {}
function movePlayer(direction, event) {
    event.preventDefault();
    hideCodeEntry();
    keys[direction].pressed = true
    lastKey = direction
    clearInterval(touchIntervals[direction])
    touchIntervals[direction] = setInterval(() => {
        keys[direction].pressed = true
        // Update the player world position based on direction
    }, 100)
}
function stopPlayer(direction) {
    clearInterval(touchIntervals[direction])
    keys[direction].pressed = false
}


document.getElementById('up').addEventListener('touchstart', (event) => movePlayer('w', event))
document.getElementById('left').addEventListener('touchstart', (event) => movePlayer('a', event))
document.getElementById('down').addEventListener('touchstart', (event) => movePlayer('s', event))
document.getElementById('right').addEventListener('touchstart', (event) => movePlayer('d', event))


document.getElementById('up').addEventListener('touchend', () => stopPlayer('w'))
document.getElementById('left').addEventListener('touchend', () => stopPlayer('a'))
document.getElementById('down').addEventListener('touchend', () => stopPlayer('s'))
document.getElementById('right').addEventListener('touchend', () => stopPlayer('d'))

document.getElementById('interact').addEventListener('touchstart', () => {
    if (player.isInteracting) {
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue, onConversationEnd } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
            document.querySelector('#characterDialogueBox').innerHTML =
                player.interactionAsset.dialogue[dialogueIndex]
            return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        if (onConversationEnd) {
            onConversationEnd();
        }
    } else {
        if (!player.interactionAsset) return

        // beginning the conversation
        const firstMessage = player.interactionAsset.dialogue[0]
        document.querySelector('#characterDialogueBox').innerHTML = firstMessage
        document.querySelector('#characterDialogueBox').style.display = 'flex'
        player.isInteracting = true
    }
})