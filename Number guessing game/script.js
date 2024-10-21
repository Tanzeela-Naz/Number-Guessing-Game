// // Random number between 1 and 50
// let randomNumber = Math.floor(Math.random() * 50) + 1;
// let attempts = 0;

// // function to check the guess
// function guessBtn() {
//     let userGuess = parseInt(document.getElementById('guess-num').value);
//     let message = document.getElementById('message');
//     attempts ++;

//     if (userGuess === randomNumber) {
//         message.textContent = `Congratulations!You guessed the number ${guessBtn} correctly ${attempts} attempts`;
//         message.style.color = "green";
//     } else if(userGuess > randomNumber) {
//        message.textContent = "Too high! try again.";
//        message.style.color = "red";
//     }else if (userGuess < randomNumber){
//         message.textContent = "Too low! try again.";
//         message.style.color = "red";
//     }
// }

        //--------Number Guessing Game----------
        
 // Random number between 1 and 50
let randomNumber = Math.floor(Math.random() * 50) + 1;

    // function to check the guess
function guessBtn() {
    let userGuess = parseInt(document.getElementById('guess-num').value);
    let message = document.getElementById('message');
    attempts++;
    
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${userGuess} correctly in ${attempts} attempts.`;
        message.style.color = "green";
    } else if (userGuess > randomNumber) {
       message.textContent = "Too high! Try again.";
       message.style.color = "red";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "red";
    }
}

function restartBtn() {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    attempts = 0; 
    document.getElementById('guess-num').value = ''; 
    document.getElementById('message').textContent = ''; 
    document.getElementById('attempts').textContent = 'Attempts: 0'; 
}

