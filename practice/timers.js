var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0;

// console.log("Wait for it");
function writeWaitingPercent(p) {
    process.stdout.clearLine();//clear the last line inside of the terminal
    process.stdout.cursorTo(0);//moves cursor back to beginning of line
    process.stdout.write(`waiting ...${p}%`);//string template used with percent variable
}

var interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
    // console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);


//setTimeout creates a delay
setTimeout(function() { //asynchronous behavior through timing functions
    clearInterval(interval);
    console.log('\n\ndone\n\n');
}, waitTime);

process.stdout.write('\n\n');
writeWaitingPercent(percentWaited);