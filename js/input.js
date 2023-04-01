

const Input = new Input_obj

function Input_obj() {
    
    var self = this;
    
    self.up = 0;
    self.down = 0;
    self.left = 0;
    self.right = 0;
    self.touchX = 0;
    self.touchY = 0;
    self.tTime = 0;
    
    
    document.addEventListener("keydown", function(event) {self.keyDown(event)});
    // document.addEventListener("keyup", function(event) {self.keyUp(event)});
    
    document.addEventListener("touchstart", function(event){self.touchStart(event); event.preventDefault()}, {passive: false});
    document.addEventListener("touchmove", function(event){self.touchMove(event); event.preventDefault()}, {passive: false});
    document.addEventListener("touchend", function(event){self.touchEnd(event); event.preventDefault()}, {passive: false});
    
    self.touchStart = function(event) {
        let d = new Date()
        self.tTime = d.getTime();
        self.touchX = event.touches[0].pageX;
        self.touchY = event.touches[0].pageY;
    }
    
    self.touchMove = function(event) {
        if (event.touches[0].pageX - self.touchX < -16) {
            player.moveLeft();
            self.touchX = event.touches[0].pageX;
            self.touchY = event.touches[0].pageY;
            Update();
        }
        if (event.touches[0].pageX - self.touchX > 16) {
            player.moveRight();
            self.touchX = event.touches[0].pageX;
            self.touchY = event.touches[0].pageY;
            Update();
        }
        if (event.touches[0].pageY - self.touchY > 16) {
            player.moveDown();
            self.touchX = event.touches[0].pageX;
            self.touchY = event.touches[0].pageY;
            Update();
        }
    }
    
    self.touchEnd = function (event) {
        let d = new Date()
        // self.tTime = d.getTime();
        if (d.getTime() - self.tTime < 100) {
            player.rotate();
            Update();
        }
    }
    
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