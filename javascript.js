function getComputerChoice()
{
    let n = getRandomInt(3)

    if (n == 0)
    {
        return "Rock"
    }
    else if (n == 1)
    {
        return "Paper"
    }
    else
    {
        return "Scissors"
    }
}