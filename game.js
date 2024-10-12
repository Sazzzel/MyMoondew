let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let x = 0;
let mode = 0; //0 = empty hands, 1 = hoe, 2 = trowel, 3 = watering can, 4 = sythe, 5 = fertalizer bucket, 6 = axe, 7 = pickaxe, 8 = sword, 9 = net.
let tools = [];
let fullScreenModal = new Image();
fullScreenModal.src = "./assets/images/FullScreenModal.png";

function gameLoop (){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1920, 1080);
    world.draw(ctx, character.x, character.y);
    character.draw();
    actionBar.draw(ctx, mode);
    if (!fullscreen){
        ctx.drawImage(fullScreenModal, 0, 0);
    }
    
    requestAnimationFrame(gameLoop);
}

//created character
let character = new Character(ctx);
let actionBar = new ActionBar((1920 / 2) - (650 / 2), 1080 - 72);
let world = new World(1600);

tools.push(true);
tools.push(true);
tools.push(true);
tools.push(true);
tools.push(true);
tools.push(true);
tools.push(true);
tools.push(true);
tools.push(true);
tools.push(true);

gameLoop();
console.log(tools.length);