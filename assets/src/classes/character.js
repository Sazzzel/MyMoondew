//Character Blueprint
class Character{ 
    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        this.img.src="../MyMoondew/assets/images/char.png";
        this.drawWidth = 42;
        this.drawHeight = 42;
        this.frame = 0;
        this.frameWidth = 16;
        this.frameHeight = 72/4;
        this.framedelay = 30;
        this.frameCounter = 0;
        this.lastFrame = 2;
        this.direction = 2;
        this.speed = 1;
        this.sprint = false;
        this.x = -6400;
        this.y = -6400;
        this.vx = 0;
        this.vy = 0;
    }

    isMoving(){
        return (this.vx != 0 || this.vy != 0);
    }
    //where and how to draw charater
    draw(){
        console.log(this.x + " " + this.y);
        this.x -= this.vx;
        this.y += this.vy;
        if (this.sprint){
            this.x -= this.vx;
            this.y += this.vy;
        }
        // set dir based on vel
        
        if(this.vy>0) this.setDirection("up");
        if(this.vy<0) this.setDirection("down");
        if(this.vx>0) this.setDirection("right");
        if(this.vx<0) this.setDirection("left");
        if (this.y > -960){
            this.y = -960;
        }

        if (this.y < -11840){
            this.y = -11840;
        }
        if (this.x > -960){
            this.x = -960;
        }
        if (this.x < -11840){
            this.x = -11840;
        }
        

        if (this.frame > this.lastFrame){
            this.frame = 0;
               
        }
        ctx.drawImage(this.img, this.frame*this.frameWidth, this.direction*this.frameHeight , 16, 72/4, 1920/2-this.drawWidth/2, 1080/2-this.drawHeight/2, this.drawWidth, this.drawWidth);
        if (this.framedelay < this.frameCounter){
            this.frameCounter = 0;
            if (this.isMoving()){
                this.frame++;
                
            }
            

        } 
        this.frameCounter++;
        if(this.sprint){
            this.frameCounter++;
        }
        
        
       
    }
    //set direction on the sprint sheet.
    setDirection(direction){
        switch (direction){

            case"up":
                this.direction = 0;
                break;

            case"down":
                this.direction = 2;
                break;

            case"left":
                this.direction = 3;
                break;

            case"right":
                this.direction = 1;
                break;
        }

        

    }
}