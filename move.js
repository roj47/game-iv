function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
    let x = 100;
    let y = 250;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'

    function moveCharacter(){
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
    }
    setInterval(moveCharacter, 6)

    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
        /*changed the keys to WASD to feel like a video real pc game :P */
        if(e.key === 'a'){
            direction = 'west'
        }
        if(e.key === 'w'){
            direction = 'north'
        }
        if(e.key === 'd'){
            direction = 'east'
        }
        if(e.key === 's'){
            direction = 'south'
        }
        callback(direction)
    })

    document.addEventListener('keyup', function(e){
        direction = null
        callback(direction)
    })
        }

        return {
            to: moveToCoordinates,
            withArrowKeys: moveWithArrowKeys
        }
    }