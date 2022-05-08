namespace SpriteKind {
    export const portal = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    a += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
        mySprite.setImage(img`
            . . . f 5 f . . . . . . . . . . 
            . . . . f 5 f . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 f f . . . . . 
            . . f 5 5 5 f 1 1 5 f f . . . . 
            . . f 4 5 5 f f 1 5 5 f . . . . 
            . f 4 4 5 5 f f f 5 5 f . . . . 
            f 4 4 4 4 4 5 5 5 5 5 f f f f . 
            . f 4 4 4 4 4 5 5 f f 5 5 5 f f 
            . . f 5 5 5 5 5 f 5 5 5 5 f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 f 5 5 f 
            f f f f f 5 5 5 5 f f f f f f f 
            8 8 8 8 f f f f f f f 8 8 8 8 8 
            8 6 6 8 8 8 8 8 8 8 8 8 6 6 8 8 
            8 8 8 8 6 6 6 8 8 8 8 8 8 8 8 8 
            `)
    } else {
        mySprite.setImage(img`
            . . . f 5 f . . . . . . . . . . 
            . . . . f 5 f . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 f f . . . . . 
            . . f 5 5 5 f 1 1 5 f f . . . . 
            . . f 4 5 5 f f 1 5 5 f . . . . 
            . f 4 4 5 5 f f f 5 5 f . . . . 
            f 4 4 4 4 4 5 5 5 5 5 f f f f . 
            . f 4 4 4 4 4 5 5 f f 5 5 5 f f 
            . . f 5 5 5 5 5 f 5 5 5 5 f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 f 5 5 f 
            . f 5 5 5 5 5 5 5 f f f 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f f f f f f f f f f . . . 
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
        mySprite.setImage(img`
            . . . . . . . . . . f 5 f . . . 
            . . . . . . . . . f 5 f . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f f 5 5 5 5 5 f . . . 
            . . . . f f 5 1 1 f 5 5 5 f . . 
            . . . . f 5 5 1 f f 5 5 4 f . . 
            . . . . f 5 5 f f f 5 5 4 4 f . 
            . f f f f 5 5 5 5 5 4 4 4 4 4 f 
            f f 5 5 5 f f 5 5 4 4 4 4 4 f . 
            f 5 f 5 5 5 5 f 5 5 5 5 5 f . . 
            f 5 5 f 5 5 5 f 5 5 5 5 5 5 f . 
            f f f f f f f 5 5 5 5 f f f f f 
            8 8 8 8 8 f f f f f f f 8 8 8 8 
            8 8 6 6 8 8 8 8 8 8 8 8 8 6 6 8 
            8 8 8 8 8 8 8 8 8 6 6 6 8 8 8 8 
            `)
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . f 5 f . . . 
            . . . . . . . . . f 5 f . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f f 5 5 5 5 5 f . . . 
            . . . . f f 5 1 1 f 5 5 5 f . . 
            . . . . f 5 5 1 f f 5 5 4 f . . 
            . . . . f 5 5 f f f 5 5 4 4 f . 
            . f f f f 5 5 5 5 5 4 4 4 4 4 f 
            f f 5 5 5 f f 5 5 4 4 4 4 4 f . 
            f 5 f 5 5 5 5 f 5 5 5 5 5 f . . 
            f 5 5 f 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 5 5 f f f 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 5 5 5 5 5 5 5 f f . . 
            . . . f f f f f f f f f f . . . 
            `)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
let a = 0
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . f 5 f . . . 
    . . . . . . . . . f 5 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 5 5 5 5 5 f . . . 
    . . . . f f 5 1 1 f 5 5 5 f . . 
    . . . . f 5 5 1 f f 5 5 4 f . . 
    . . . . f 5 5 f f f 5 5 4 4 f . 
    . f f f f f f 5 5 5 4 4 4 4 4 f 
    f f 5 5 5 5 f 5 5 4 4 4 4 4 f . 
    f 5 f 5 5 5 5 f 5 5 5 5 5 f . . 
    f 5 5 f 5 5 5 f 5 5 5 5 5 5 f . 
    f 5 5 5 f f f 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . . f 5 5 5 5 5 5 5 5 5 f f . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
    controller.moveSprite(mySprite, 50, 0)
    mySprite.ay = 100
} else {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 200
}
if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile30`)) {
    controller.moveSprite(mySprite, 50, 0)
    mySprite.ay = 100
} else {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 200
}
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
    mySprite2 = sprites.create(img`
        ................
        ................
        .....3333.......
        ....33cccbb.....
        ....3cccccbb....
        ...33cc1cccb....
        ...3cccccccbb...
        ..33aaaaaaaab...
        ..3caccccbbaaa..
        .a3aacc1ccccbaa.
        .a3ccccc333bbcaa
        aa3c1cc33c3bccba
        ac3ccac3ccbbc1ba
        ac3acaa3ccbc3cba
        ac3acc3accbc3cba
        ac3acc3aabba3aba
        ac3ac13ccbcc3cb.
        cc3acc33bccb3bb.
        a3caacc3bcbb3...
        a3cccaabbbbc3...
        a3cccccbbaac3...
        a3c1c1cbcba33...
        .33ccaaaaba3....
        ..3aaabccb3.....
        ..33cbbc3b......
        ...33cc33b......
        ....b333bb......
        ....bbccbb......
        .....bbbbb......
        ................
        ................
        ................
        `, SpriteKind.portal)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile22`)
    tiles.setTileAt(value, assets.tile`myTile22`)
}
