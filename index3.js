const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
// c.imageSmoothingEnabled = false;

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

const collisionsMapHome = []
for (let i = 0; i < collisionsHome.length; i += 15) {
    // console.log(collisionsHome.slice(i, 15 + i));
    collisionsMapHome.push(collisionsHome.slice(i, 15 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapDataHome.length; i += 15) {
    charactersMap.push(charactersMapDataHome.slice(i, 15 + i))
}

let playerWorldPosition = {
    x: 230, // Adjust this value to your desired starting x position
    y: 300  // Adjust this value to your desired starting y position
}
// getPlayerWorldPositionFromURL();

const boundariesHome = []
const offset = {
    x: canvas.width / 2 - playerWorldPosition.x,
    y: canvas.height / 2 - playerWorldPosition.y
};

collisionsMapHome.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 31346) {
            boundariesHome.push(
                new BoundaryHome({
                    position: {
                        x: j * BoundaryHome.width + offset.x,
                        y: i * BoundaryHome.height + offset.y
                    }
                })
            )
        }
    })
})

const charactersHome = [];
const informtionImg = new Image()
informtionImg.src = './img/steven_img.png'
const catorangesitting = new Image();
catorangesitting.src = './img/cat_orange_sitting.png'
const invisibleInteractionForDoor = new Image();
invisibleInteractionForDoor.src = './img/invisible_image_48x48.png'

charactersMap.forEach((row, i) => {

    row.forEach((symbol, j) => {
        if (symbol === 1269) {
            charactersHome.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: informtionImg,
                    frames: {
                        max: 4,
                        hold: 30
                    },
                    animate: true,
                    scale: 1.5,
                    dialogue: ['Steven: Waahouu!', 'Bravo, tu as réussi à tout résoudre !', "Allons prendre un cafe au Barista maintenant !!!!", "J'espere que tu vas aimer!!"]
                })
            )
        } else if (symbol === 1274) {
            charactersHome.push(new Character({
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
                dialogue: ["Merci de m'avoir ouverte la porte !"]
            }))

        }
        else if (symbol === 9999) {
            console.log("???")
            charactersHome.push(new Character({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                },
                image: invisibleInteractionForDoor,
                scale: 1,
                dialogue: ['......'],
                onConversationEnd: () => {
                    // Add your specific action here
                    document.body.classList.add('fade-out');
                    setTimeout(() => {
                        window.location.href = 'game4.html'; // Replace with your desired HTML file name
                    }, 2000);
                    // For example, you can open the door, unlock a new area, etc.
                }
            }))
        }

        // if (symbol !== 0) {
        //     boundariesHome.push(
        //         new BoundaryHome({
        //             position: {
        //                 x: j * BoundaryHome.width + offset.x,
        //                 y: i * BoundaryHome.height + offset.y
        //             }
        //         })
        //     )
        // }
    })
    // Initialize charactersHome if needed
})

const image = new Image()
image.src = './img/birthday_home_map.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundHome.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const playerHome = new Sprite({
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

const backgroundHome = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const foregroundHome = new Sprite({
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
    backgroundHome,
    ...boundariesHome,
    foregroundHome,
    ...charactersHome,
]
const renderables = [
    backgroundHome,
    ...boundariesHome,
    ...charactersHome,
    playerHome,
    foregroundHome
]

function animate() {
    const animationId = window.requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    renderables.forEach((renderable) => {
        renderable.draw()
    })

    let moving = true
    playerHome.animate = false

    if (keys.w.pressed && lastKey === 'w') {
        playerHome.animate = true
        playerHome.image = playerHome.sprites.up

        checkForCharacterCollision({
            characters: charactersHome,
            player: playerHome,
            characterOffset: { x: 0, y: 3 }
        })

        for (let i = 0; i < boundariesHome.length; i++) {
            const boundary = boundariesHome[i]
            if (
                rectangularCollision({
                    rectangle1: playerHome,
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
        playerHome.animate = true
        playerHome.image = playerHome.sprites.left

        checkForCharacterCollision({
            characters: charactersHome,
            player: playerHome,
            characterOffset: { x: 3, y: 0 }
        })

        for (let i = 0; i < boundariesHome.length; i++) {
            const boundary = boundariesHome[i]
            if (
                rectangularCollision({
                    rectangle1: playerHome,
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
        playerHome.animate = true
        playerHome.image = playerHome.sprites.down

        checkForCharacterCollision({
            characters: charactersHome,
            player: playerHome,
            characterOffset: { x: 0, y: -3 }
        })

        for (let i = 0; i < boundariesHome.length; i++) {
            const boundary = boundariesHome[i]
            if (
                rectangularCollision({
                    rectangle1: playerHome,
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
        playerHome.animate = true
        playerHome.image = playerHome.sprites.right

        checkForCharacterCollision({
            characters: charactersHome,
            player: playerHome,
            characterOffset: { x: -3, y: 0 }
        })

        for (let i = 0; i < boundariesHome.length; i++) {
            const boundary = boundariesHome[i]
            if (
                rectangularCollision({
                    rectangle1: playerHome,
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
}
animate()
let lastKey = ''
window.addEventListener('keydown', (e) => {
    if (playerHome.isInteracting) {
        switch (e.key) {
            case ' ':
                playerHome.interactionAsset.dialogueIndex++

                const { dialogueIndex, dialogue, onConversationEnd } = playerHome.interactionAsset
                if (dialogueIndex <= dialogue.length - 1) {
                    document.querySelector('#characterDialogueBox').innerHTML =
                        playerHome.interactionAsset.dialogue[dialogueIndex]
                    return
                }

                // finish conversation
                playerHome.isInteracting = false
                playerHome.interactionAsset.dialogueIndex = 0
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
            if (!playerHome.interactionAsset) return

            // beginning the conversation
            const firstMessage = playerHome.interactionAsset.dialogue[0]
            document.querySelector('#characterDialogueBox').innerHTML = firstMessage
            document.querySelector('#characterDialogueBox').style.display = 'flex'
            playerHome.isInteracting = true
            break
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break

        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break

        case 'd':
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
    keys[direction].pressed = true
    lastKey = direction
    clearInterval(touchIntervals[direction])
    touchIntervals[direction] = setInterval(() => {
        keys[direction].pressed = true
        // Update the playerHome world position based on direction
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
    if (playerHome.isInteracting) {
        playerHome.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue, onConversationEnd } = playerHome.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
            document.querySelector('#characterDialogueBox').innerHTML =
                playerHome.interactionAsset.dialogue[dialogueIndex]
            return
        }

        // finish conversation
        playerHome.isInteracting = false
        playerHome.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        if (onConversationEnd) {
            onConversationEnd();
        }

    } else {
        if (!playerHome.interactionAsset) return

        // beginning the conversation
        const firstMessage = playerHome.interactionAsset.dialogue[0]
        document.querySelector('#characterDialogueBox').innerHTML = firstMessage
        document.querySelector('#characterDialogueBox').style.display = 'flex'
        playerHome.isInteracting = true
    }
})
