

let world = new World();

function World() {
    
    let self = this;
    
    self.width = 10;
    self.height = 22;
    
    self.field = [];
    
    
    
    
    
    
    // self.field[0][6] = 1;
    
    self.start = function() {
        self.reset();
    }
    
    
    self.checkLines = function() {
        
        let check = false;
        
        for (let y = 0; y < self.height; y++) {
            check = true;
            for (let x = 0; x < self.width; x++) {
                if (self.field[y][x] <= 0) {
                    check = false;
                    // console.log("No Dice...");
                    // break;
                }
            }
            if (check == true) {
                // console.log("AHBINGOOO");
                
                self.field.splice(y, 1);
                let line = [];
                
                for (let x = 0; x < self.width; x++) {
                    line[x] = 0;
                }
                
                score += 1;
                // console.log(y);
                
                self.field.splice(0, 0, line)
            }
        }
        
        for (let x = 0; x < self.width; x++) {
            if (self.field[y][x] == 0) {
                check = false;
            }
        }
        
        
    }
    
    self.reset = function() {
        self.field = [];
    
        for (let y = 0; y < self.height; y++) {
            self.field[y] = [];
            for (let x = 0; x < self.width; x++) {
                self.field[y][x] = 0;
            }
        }
    }
    
    self.draw = function() {
        
        for (let y = 0; y < self.height; y++) {
            for (let x = 0; x < self.width; x++) {
                if (self.field[y][x] > 0) {
                    draw.rect(x*16, y*16, 16, 16, colors[self.field[y][x]-1], true);
                }
                if (self.field[y][x] < 0) {
                    ctx.globalAlpha = 0.5;
                    draw.rect(x*16, y*16, 16, 16, "white", true);
                    ctx.globalAlpha = 1;
                    self.field[y][x] = 0;
                }
            }
        }
        
    }
    
    self.highScore = function() {
        
        if (localStorage.getItem("Score")) {
            if(score > parseInt(localStorage.getItem("Score"))) {
                highScore = score;
                localStorage.setItem("Score", score.toString());
            }
        } else {
            console.log("No 'Score' in localStorage, creating...")
            highScore = score;
            localStorage.setItem("Score", score);
        }
        
        
    }
}

