document.addEventListener("keydown", (e) => {

    switch (e.key){

        case"w":
            character.setDirection("up");
            character.vy = 1;
            break;

        case"a":
            character.setDirection("left");
            character.vx = -1;
            break;

        case"s":
            character.setDirection("down");
            character.vy = -1;
            break;

        case"d":
            character.setDirection("right");
            character.vx = 1;
            break;

        case"0":
            if(tools[0]){
                mode = 0;
            }
            break;

        case"1":
            if(tools[1]){
                mode = 1;
            }
            break;
        
        case"2":
            if(tools[2]){
                mode = 2;
            }
            break;
        
        case"3":
            if(tools[3]){
                mode = 3;
            }
            break;
        
        case"4":
            if(tools[4]){
                mode = 4;
            }
            break;
        
        case"5":
            if(tools[5]){
                mode = 5;
            }
            break;
        
        case"6":
            if(tools[6]){
                mode = 6;
            }
            break;
        
        case"7":
            if(tools[7]){
                mode = 7;
            }
            break;
        
        case"8":
            if(tools[8]){
                mode = 8;
            }
            break;
        
        case"9":
            if(tools[9]){
                mode = 9;
            }
            break;
        
        case"q":
            if(tools[mode-1]){
                mode--;
            } else {
                mode = tools.length - 1;
            }
            break;
        
        case"e":
            if(tools[mode +1]){
                mode++;
            } else {
                mode = 0;
            }
            break;

        case"f":
            useTool();
            break;

    }
    console.log(mode);
});

document.addEventListener("keyup", (e) => {

    switch (e.key){

        case"w":
            
            if(character.vy == 1){
                character.vy = 0;
            }
            break;

        case"a":
            
            if (character.vx == -1){
                character.vx = 0;
            }
            break;

        case"s":
            
            if (character.vy == -1){
                character.vy = 0;
            }
            break;

        case"d":
            
            if (character.vx == 1){
                character.vx = 0;
            }
            break;
    }

});