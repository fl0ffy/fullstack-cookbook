jQuery(document).ready(function(){
    var snakeCanvas = $('canvas.snake-game')[0],
        context = snakeCanvas.getContext('2d'),
        width = snakeCanvas.width,
        height = snakeCanvas.height,
        direction = 'down'
        snakeSize = 10,
        snake = [
            { 'x': 0, 'y': 0 },
            { 'x': 1, 'y': 0 },
            { 'x': 2, 'y': 0 },
            { 'x': 3, 'y': 0 }
        ],
        gameSpeed = 500,
        score = 0;

    var foodX,
        foodY,
        gameLoop;

    
    start();


    function start(){
        createFood();
        gameLoop = setInterval(reDraw, gameSpeed);
    }

    function stop(){
        clearInterval(gameLoop);
    }

    function createFood(){
        foodX = parseInt(Math.random()*width/snakeSize);
        foodY = parseInt(Math.random()*height/snakeSize);
    }

    function checkCollision(snakeArraryInput, foodXInput, foodYInput){
        var collision = 'nothing';

        snakeArraryInput.every(function(element){
            if(element.x == foodXInput && element.y == foodYInput){
                collision = 'food';
                return false;
            }else if(element.x == -1 ||
                    element.y == -1 ||
                    element.x == width/snakeSize ||
                    element.y == height/snakeSize){
                collision = 'wall';
                return false;
            }else{
                return true;
            }
        });
    
        return collision;
    }

    function reDraw(){
        console.log('redrawing');
        drawBg();
        drawSnake(snake);
        drawFood();
        drawScore();

        var collisionStatus = checkCollision(snake, foodX, foodY);
        if(collisionStatus == 'food'){
            score++;
            createFood();
            snake.unshift(updateDirection(snake, direction));
        }else if(collisionStatus == 'wall'){
            stop();
            score = 0;
        }
    };

    function drawFood(){
        paint(foodX*snakeSize,foodY*snakeSize,snakeSize,snakeSize,'green','black'); 
    };

    function drawScore(){
        context.fillStyle = "grey";
        context.fillText('Score:' + score, 5, height-5);
    }

    function drawBg(){
        paint(0,0,width,height,'white','black'); 
    };

    function drawSnake(snakeInput){
        updateSnake(snakeInput);
        snakeInput.forEach(function(element){
            paint(element.x*10, element.y*10, snakeSize, snakeSize, 'orange', 'black');
        });
    };

    function paint(x, y, w, h, bgColor, borderColor){
        context.fillStyle = bgColor;
        context.fillRect(x, y, w, h);
        context.strokeStyle = borderColor;
        context.strokeRect(x, y, w, h);
    };

    function updateSnake(snakeInput){
        snakeInput.shift();
        snakeInput.push(updateDirection(snakeInput, direction));
    };

    function updateDirection(snakeInput, direction){
        var cellX = snakeInput[snakeInput.length-1].x;
        var cellY = snakeInput[snakeInput.length-1].y;

        if(direction == 'right'){
            cellX = cellX+1;
        }else if(direction == 'left'){
            cellX = cellX-1;
        }else if(direction == 'up'){
            cellY = cellY-1;
        }else if(direction == 'down'){
            cellY = cellY+1;
        };

        return {'x':cellX, 'y':cellY};
    };

    $(document).on('keydown', function(e){
        if(e.which == '37' && direction != 'right'){
            direction = 'left';
        }else if(e.which == '38' && direction != 'down'){
            direction = 'up';
        }else if(e.which == '39' && direction != 'left'){
            direction = 'right';
        }else if(e.which == '40' && direction != 'up'){
            direction = 'down';
        };
    });

})