// function determineWinner({player, enemy, timerId}) {
//     document.querySelector('#displayText').style.display = 'flex'
//     if (player.health === enemy.health) {
//         document.querySelector('#displayText').innerHTML = 'Tie'
//      } else if (player.health > enemy.health) {
//         document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
//      } else if (player.health < enemy.health) {
//          document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
//       }
// }
// HERE i generate randoms actions from enemy
// randomAttack() {
            
//     let random4 = Math.floor(Math.random() * 4) + 1;
       
//        if(random4 === 1){
//         this.attack1();
//         enemyEffect.fireLaunch();
//         player.switchSprite('takeHit')
//         enemyEffect.position.x = 150;
//         enemyEffect.position.y = 300;
//         window.setTimeout(function(){
//             player.switchSprite('idle')
//             enemy.switchSprite('idle')
//             enemyEffect.switchSprite('idle')
//             enemyEffect.position.x = 160
//             enemyEffect.position.y = 270
//             },500);
//        }
//       if(random4 === 2){
//         this.enemyAttack2();
//         enemyEffect.fireEffect();
//         window.setTimeout(function(){
//             player.switchSprite('takeHit')
//             },1000);
//         window.setTimeout(function(){
//             enemy.switchSprite('idle')
//             enemyEffect.switchSprite('idle')
//             player.switchSprite('idle')
//             },1500);
//       }
//       if(random4 === 3){
//         this.enemyAttack3();
//         enemyEffect.darkProjections();
//        }
//       if(random4 === 4) {
//         this.enemyAttack3();
//         enemyEffect.darkRings();
//        }
//             }