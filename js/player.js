
let colors = ["#f80", "#00f", "#ff0", "#0f0", "#f00", "#808", "#0ff", "#999"]
let player = new Player_obj();



setInterval(function() {
    player.moveDown();
    Update();
}, 1000);

function Player_obj() {
    
    var self = this;
    
    self.x = 0;
    self.y = 0;
    
    self.shapeNum = Math.floor(Math.random()*7);
    self.shape = shapes[self.shapeNum];
    self.rot = 0;
    
    self.color = self.shapeNum;
    
    self.upNext = [];
    
    
    self.clear = function() {
        
        for (let y = 0; y < self.shape[self.rot].length; y++) {
            for (let x = 0; x < self.shape[self.rot][y].length; x++) {
                if (y+self.y < 22) {
                    if (self.shape[self.rot][y][x] != 0) {
                        world.field[y+self.y][x+self.x] = 0;
                    }
                }
            }
        }
        
    }
    
    
    self.draw = function() {
        
        for (let y = 0; y < self.shape[self.rot].length; y++) {
            
            for (let x = 0; x < self.shape[self.rot][y].length; x++) {
                
                if (y+self.y < 22) {
                    if (self.shape[self.rot][y][x] != 0) {
                        world.field[y+self.y][x+self.x] = self.color+1;
                    }
                }
                
                
            }
        }
        
    }
    
    
    self.moveLeft = function() {
        self.clear();
        self.x -= 1;
        if (self.hitCheck()) {
            self.x += 1;
        }
        self.drawGhost();
        self.draw();
    }
    self.moveRight = function() {
        self.clear();
        self.x += 1;
        if (self.hitCheck()) {
            self.x -= 1;
        }
        self.drawGhost();
        self.draw();
    }
    // self.moveUp = function() {
    //     self.clear();
    //     self.y -= 1;
    //     self.draw();
    // }
    self.moveDown = function() {
        self.clear();
        self.y += 1;
        if (self.hitCheck()) {
            self.y -= 1;
            self.draw();
            world.checkLines();
            self.reset();
        } else {
            self.drawGhost();
            self.draw();
        }
        
        
        
    }
    
    self.rotateCW = function() {
        self.clear();
        self.rot++;
        if (self.rot > 3) {
            self.rot = 0;
        }
        if (self.hitCheck()) {
            self.rot --;
        }
        if (self.rot < 0) {
            self.rot = 3;
        }
        self.drawGhost();
        self.draw();
    }
    
    
    self.rotateCCW = function() {
        self.clear();
        self.rot--;
        if (self.rot < 0) {
            self.rot = 3;
        }
        if (self.hitCheck()) {
            self.rot ++;
        }
        if (self.rot > 3) {
            self.rot = 0;
        }
        self.drawGhost();
        self.draw();
    }
    
    self.hitCheck = function() {
        
        let check = false;
        
        for (let y = 0; y < self.shape[self.rot].length; y++) {
            for (let x = 0; x < self.shape[self.rot][y].length; x++) {
                
                if (y+self.y < world.height && x+self.x >= 0 && x+self.x < world.width) {
                    if (self.shape[self.rot][y][x] != 0) {
                        if (world.field[y+self.y][x+self.x] > 0) {
                            check = true;
                        }
                    }
                } else if (self.shape[self.rot][y][x] != 0) {
                    check = true;
                }
            }
        }
        
        return check;
        
    }
    
    self.dropCheck = function() {
        self.clear();
        let oy = self.y;
        while (!self.hitCheck()) {
            self.y++;
        }
        self.y--;
        let dy = self.y;
        self.y = oy;
        self.draw();
        return dy;
    }
    
    self.drawGhost = function() {
        for (let y = 0; y < self.shape[self.rot].length; y++) {
            for (let x = 0; x < self.shape[self.rot][y].length; x++) {
                    
                if (y+self.y < 22) {
                    if (self.shape[self.rot][y][x] != 0) {
                        world.field[y+self.dropCheck()][x+self.x] = -1;
                    }
                }
            }
        } 
        
    }
    
    self.drop = function() {
        let dy = self.dropCheck();
        self.clear();
        self.y = dy;
        self.draw();
        world.checkLines();
        self.reset();
    }
    
    
    
    self.reset = function(clear=false) {
        
        // "Respawn" after collision
        
        if (clear) {
            self.clear();
        }
        
        
        self.x = 4;
        self.y = 0;
        
        if (self.upNext.length == 1) {
            self.shapeNum = self.upNext[0];
            self.generateNext()
        } else {
            self.shapeNum = self.upNext.splice(0, 1)[0];
        }
        
        
        self.shape = shapes[self.shapeNum];
        self.color = self.shapeNum;
        
        
        
        // if you're hitting something the second you spawned, ya fucked up...
        if (self.hitCheck()) {
            // console.log("GAME OVA BITCH!");
            world.reset();
            world.draw();
            world.highScore();
            
            score = 0;
        }
        
        self.drawGhost();
        self.draw();
        
    }
    
    self.generateNext = function() {
        
        let numbers = [0, 1, 2, 3, 4, 5, 6];
        self.upNext = [];
        
        for (let i = 0; i < 7; i++) {
            self.upNext.push(numbers.splice(Math.floor(Math.random()*numbers.length), 1)[0])
        }
        
        // console.log(self.upNext);
        
    }
    
    
    
}