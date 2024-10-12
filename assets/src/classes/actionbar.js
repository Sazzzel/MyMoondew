class Action {
    constructor (imgPath, mode, x, y) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.mode = mode;
        this.img.src="../MyMoondew/assets/images/" + imgPath;
        
    }
    draw (ctx) {
        ctx.drawImage(this.img, this.x + 12, this.y + 12, 42, 42);
        ctx.fillStyle = "black";
        ctx.font = "18px Arial";
        ctx.fillText("" + this.mode, this.x + (43 - (this.mode)), this.y + 56);
    }
}

class ActionBar {
    constructor (x, y) {
        this.img = new Image();
        this.img.src = "../MyMoondew/assets/images/BarBack.png";
        this.imgFrame = new Image();
        this.imgFrame.src = "../MyMoondew/assets/images/ActionSelected.png";
        this.x = x;
        this.y = y;
        this.actionOffsetX = 5;
        this.actionOffsetY = 5;
        this.actionSlotOffsetX = 64;
        
        this.actions = [];
        this.actions.push(new Action("Hand.png", 0, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 9)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("Hoe.png", 1, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 0)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("Trowel.png", 2, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 1)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("WateringCan.png", 3, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 2)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("Sythe.png", 4, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 3)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("Fert.png", 5, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 4)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("Axe.png", 6, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 5)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("PickAxe.png", 7, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 6)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("Sword.png", 8, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 7)), this.y + (this.actionOffsetY)));
        this.actions.push(new Action("Net.png", 9, this.x + (this.actionOffsetX + (this.actionSlotOffsetX * 8)), this.y + (this.actionOffsetY)));
        
    }

    draw (ctx, mode) {
        ctx.drawImage(this.img, this.x, this.y);
        this.actions.forEach((action, index) => {
            if (tools [index]) {
              action.draw(ctx);  
            }
        
            
        });
        let modePos = mode - 1;
        if (modePos < 0 ){
            modePos = 9;
        }
        ctx.drawImage(this.imgFrame, this.x + (this.actionOffsetX - modePos + (this.actionSlotOffsetX * modePos)), this.y + (this.actionOffsetY), 70, 70);
    }
}

