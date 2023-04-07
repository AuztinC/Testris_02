

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
    self.cX = 0;
    self.cY = 0;
    
    self.touchSense = 32;
    
    
    document.addEventListener("keydown", function(event) {self.keyDown(event)});
    // document.addEventListener("keyup", function(event) {self.keyUp(event)});
    
    document.addEventListener("touchstart", function(event){self.touchStart(event); event.preventDefault()}, {passive: false});
    document.addEventListener("touchmove", function(event){self.touchMove(event); event.preventDefault()}, {passive: false});
    document.addEventListener("touchend", function(event){self.touchEnd(event); event.preventDefault()}, {passive: false});
    
    self.touchStart = function(event) {
        canvas.requestFullscreen();
        let d = new Date()
        self.tTime = d.getTime();
        self.touchX = event.touches[0].pageX;
        self.touchY = event.touches[0].pageY;
        self.cX = self.touchX;
        self.cY = self.touchY;
    }
    
    self.touchMove = function(event) {
        let d = new Date();
        
        let pageX = event.changedTouches[0].pageX;
        let pageY = event.changedTouches[0].pageY;
        
        
        // console.log(Math.round(event.touches[0].pageY - self.touchY)%32);
        if (event.touches[0].pageX - self.cX <= -self.touchSense) {
            player.moveLeft();
            self.cX = pageX;
            self.cY = pageY;
            Update();
        }
        if (event.touches[0].pageX - self.cX >= self.touchSense) {
            player.moveRight();
            self.cX = pageX;
            self.cY = pageY;
            Update();
        }
        if (event.touches[0].pageY - self.cY >= self.touchSense) {
            player.moveDown();
            self.cX = pageX;
            self.cY = pageY;
            Update();
        }
    }

    self.touchEnd = function (event) {
        // console.log(event.changedTouches[0].pageY - self.touchY)
        let d = new Date()
        
        let pageX = event.changedTouches[0].pageX;
        let pageY = event.changedTouches[0].pageY;
        
        // self.tTime = d.getTime();
        if (d.getTime() - self.tTime < 100 && pageX - self.touchX < touchSense && pageY - self.touchY < touchSense) {
            
            if (pageX > parseFloat(window.getComputedStyle(document.querySelector("body"), null).width)/2) {
                player.rotateCW();
            } else {
                player.rotateCCW();
            }
            
            
            Update();
        }
        
        if (pageY - self.touchY >= 64 && d.getTime() - self.tTime < 500){
            player.drop();
            Update();
            // console.log("DRROPPPP");
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
            // player.rotate();
        }
        if (event.key == "ArrowDown") {
            player.moveDown();
        }
        
        if (event.key == " ") {
            player.drop();
        }
        
        if (event.key == "z") {
            player.rotateCCW();
        }
        
        if (event.key == "x") {
            player.rotateCW();
        }
        
        if (event.key == "r") {
            localStorage.setItem("Score", 0);
            highScore = 0;
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