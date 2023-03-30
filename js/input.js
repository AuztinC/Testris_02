

const Input = new Input_obj

function Input_obj() {
    
    var self = this;
    
    self.up = 0;
    self.down = 0;
    self.left = 0;
    self.right = 0;
    
    document.addEventListener("keydown", function(event) {self.keyDown(event)});
    // document.addEventListener("keyup", function(event) {self.keyUp(event)});
    
    self.keyDown = function(event) {
        // console.log(event.key);
        
        if (event.key == "ArrowLeft") {
            player.moveLeft();
        }
        if (event.key == "ArrowRight") {
            player.moveRight();
        }
        if (event.key == "ArrowUp") {
            player.rotate();
        }
        if (event.key == "ArrowDown") {
            player.moveDown();
        }
        
        if (event.key == " ") {
            player.drop();
        }
        
        Update();
        
    }
    
    // self.keyUp = function(event) {
    //     // console.log(event.key);
        
    //     if (event.key == "ArrowRight") {
    //         self.right = 0;
    //     }
        
    // }
    
    
    
}