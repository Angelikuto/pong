class Tableau1 extends Phaser.Scene{

    preload() {
        this.load.image('carre',"/assets/carre.png");
        this.load.image('cercle',"/assets/cercle.png");
    }

    create(){
        this.largeur = 500
        this.longueur = 1000

        this.haut = this.physics.add.image(0,0,"carre").setOrigin(0,0);
        this.haut.setDisplaySize(1000,20);
        this.haut.body.setAllowGravity(0);
        this.haut.setImmovable(true);


        this.bas = this.physics.add.image(0,500,"carre").setOrigin(0,1);
        this.bas.setDisplaySize(1000,20)
        this.bas.body.setAllowGravity(0);
        this.bas.setImmovable(true);

        this.balle = this.physics.add.image(this.longueur/2,this.largeur/2,"cercle");
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.1,1.1)
        this.balle.setVelocityX(Phaser.Math.Between(-400,400));
        this.balle.setVelocityY(Phaser.Math.Between(-400,400));
        this.balle.body.setMaxVelocity(1000,1000);

        this.p1 = this.physics.add.image(0,20,"carre").setOrigin(0,0);
        this.p1.setDisplaySize(20,100)
        this.p1.body.setAllowGravity(0);
        this.p1.setImmovable(true);


        this.p2 = this.physics.add.image(1000,20,"carre").setOrigin(1,0);
        this.p2.setDisplaySize(20,100)
        this.p2.body.setAllowGravity(0);
        this.p2.setImmovable(true);



        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);
        this.physics.add.collider(this.p1,this.balle);
        this.physics.add.collider(this.p2,this.balle);

        this.initKeyboard();

    }

    rebond(raquette){
        console.log(raquette.y);
        console.log(raquette.y)
    }

    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.p1.setVelocityY(300);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.p1.setVelocityY(-300);
                    break;
            }
        });

        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.p1.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.p1.setVelocityY(0);
                    break;
            }
        });



    }

    update() {
        if(this.balle.x>this.longueur){
            this.balle.x = 0
        }
        if(this.balle.x<0){
            this.balle.x = this.longueur
        }

        if(this.balle.y<0){
            this.balle.y = 0
        }
        if(this.balle.y>this.largeur){
            this.balle.y = this.largeur
        }


    }


}