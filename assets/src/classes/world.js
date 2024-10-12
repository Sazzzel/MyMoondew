class Tile {
    constructor (x, y, type, owned, drawDis){
        this.x = x;
        this.y = y;
        this.type = type;
        this.owned = owned;
        this.img = new Image();
        this.drawDis = drawDis;


        switch (type){

            case"grass":
                this.img.src = "../MyMoondew/assets/images/Grass.png";
                break;

            case"stone":
                this.img.src = "../MyMoondew/assets/images/Stone.png";
                break;

            case"dirt":
                this.img.src = "../MyMoondew/assets/images/Dirt.png";
                break;

            
        }
    }

    draw (ctx, x, y){
        if (this.distance(x, y) <= this.drawDis){
            ctx.drawImage(this.img, (x - this.x) + (1920 / 2), (y - this.y) + (1080 / 2), 32, 32);

        }
    }

    distance (x, y){
        return(Math.abs(x - this.x) + Math.abs(y - this.y));
    }
}

class World {
    constructor (drawDis){
        this.tiles = [];
        for (let x = -200; x < 200; x++){
            for (let y = -200; y < 200; y++){
                if (x % 2 == 1){
                    this.tiles.push(new Tile(x * 32, y * 32, "grass", false, drawDis));
                } else {
                    this.tiles.push(new Tile(x * 32, y * 32, "dirt", false, drawDis));
                }

                
            }
        }
        

    }

    draw (ctx, x, y){
        this.tiles.forEach((tile, index) => {

            tile.draw(ctx, x, y);

        });

    }
}