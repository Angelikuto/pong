class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('balle','assets/pokeball.png');
        this.load.image('carreG','assets/sacha.png');
        this.load.image('carreD','assets/chen.png');
    }

    create() {
        this.hauteur = 500
        this.largeur = 1000
        this.hauteur1 = 100
        this.largeur1 = 20




        //barre du haut

        this.haut=this.physics.add.image(0,0,'carre').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);
        //barre du bas


        this.bas=this.physics.add.image(0,this.hauteur-20, 'carre',).setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        //balle
        this.balle=this.physics.add.image(this.largeur/2, this.hauteur/2, 'balle').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.1,1.1);
        this.balle.body.setMaxVelocity(500,500)
        this.balle.setVelocityX(Phaser.Math.Between(200,-200))
        this.balle.setVelocityY(Phaser.Math.Between(0,0))




        //raquette gauche

        this.gauche=this.physics.add.image(this.largeur1,this.hauteur1*2,'carreG').setOrigin(0,0);
        this.gauche.setDisplaySize(this.largeur1,this.hauteur1);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);

        //raquette de droite

        this.droite=this.physics.add.image(960,this.hauteur1*2,'carreD').setOrigin(0,0);
        this.droite.setDisplaySize(this.largeur1,this.hauteur1);
        this.droite.body.setAllowGravity(false);
        this.droite.setImmovable(true);

        let me = this;
        this.physics.add.collider(this.balle, this.droite, function(){
            console.log('touche droit');
            me.rebond(me.droite);
        });
        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);
        this.physics.add.collider(this.balle,this.gauche);
        this.physics.add.collider(this.balle,this.droite);

        this.initKeyboard();


    }

    rebond(raquette){
        console.log(raquette.y);
        console.log(this.balle.y);
        console.log(this.balle.y-raquette.y);
        let hauteur1 = raquette.displayHeight;

        let positionRelativeRaquette = (this.balle.y - raquette.y);

        positionRelativeRaquette = (positionRelativeRaquette / hauteur1);
        positionRelativeRaquette = positionRelativeRaquette*2-1;

        this.balle.setVelocityY(this.balle.body.velocity.y + positionRelativeRaquette * 50);
    }
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.gauche.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(0);
                    break;

                case Phaser.Input.Keyboard.KeyCodes.DOWN:
                    me.droite.setVelocityY(0);
                    break;

                case Phaser.Input.Keyboard.KeyCodes.UP:
                    me.droite.setVelocityY(0);
                    break;

            }
        });
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.gauche.setVelocityY(200);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(-200);
                    break;

                case Phaser.Input.Keyboard.KeyCodes.DOWN:
                    me.droite.setVelocityY(-200);
                    break;

                case Phaser.Input.Keyboard.KeyCodes.UP:
                    me.droite.setVelocityY(200);
                    break;


            }

        });
    }
    update() {
        if(this.balle.x>=this.largeur || this.balle.x<=0){
            this.balle.x = this.largeur/2
            this.balle.y = this.hauteur/2
            this.speedX = -1500
            this.balle.setVelocity(500*Phaser.Math.Between(-1,1))
            this.balle.setVelocityY(Phaser.Math.Between(-500, 500))
        }
    }
}