function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

let fortuneCookie = {
    sign: ['Sun', 'Moon', 'Stars', 'Mars', 'Uranus', 'Venus'],
    message: ['you have bright days ahead!', `your future is shardy`, 'we see a lot of red coming up', 'you are an ass', 'girls are from Venus', 'there is a lot of empty space'],
    advice: ['keep going!', 'take it slow', 'rethink your actions', `don't be a dick`, ':)', 'keep friends and family close']
}

function readFortuneCookie() {
    console.log(`Today your sign is ${fortuneCookie['sign'][generateRandomNumber(6)]} which means ${fortuneCookie['message'][generateRandomNumber(6)]}. Fourtune Cookie recommneds to ${fortuneCookie['advice'][generateRandomNumber(6)]}!`);
}

readFortuneCookie();