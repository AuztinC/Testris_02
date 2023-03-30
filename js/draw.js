
const draw = new DrawHandler();

function DrawHandler() {
    
    var self = this;
    
    self.rect = function(x, y, width, height, color) {
        
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
        
        
    }
    
    
    
}

