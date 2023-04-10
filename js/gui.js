
let gui = new GUI_obj();

function GUI_obj() {
    
    let self = this;
    
    self.x = 160;
    self.y = 0;
    self.width = 96;
    self.height = 352;
    self.color = "#666"
    
    
    self.start = function() {
        self.color = ctx.createLinearGradient(self.x+self.width, self.y, self.x, self.y+self.height);
        self.color.addColorStop(0, "#05a");
        self.color.addColorStop(1, "#0df");
    }
    
    
    
    self.draw = function() {
        
        draw.rect(self.x, self.y, self.width, self.height, self.color, true);
        
        draw.rect(self.x+14, self.y+14, 66, 66, window.getComputedStyle(canvas, null).getPropertyValue("background-color"));
        
        // console.log(canvas.style.backgroundColor)
        
        let s = shapes[player.upNext[0]][player.rot];
        
        for (let y = 0; y < s.length; y++) {
            for (let x = 0; x < s[y].length; x++) {
                if (s[y][x] != 0) {
                    draw.rect(self.x+16+x*16, self.y+16+y*16, 16, 16, colors[player.upNext[0]], true);
                }
            }
        }
        
        // let LCD = new FontFace("LCD", URL("7segment.ttf"))
        
        ctx.font = "16px Impact";
        ctx.fillStyle = "black";
        ctx.fillText("Score", self.x+16, self.y + 112);
        
        ctx.fillRect(self.x+8, self.y + 114, 76, 16)
        
        ctx.font = "16px LCD";
        ctx.fillStyle = "red";
        ctx.globalAlpha= 0.25;
        ctx.fillText("88888888" , self.x+16, self.y + 128);
        ctx.globalAlpha= 1;
        ctx.fillText(score.toString().padStart(8, ' ') , self.x+16, self.y + 128);
        
        ctx.font = "16px Impact";
        ctx.fillStyle = "black";
        ctx.fillText("Best", self.x+16, self.y + 160);
        
        ctx.fillRect(self.x+8, self.y + 162, 76, 16)
        
        ctx.font = "16px LCD";
        ctx.fillStyle = "red";
        ctx.globalAlpha= 0.25;
        ctx.fillText("88888888", self.x+16, self.y + 176);
        ctx.globalAlpha= 1;
        ctx.fillText(highScore.toString().padStart(8, ' '), self.x+16, self.y + 176);
        ctx.fillStyle = "black";
        
        
    }
    
    
    
}