const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

const buttons = document.querySelector('#buttons')

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const medikit = document.querySelector('#medikit')
let message = document.querySelector('.message')

canvas.width = 760
canvas.height = 580

// fill the basic container
c.fillRect(0, 0, canvas.width, canvas.height)

const background = new Sprite({
    position: {
        x: 0,
        y:0
    },
    imageSrc: './assets/train-room.png'
})

const enemyEffect = new Fighter({
    position: {
        x: 160,
        y: 270
    },
    scale: 1,
    offset: {
        x: 160,
        y:95
    },
    imageSrc: './assets/Effect/fireEffect-idle.png',
    scale: 1,
    framesMax: 4,
    offset: {
        x: 160,
        y:95
    },
    sprites: {
        idle: {
            imageSrc: './assets/Effect/fireEffect-idle.png',
            framesMax: 1,
        },
        enforcement: {
            imageSrc: './assets/Effect/enforcement.png',
            framesMax: 5,
        },
        flame: {
            imageSrc: './assets/Effect/Flame.png',
            framesMax: 4,
        },
        darkProjection: {
            imageSrc: './assets/Effect/Dark_Projection.png',
            framesMax: 11,
        },
        cursedRings: {
            imageSrc: './assets/Effect/ringCurse.png',
            framesMax: 12,
        },
    }

})

const player = new Fighter ({
    position: {
    x: 196,
    y: 400
    },
    velocity: {
    x: 0,
    y: 0
    },
    offset: {
    x: 0,
    y: 0
    },
    imageSrc: './assets/Quicksilver/Idle.png',
    scale: 1,
    framesMax: 4,
    offset: {
        x: 160,
        y:95
    },
    sprites: {
        idle: {
            imageSrc: './assets/Quicksilver/Idle.png',
            framesMax: 4,
        },
        action1: {
            imageSrc: './assets/Quicksilver/action1.png',
            framesMax: 7,
        },
        action2: {
            imageSrc: './assets/Quicksilver/action2.png',
            framesMax: 13,
        },
        action3: {
            imageSrc: './assets/Quicksilver/action3.png',
            framesMax: 7,
        },
        action4: {
            imageSrc: './assets/Quicksilver/action4.png',
            framesMax: 6,
        },
        takeHit: {
            imageSrc: './assets/Quicksilver/Take Hit.png',
            framesMax: 1,
        },
    },
    // attackBox: {
    //     offset: {
    //         x:100,
    //         y:50
    //     },
    //     width: 100,
    //     height:50
    // }
})


