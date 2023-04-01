
let gui = new GUI_obj();

function GUI_obj() {
    
    let self = this;
    
    self.x = 160;
    self.y = 0;
    self.width = 96;
    self.height = 352;
    self.color = "#666";
    
    
    
    
    self.draw = function() {
        draw.rect(self.x, self.y, self.width, self.height, self.color);
        
        draw.rect(self.x+16, self.y+16, 64, 64, "black");
        
        let s = shapes[player.upNext[0]][player.rot];
        
        for (let y = 0; y < s.length; y++) {
            for (let x = 0; x < s[y].length; x++) {
                if (s[y][x] != 0) {
                    draw.rect(self.x+16+x*16, self.y+16+y*16, 16, 16, colors[player.upNext[0]], true);
                }
            }
        }
        
        
        
        ctx.font = "16px Impact";
        ctx.fillStyle = "black";
        ctx.fillText("Lines: " + score, self.x+16, self.y + 112);
        ctx.fillText("Best: " + document.cookie.split("=")[1], self.x+16, self.y + 144);
        ctx.fillStyle = "black";
        
        
    }
    
}