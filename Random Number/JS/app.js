const input = document.getElementById('input');
const submit = document.getElementById('submitBtn');
const notification = document.getElementById('notification');

let randomNum = 0;

function getNumber() {
randomNum = Math.floor(Math.random() * 100);
console.log(randomNum)
}
getNumber();

function guessNumber() {
    if (input.value == randomNum) {
        notification.innerText = "Congrats, you guessed the number! play again.."
        getNumber()
    } else if (input.value < randomNum) {
        notification.innerText = `sorry, number is more than ${input.value}`
    }
    else if (input.value > randomNum) {
        notification.innerText = `sorry, number is less than ${input.value}`
    }
    
}


submit.addEventListener('click', () => {
    guessNumber()
})