const enemy = new Fighter ({
    position: {
    x: 600,
    y: 300
    },
    velocity: {
    x: 0,
    y: 0
    },
    color: 'blue',
    offset: {
    x: -50,
    y: 0
    },
    imageSrc: './assets/Sentinels/Sentinel_idle.png',
    scale: 1,
    framesMax: 4,
    offset: {
        x: 160,
        y:105
    },
    sprites: {
        idle: {
            imageSrc: './assets/Sentinels/Sentinel_idle.png',
            framesMax: 4,
        },
        action1: {
            imageSrc: './assets/Dormammu/attack1.png',
            framesMax: 3,
        },
        action2: {
            imageSrc: './assets/Sentinels/Action2.png',
            framesMax: 4,
        },
        action3: {
            imageSrc: './assets/Sentinels/Action3.png',
            framesMax: 8,
        },
        takeHit: {
            imageSrc: './assets/Sentinels/takeHit.png',
            framesMax: 1,
        },
        death: {
            imageSrc: './assets/Effect/fireEffect-idle.png',
            framesMax: 2,
        }
    }
})

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    player.update()
    if(!enemy.dead){
    enemy.update()
    }
    enemyEffect.update()
    
    // player actions

    //preventing the player to spam the action script
    if(!enemy.dead){
    buttons.addEventListener('click', (event)=>{
        buttons.classList.add("hideButtons")
    window.setTimeout(function(){
        buttons.classList.remove("hideButtons")
            },2000);
        })
    }
    //healing item
    medikit.addEventListener('click', (event)=>{
        player.health20()
    })
    // button1
    button1.addEventListener('click', (event)=>{
        player.position.x = 550
        player.attack1()
    window.setTimeout(function(){
        enemy.switchSprite('takeHit')
        },200);
    window.setTimeout(function(){
        player.position.x = 196
        enemy.switchSprite('idle')
        player.switchSprite('idle')
        },600);
        if(enemy.health > 10) {
    window.setTimeout(function(){
        enemy.enemyAttack2()
        enemyEffect.position.x = 550
        enemyEffect.position.y = 220
        enemyEffect.buffEffect()
        },1000);
    window.setTimeout(function(){
        enemyEffect.position.x = 160
        enemyEffect.position.y = 270
        enemy.switchSprite('idle')
        enemyEffect.switchSprite('idle')
        player.switchSprite('idle')
        },1500);
    }
    })
    // button 2
    button2.addEventListener('click', (event)=>{
        player.position.x = 700
        enemy.switchSprite('takeHit')
        player.attack2()
    window.setTimeout(function(){
        enemy.switchSprite('idle')
        player.position.x = 196
        player.switchSprite('idle')
    },1200);
    window.setTimeout(function(){
        enemy.enemyAttack3()
        },1400);
    window.setTimeout(function(){
        enemyEffect.position.x = 220
        enemyEffect.position.y = 320
        enemyEffect.flame()
        player.switchSprite('takeHit')
        },1800);
    window.setTimeout(function(){
        enemy.switchSprite('idle')
        enemyEffect.switchSprite('idle')
        enemyEffect.position.x = 160
        enemyEffect.position.y = 270
        },2200);
    window.setTimeout(function(){
        player.switchSprite('idle')
        },2600)
    })
    // button 3
    button3.addEventListener('click', (event)=>{
        player.position.x = 550
        player.attack3()
        window.setTimeout(function(){
            enemy.switchSprite('takeHit')
        },300);
    window.setTimeout(function(){
        player.position.x = 196
        enemy.switchSprite('idle')
        player.switchSprite('idle')
    },700);
    window.setTimeout(function(){
        enemy.enemyAttack2()
        enemyEffect.position.x = 130
        enemyEffect.darkProjections()
        player.switchSprite('takeHit')
        },1200);
    window.setTimeout(function(){
        player.switchSprite('idle')
        enemy.switchSprite('idle')
        enemyEffect.position.x = 160
        enemyEffect.switchSprite('idle')
        },1800);
    })
    // button 4
    button4.addEventListener('click', (event)=>{
        player.position.x = 550
        enemy.switchSprite('takeHit')
        player.attack4()
    window.setTimeout(function(){
        player.position.x = 196
        enemy.switchSprite('idle')
        player.switchSprite('idle')
    },600);
    window.setTimeout(function(){
        enemy.enemyAttack3()
        enemyEffect.position.x = 190
        enemyEffect.position.y = 320
        enemyEffect.darkRings()
        player.switchSprite('takeHit')
        },1000);
    window.setTimeout(function(){
        player.switchSprite('idle')
        enemy.switchSprite('idle')
        enemyEffect.position.x = 160
        enemyEffect.position.y = 270
        enemyEffect.switchSprite('idle')
        },1600);
    })
    if(enemy.health <= 0) {
        enemy.dead = true;
        message.innerHTML = 'VICTORY'
        buttons.classList.add("hideButtons")
        enemy.switchSprite('death')
        window.setTimeout(function(){
       window.location = 'mainPage.html';
    },10000);
    }
    if(player.heal) {
        player.heal = false
        document.querySelector('#playerHealth').style.width = player.health + '%'
    }
    if (player.attack) {
        enemy.hit10()
        player.attack = false 
        document.querySelector('#enemyHealth').style.width = enemy.health + '%'
     }
     if (enemy.attack) {
        player.hit10()
        enemy.attack = false 
        document.querySelector('#playerHealth').style.width = enemy.health + '%'
    }
    
  }
//  //if player misses
//  if (player.isAttacking && player.framesCurrent ===4) {
//     player.isAttacking = false
//  }
// //  where left player get hit
//  if (
//     rectangularCollision({
//         rectangle1: enemy,
//         rectangle2: player
//     }) &&
//     enemy.isAttacking &&
//     enemy.framesCurrent === 2
//     ) {
//     player.takeHit()
//     enemy.isAttacking = false
//     document.querySelector('#playerHealth').style.width = player.health + '%'
//  }

//  if (enemy.isAttacking && enemy.framesCurrent ===4) {
//     enemy.isAttacking = false
//  }

 //end game based on health
//  if (enemy.health <= 0 || player.health <= 0){
//  determineWinner({player, enemy})
//  }




animate()

