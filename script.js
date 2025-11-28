

function getComputerInput()
{
    let random_number = Math.random();

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
        return
    }
    if (playerInput === "rock" && computerInput === "paper")
    {
        console.log("PC gewinnt")
        return "pc"
    }
    if (playerInput === "rock" && computerInput === "scissors")
    {
        console.log("Player gewinnt")
        return "player"
    }

    if (playerInput === "paper" && computerInput === "rock")
    {
        console.log("Player gewinnt")
        return "player"
    }
    if (playerInput === "paper" && computerInput === "paper")
    {
        console.log("Unentschieden")
        return
    }
    if (playerInput === "paper" && computerInput === "scissors")
    {
        console.log("PC gewinnt")
        return "pc"
    }

    if (playerInput === "scissors" && computerInput === "rock")
    {
        console.log("PC gewinnt")
        return "pc"
    }
    if (playerInput === "scissors" && computerInput === "paper")
    {
        console.log("Player gewinnt")
        return "player"
    }
    if (playerInput === "scissors" && computerInput === "scissors")
    {
        console.log("Unentschieden")
        return 
    }
}

let pScore = 0
let pcScore = 0

for (let i = 0; i < 5; i++)
{
    
    let score = play()
    console.log(score)
    if (score === "pc")
    {
        pcScore += 1
        console.log("------------------")
        console.log("Player: " + pScore + " / Computer: " + pcScore)
        console.log("------------------")
    }
    else if (score === "player")
    {
        pScore += 1
        console.log("------------------")
        console.log("Player: " + pScore + " / Computer: " + pcScore)
        console.log("------------------")
    }

}





    