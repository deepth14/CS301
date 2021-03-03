const prompt = require('prompt-sync')();
let guess = Math.floor(Math.random() * 10)
let attempt = 0;
let user;
do{
    user = parseInt(prompt('enter a number between 1 to 10: '));
    attempt++;
}

while(guess !== user){
    if (attempt === 1){
        console.log('owesome')
    }
    else if(attempt === 2){
        console.log('Great')
    }
    else if(attempt === 3){
        console.log('not bad')
    }
    else if (attempt > 3){
        console.log(`it took you ${attempt} attempts`)
    }

}
