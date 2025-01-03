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