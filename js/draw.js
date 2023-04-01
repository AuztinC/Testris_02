
const draw = new DrawHandler();

function DrawHandler() {
    
    var self = this;
    
    self.rect = function(x, y, width, height, color, border=false) {
        
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
        
        if (border) {
            let grd = ctx.createLinearGradient(x+width, y, x, y+height);
            grd.addColorStop(1, "black");
            grd.addColorStop(0, "white");
            
            ctx.strokeStyle = grd;
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.25;
            ctx.strokeRect(x+1, y+1, width-1, height-1);
            ctx.globalAlpha = 1;
        }
        
        
        
    }
    
    
    
}

