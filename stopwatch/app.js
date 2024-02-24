document.addEventListener("DOMContentLoaded", init);


function init(){

    var hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds'),
        miliseconds = document.getElementById('miliseconds'),

        startButton = document.getElementById('startButton'),
        pauseButton = document.getElementById('pauseButton'),
        stopButton = document.getElementById('stopButton'),
        resetButton = document.getElementById('resetButton'),

        setTime,
        currentTime,
        difference,
        timer = 0,
        interval;


    // Functions for event listeners
    // all these are function expressions - better why?
    var start = function(){
        console.log("Start button clicked");
        setTime = Date.now();
        interval = setInterval(update, 10);
    };

    var pause = function(){
        console.log("Pause button clicked");
        // look into the clearInterval function
        clearInterval(interval);
    };

    var stop = function(){
        console.log("Stop button clicked");
        clearInterval(interval);
        timer = 0;
    };

    var reset = function(){
        console.log("Reset button clicked");
        timer = 0;
        //Why is this a thing?
        updateScreen();
    };

    var update = function(){
        currentTime = Date.now();
        difference = currentTime - setTime;
        timer += difference;

        updateScreen();
        setTime = currentTime;
    };

    var updateScreen = function(){
        var timeRaw = timer/1000,
            timeMiliSeconds = parseInt((timeRaw % 1) * 100);
            timeSeconds = Math.floor(timeRaw);
            timeMinutes = Math.floor(timeSeconds/60);
            timeHours = Math.floor(timeMinutes/60);

        miliseconds.innerText = twoDigiter(timeMiliSeconds);
        seconds.innerText = twoDigiter(timeSeconds % 60);
        minutes.innerText = twoDigiter(timeMinutes % 60);
        // seconds.innerText = twoDigiter(processSixty(timeSeconds));
        // minutes.innerText = twoDigiter(processSixty(timeMinutes));
        hours.innerText = twoDigiter(timeHours);
    };

    var twoDigiter = function(number){
        var numString = number.toString();
        if(numString.length < 2){
            return "0" + numString;
        } else {
            return numString;
        }
    };

    // use %60 and render this funtion OBE
    // var processSixty = function(number){
    //     var divisible = Math.floor(number/60);
    //     if(number/60 >= divisible){
    //       return number - 60 * divisible;
    //     }
    //   };


    // Event listeners
    startButton.addEventListener('click', start);
    pauseButton.addEventListener('click', pause);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);

}