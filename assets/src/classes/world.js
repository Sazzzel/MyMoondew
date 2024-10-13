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

            case"plowed":
                this.img.src = "../MyMoondew/assets/images/Plowed.png";
                break;

            case"growing":
                this.img.src = "../MyMoondew/assets/images/Growing.png";
                break;

            case"harvested":
                this.img.src = "../MyMoondew/assets/images/Harvested.png";
                break;

            
        }
        
    }

    draw (ctx, x, y){
        if (this.distance(x, y) <= this.drawDis){
            ctx.drawImage(this.img, (x + this.x) + (1920 / 2), (y + this.y) + (1080 / 2), 64, 64);
            
        }
    }

    distance (x, y){
        return(Math.abs(this.x - (0 - x )) + Math.abs((0 - y) - this.y));
    }
}

class World {
    constructor (drawDis){
        this.tiles = [];
        this.drawDis = drawDis;
        this.loadMapJson("");
       
    }

    draw (ctx, x, y){
        this.tiles.forEach((tile, index) => {

            tile.draw(ctx, x, y);

        });
    }

    loadMapJson(mapName) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', './assets/json/map.json', false); // false makes the request synchronous
        xhr.send(null);

        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            
            for(let row of data){
                for(let t of row){
                    this.addTile(t.type, t.x, t.y, t.owned, t.canWalk);
                }
            }
            
            // Display JSON data in the browser
            
        } else {
            console.error('Error fetching the JSON file:', xhr.statusText);
        }
    }

    addTile(type, x, y, owned, canWalk){
        this.tiles.push(new Tile(x, y, type, owned, this.drawDis));
    }

}


