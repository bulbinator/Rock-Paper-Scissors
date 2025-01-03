let humanScore = 0
let computerScore = 0


function getComputerChoice()
{
    let n = Math.random()

    if (n < 1/3)
    {
        return "ROCK"
    }
    else if (n < 2/3)
    {
        return "PAPER"
    }
    else
    {
        return "SCISSORS"
    }
}

function getHumanChoice()
{
    let input = ""
    let choices = ["ROCK", "PAPER", "SCISSORS"]

    while(true)
    {
        input = prompt("Enter: Rock, Paper, or Scissors")
        input = input.toUpperCase()

        if (choices.includes(input))
        {
            break
        }
    }

    return input
    
}

function playRound(humanChoice, computerChoice)
{
    console.log("Computer: " + computerChoice)

    if (humanChoice == "ROCK")
    {
        switch (computerChoice)
        {
            case 'ROCK':
                console.log("TIE!")
                break
            case 'PAPER':
                console.log("Paper beats Rock! You lose!")
                computerScore++
                console.log("Your Score: " + humanScore + " , Computer Score: " + computerScore)
                break
            case 'SCISSORS':
                console.log("Rock beats Scissors! You win!")
                humanScore++
                console.log("Your Score: " + humanScore + " , Computer Score: " + computerScore)
                break
        }
    }

    if (humanChoice == "PAPER")
        {
            switch (computerChoice)
            {
                case 'ROCK':
                    console.log("Paper beats Rock! You win!")
                    humanScore++
                    console.log("Your Score: " + humanScore + " , Computer Score: " + computerScore)
                    break
                case 'PAPER':
                    console.log("TIE")
                    break
                case 'SCISSORS':
                    console.log("Scissors beats Rock! You lose!")
                    computerScore++
                    console.log("Your Score: " + humanScore + " , Computer Score: " + computerScore)
                    break
            }
        }
    
    if (humanChoice == "SCISSORS")
    {
        switch (computerChoice)
        {
            case 'ROCK':
                console.log("Rock beats Scissors! You lose!")
                computerScore++
                console.log("Your Score: " + humanScore + " , Computer Score: " + computerScore)
                break
            case 'PAPER':
                console.log("Scissors beats Paper! You win!")
                humanScore++
                console.log("Your Score: " + humanScore + " , Computer Score: " + computerScore)
                break
            case 'SCISSORS':
                console.log("TIE")
                break
        }
    }
}

function playGame()
{
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)
}

for (let i = 0; i < 5; i++)
{
    playGame()
}