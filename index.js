const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = './assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = './assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = './assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = './assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = './assets/green-character/south.gif'
    }
}
move(character).withArrowKeys(100, 250, handleDirectionChange)

// Old Code - 
// let direction = null;
// let x = 100;
// let y = 250;
// move(character).to(100, 250)

// function moveCharacter(){
// if(direction === 'west'){
//     x = x - 1
// }
// if(direction === 'north'){
//     y = y + 1
// }
// if(direction === 'east'){
//     x = x + 1
// }
// if(direction === 'south'){
//     y = y - 1
// }
// character.style.left = x + 'px'
// character.style.bottom = y + 'px'
// }
// setInterval(moveCharacter, 6)

// document.addEventListener('keydown', function(e){
//     if(e.repeat) return;
//     /*changed the keys to WASD to feel like a video real pc game :P */
//     if(e.key === 'a'){
//         direction = 'west'
//     }
//     if(e.key === 'w'){
//         direction = 'north'
//     }
//     if(e.key === 'd'){
//         direction = 'east'
//     }
//     if(e.key === 's'){
//         direction = 'south'
//     }
// })

// document.addEventListener('keyup', function(e){
//     direction = null
// })

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)