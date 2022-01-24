let gameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 500,
    backgroundColor: '#00000',
    parent: 'game',
    disableWebAudio: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new Tableau1()

};
let game = new Phaser.Game(gameConfig);
