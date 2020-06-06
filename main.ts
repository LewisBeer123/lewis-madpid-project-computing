sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.startEffect(effects.hearts, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(15)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . c c 6 6 . . . . . . 
. . . . . c 6 5 7 6 c . . . . . 
. . . . c 6 7 7 5 7 6 c . . . . 
. . . . c c 6 7 7 6 6 6 . . . . 
. . . c c 6 c 6 6 6 7 c c . . . 
. . 6 c 6 6 6 7 7 7 c c 6 c . . 
. . c 7 6 6 6 6 7 6 6 7 7 6 . . 
. . c 6 7 7 7 7 7 7 7 7 6 c . . 
. . c c 6 7 7 7 7 7 7 6 c c . . 
. c 6 7 c c 7 6 6 7 6 6 7 6 c . 
. c 7 7 7 6 6 6 6 6 7 7 7 7 c . 
. c 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. c c 7 7 6 7 7 7 6 7 7 6 6 6 6 
c 6 7 6 c c 6 7 6 6 6 6 6 7 7 6 
c 7 7 7 7 6 6 6 6 6 6 7 7 7 7 6 
c c 7 7 7 7 7 7 7 7 7 7 7 7 6 c 
. c 6 7 6 7 7 7 6 7 7 7 6 7 c . 
. . c c 6 6 7 6 6 6 7 6 6 c . . 
. . . c c c 6 c 6 6 c c c . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . e e . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
})
