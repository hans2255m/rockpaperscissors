

function getComputerInput()
{
    let random_number = Math.random();
    console.log(random_number);

    if (random_number <= 0.3)
    {
        return "rock";
    }
    else if (random_number > 0.3 && random_number <= 0.6)
    {
        return "paper";
    }
    else
    {
        return "scissors"
    }

}

function getPlayerInput()
{
    let playerInput = prompt("rock / paper / scissors?")
    playerInput = playerInput.toLowerCase()
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors")
    {
        return playerInput
    }
    console.log("Bitte rock, paper oder scissors eingeben.")
}

function play()
{
    let playerInput = getPlayerInput()
    let computerInput = getComputerInput()

    console.log("Computer wählt: " + computerInput)
    console.log("Player wählt: " + playerInput)

    if (playerInput === "rock" && computerInput === "rock")
    {
        console.log("Unentschieden")
    }
    if (playerInput === "rock" && computerInput === "paper")
    {
        console.log("PC gewinnt")
    }
    if (playerInput === "rock" && computerInput === "scissors")
    {
        console.log("Player gewinnt")
    }

    if (playerInput === "paper" && computerInput === "rock")
    {
        console.log("Player gewinnt")
    }
    if (playerInput === "paper" && computerInput === "paper")
    {
        console.log("Unentschieden")
    }
    if (playerInput === "paper" && computerInput === "scissors")
    {
        console.log("PC gewinnt")
    }

    if (playerInput === "scissors" && computerInput === "rock")
    {
        console.log("PC gewinnt")
    }
    if (playerInput === "scissors" && computerInput === "paper")
    {
        console.log("Player gewinnt")
    }
    if (playerInput === "scissors" && computerInput === "scissors")
    {
        console.log("Unentschieden")
    }

}

let weiter = true

while (weiter)
{
    play()
    let x = prompt("Weiter? y/n")
    if (x === "y")
    {
        weiter = true
    }
    else
    {
        weiter = false
    }   
}



