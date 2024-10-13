let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let x = 0;
let mode = 0; //0 = empty hands, 1 = hoe, 2 = trowel, 3 = watering can, 4 = sythe, 5 = fertalizer bucket, 6 = axe, 7 = pickaxe, 8 = sword, 9 = net.
let tools = [];
let fullScreenModal = new Image();
fullScreenModal.src = "./assets/images/FullScreenModal.png";

function gameLoop (){
    if (canPlay){
        world.draw(ctx, character.x, character.y);
        character.draw();
        actionBar.draw(ctx, mode);
        if (!fullscreen){
            ctx.drawImage(fullScreenModal, 0, 0);
        }
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

const music = new Audio("./assets/audio/music.mp3");
music.loop = true;
music.volume = 0.2;


const logo = new Image();
logo.src = "./assets/images/Logo.png";
const logoa = new Image();
logoa.src = "./assets/images/LogoA.png";
const logob = new Image();
logob.src = "./assets/images/LogoB.png";

logoa.onload = function () {

    ctx.drawImage(logoa, 0, 0);

};  
   


let canPlay =false;

document.addEventListener("click", () => {
    if (!canPlay){
        canPlay = true;
        music.play();
        
        logoStage1();

    }
    
});

let stage1op = 0
function logoStage1 (){
    let stage1 = setInterval(() => {

        stage1op += 0.005;
        ctx.globalAlpha = stage1op;
        ctx.drawImage(logob, 0, 0);
        if (stage1op >= 1){
            clearInterval(stage1);
            stage1op = 0;
            ctx.globalAlpha = stage1op;
            setTimeout(logoStage2, 4000);
        }
    }, 10);
    
    
}



function logoStage2 (){
    
    let stage2 = setInterval(() => {

        stage1op += 0.005;
        ctx.globalAlpha = stage1op;
        ctx.drawImage(logo, 0, 0);
        if (stage1op >= 1){
            clearInterval(stage2);
            stage1op = 0;
            ctx.globalAlpha = stage1op;
            setTimeout(logoStage3, 3000);
        }
    }, 10);
    
}

function logoStage3 (){
    gameLoop();
    let stage3 = setInterval(() => {

        stage1op += 0.01;
        ctx.globalAlpha = stage1op;
        
        if (stage1op >= 1){
            clearInterval(stage3);
            
        }
    }, 10);
    
}



console.log(tools.length);
