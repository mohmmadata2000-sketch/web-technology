function game() {

    let number = 6;
    let guess;

    while (true) {

        guess = Number(prompt("Guess a number between 0 and 10"));

        if (guess == number) {
            alert("Yeah, you guessed it!");
            break;
        }

        else if (guess < number) {
            alert("Too low, try again");
        }

        else {
            alert("Too high, try again");
        }
    }

    let again = prompt("Do you want to play again? yes or no");

    if (again == "yes") {
        game();
    }
    else {
        alert("Goodbye!");
    }
}

game();