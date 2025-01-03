let humanScore = 0
let computerScore = 0


function getComputerChoice()
{
    let n = Math.random()

    if (n < 1/3)
    {
        return "Rock"
    }
    else if (n < 2/3)
    {
        return "Paper"
    }
    else
    {
        return "Scissors"
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

    console.log(input)
    
}