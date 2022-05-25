class Sprite {
    constructor({ position, imageSrc, scale = 1, framesMax = 1, offset = {x:0, y:0}, framesHold = 10}){
        this.position = position
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = framesHold
        this.offset = offset
    }

    draw() {
        c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        )
     }

     animateFrames() {
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {

            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++
            }else {
                this.framesCurrent = 0
            }
        }
     }

    update() {
        this.draw()
        this.animateFrames()
  }
}

class Fighter extends Sprite{
    constructor({ 
        position,
        color = 'red',
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = {x:0, y:0},
        sprites,
        attackBox = { offset: {}, width: undefined, height: undefined }
         }) {
        //  to get the properties we want i use "super"
        super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset
            })
        this.width = 50
        this.height = 150
        this.lastButton
        //here i'm making a hitbox square
        this.attackBox = {
          position:{
              x: this.position.x,
              y: this.position.y
          },
          offset: attackBox.offset,
          width: attackBox.width,
          height: attackBox.height
        }
        this.color = color
        this.health = 100
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 6
        this.sprites = sprites
        this.attack 
        this.dead = false

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }


    update() {
        this.draw()
        // if (!this.dead)
        this.animateFrames()
        
        // this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        // this.attackBox.position.y = this.position.y + this.attackBox.offset.y
    }
    
        attack1() {
            this.switchSprite('action1')
            this.attack = true
           
            // this.switchSprite('firePillar')
           
            }
        attack2() {
            this.switchSprite('action2')
            this.attack = true
            }
        attack3() {
            this.switchSprite('action3')
                }
        attack4() {
            this.switchSprite('action4')
                }
    
        hit10() {
            this.health -= 10
            // // if (this.health <= 0){
            // // this.switchSprite('death')
            // // } else this.switchSprite('takeHit')
            // if (enemy.health === 1){
            // document.querySelector('#displayText').innerHTML = 'VICTORY'
            // }
        }
        enemyAttack1() {
            this.attack = true
            this.switchSprite('action1')
         }
        enemyAttack2() {
           this.attack = true
           this.switchSprite('action2')
        }
        enemyAttack3() {
            this.attack = true
            this.switchSprite('action3')
         }
        fireEffect() {
            this.switchSprite('firePillar')
        }
        fireLaunch() {
            this.switchSprite('fireBall')
        }
        darkProjections() {
            this.switchSprite('darkProjection')
        }
        darkRings() {
            this.switchSprite('cursedRings')
        }
        switchSprite(sprite) {
    
        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image
                    this.framesMax = this.sprites.idle.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'action1':
                if (this.image !== this.sprites.action1.image) {
                    this.image = this.sprites.action1.image
                    this.framesMax = this.sprites.action1.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'action2':
                if (this.image !== this.sprites.action2.image) {
                    this.image = this.sprites.action2.image
                    this.framesMax = this.sprites.action2.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'action3':
                if (this.image !== this.sprites.action3.image) {
                    this.image = this.sprites.action3.image
                    this.framesMax = this.sprites.action3.framesMax
                    this.framesCurrent = 0
                }
                break;    
            case 'action4':
                if (this.image !== this.sprites.action4.image) {
                    this.image = this.sprites.action4.image
                    this.framesMax = this.sprites.action4.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'firePillar':
                if (this.image !== this.sprites.firePillar.image) {
                    this.image = this.sprites.firePillar.image
                    this.framesMax = this.sprites.firePillar.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'fireBall':
                if (this.image !== this.sprites.fireBall.image) {
                    this.image = this.sprites.fireBall.image
                    this.framesMax = this.sprites.fireBall.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'darkProjection':
                if (this.image !== this.sprites.darkProjection.image) {
                    this.image = this.sprites.darkProjection.image
                    this.framesMax = this.sprites.darkProjection.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'cursedRings':
                if (this.image !== this.sprites.cursedRings.image) {
                    this.image = this.sprites.cursedRings.image
                    this.framesMax = this.sprites.cursedRings.framesMax
                    this.framesCurrent = 0
                }
                break;  
            case 'takeHit':
                if (this.image !== this.sprites.takeHit.image) {
                    this.image = this.sprites.takeHit.image
                    this.framesMax = this.sprites.takeHit.framesMax
                    this.framesCurrent = 0
                }
                break;   
            case 'death':
                if (this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image
                    this.framesMax = this.sprites.death.framesMax
                    this.framesCurrent = 0
                }
                break;    
                }
            
         }
}