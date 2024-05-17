#! /usr/bin/env node

// Use this packages in this project
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";
import chalkanimation from "chalk-animation";

const sleep = () => {
    return new Promise((res) => {
        setTimeout (res,3000)
    });
}

// Making a neontitle for program
async function start() {
    let neonTitle = chalkanimation.rainbow("\n *Welcome to the mystery of the lost kingdom* \n");
    await sleep()
    neonTitle.stop()
}
// calling the function
await start()

// Again function for restarting the game
 async function again() {


// Main  inquirer list to start the game

 const answer = await inquirer.prompt([
    {
        name:"startgame",
        type:"list",
        message:"Select your action?",
        choices:[
            "Go",
            "Pickup Woods",
            "Search Crown",
            "Run"
        ]
    }
 ])

 // First option code.
 if (answer.startgame === "Go"){
    console.log(chalk.blue("Go search gems"))
    let gems = await inquirer.prompt([
        {
            name:"findgems",
            type:"list",
            message:"Select the option for finding gems!",
            choices:["Go north","Talk to fairy","Find Exit from the kingdom"]
        
        }
    ])
    // nested functions
    if (gems.findgems === "Go north"){
        console.log("You have to find Gems for win this game!")
        let finding = await inquirer.prompt([
            {
                name:"goNorth",
                type:"number",
                message:"How many gems did you find?"
            }
        ])
        if (finding.goNorth > 5 ){
            console.log(chalk.cyanBright("You win the game!"))
            async function Win() {
                let neonTitle = chalkanimation.rainbow("\n WINNER OF THE GAME \n");
                await sleep()
                neonTitle.stop()
            }
            // calling the function
            await Win()
        } else {
            console.log(chalk.redBright("You can`t go out from this lost kingdom!"))
            async function out() {
                let neonTitle = chalkanimation.rainbow("\n GAME OVER! \n");
                await sleep()
                neonTitle.stop()
            }
            // calling the function
            await out()
        }
    } else if (gems.findgems === "Talk to fairy"){
        console.log(chalk.cyanBright("You have to take a map from the fairy to finding a gems.."))
        let fairy = await inquirer.prompt({
            name:"talk",
            type:"list",
            message:"What you are going to ask from fairy?",
            choices:["Asking a map!","Asking where is the first big gem?"]
        })
        if (fairy.talk === "Asking a map!"){
            console.log(chalk.greenBright("Here is the map of finding all the gems and a super treasure box of the lost kingdom..."))
            async function win() {
                let neonTitle = chalkanimation.rainbow("\n WINNER OF THIS GAME! \n");
                await sleep()
                neonTitle.stop()
            }
            // calling the function
            await win()
        } else {
            console.log(chalk.yellowBright("Fairy give you the hint for finding first big gem but you have to find more gems to win this game :("))
            async function lose() {
                let neonTitle = chalkanimation.rainbow("\n YOU CAN`T WIN THIS GAME! \n");
                await sleep()
                neonTitle.stop()
            }
            // calling the function
            await lose()
        }
    } else if (gems.findgems === "Find Exit from the kingdom") {
        console.log(chalk.gray("You can`t go out without the gems!"))
        async function over() {
            let neonTitle = chalkanimation.rainbow("\n GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await over()
    } else {
        console.log(chalk.red("Game Over!"));
        
    }
    
// Second option code.
 } else if (answer.startgame === "Pickup Woods"){
    console.log(chalk.greenBright("Pickup the woods to start the fire for protecting yourself from the monsters in this lost kingdom!"))
     let wood = await inquirer.prompt([
        {
            name:"fire",
            type:"input",
            message:"How many woods did you pick for start the fire?"
        }
     ])
     // nested function
     if (wood.fire > 5){
        console.log(chalk.cyanBright("Now you can start the fire for protection!"))
        async function pro() {
            let neonTitle = chalkanimation.rainbow("\n Now you can just survive in this kingdom, GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await pro()
     } else if (wood.fire < 2){
        console.log(chalk.cyanBright("You can survive only one day in this kingdom!"))
        async function lost() {
            let neonTitle = chalkanimation.rainbow("\n YOU LOST IN THIS KINGDOM GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await lost()
     } else {
        console.log(chalk.red("You will die!"));
        async function over() {
            let neonTitle = chalkanimation.rainbow("\n GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await over()        
     }
     
     // Third option code.
 } else if (answer.startgame === "Search Crown"){
    console.log(chalk.yellowBright("Find a crown and exit in this kingdom to save your self!"))
    console.log(chalk.redBright("Here is two crown in the kingdom!"))

    let find = await inquirer.prompt({
            name:"exit",
            type:"list",
            message:"Find a exit in this direction!",
            choices:[
                "North side of the kingdom!",
                "South side of the kingdom!",
                "East side of the kingdom!",
                "West side of the kingdom!"

            ]

    })
    // nested function
    if (find.exit === "North side of the kingdom!"){
        console.log(chalk.blueBright("You are in the forest and you are stuck you can't go anywhere their are monsters in the forest.."))
        async function finish() {
            let neonTitle = chalkanimation.rainbow("\n GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await finish()
    } else if(find.exit === "South side of the kingdom!"){
        console.log(chalk.blueBright("You Find the crown but here is no exit in south!"))
        async function loss() {
            let neonTitle = chalkanimation.rainbow("\n You lost in the kingdom, GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await loss()
    } else if (find.exit === "East side of the kingdom!"){
        console.log(chalk.cyanBright("You find a crown and the exit of the kingdom!"))
        async function kingdom() {
            let neonTitle = chalkanimation.rainbow("\n *You are the king of the kingdom* \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await kingdom()

        async function winner() {
            let neonTitle = chalkanimation.rainbow("\n **YOU WIN THIS GAME AND THE LOST KINGDOM** \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await winner()

    } else if (find.exit === "West side of the kingdom!"){
        console.log(chalk.redBright("You are died their are alligators in the pond of west side of the kingdom!"))
        async function died() {
            let neonTitle = chalkanimation.rainbow("\n GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await died()
    } else {
        console.log(chalk.red("Game over!"));
        
    }
    
// Fourth option code.
 } else if (answer.startgame === "Run"){
    console.log(chalk.yellowBright("You have to run from thier here are some zombies behind you!"))
    let run = await inquirer.prompt({
        name:"fast",
        type:"list",
        message:"You have to choose your weapon to save yourself from zombies!",
        choices:[
            "Attack",
            "Fuel",
            "2x power",
            "Hide"
        ]
    })
    // nested function
    if (run.fast === "Attack"){
        console.log(chalk.blueBright("If you kill some zombies you are the king of the kingdom!"));
        let kill = await inquirer.prompt(
            {
                name:"killing",
                type:"number",
                message:"How many zombies did you kill?"
            }
        )
        if (kill.killing > 50){
            console.log(chalk.cyan("You kill more than 50 zombies!"))
            async function king() {
                let neonTitle = chalkanimation.rainbow("\n *You are the king of the kingdom* \n");
                await sleep()
                neonTitle.stop()
            }
            // calling the function
            await king()

        } else if (kill.killing < 50){
            console.log(chalk.yellow("You can survive only 10 days in this kingdom"))
            async function lost() {
                let neonTitle = chalkanimation.rainbow("\n GAME OVER! \n");
                await sleep()
                neonTitle.stop()
            }
            // calling the function
            await lost()
        } else {
            console.log(chalk.grey("You are died!"))
        }
        
    } else if (run.fast === "Fuel"){
        console.log(chalk.yellowBright("You drink the fuel to save your self for running faster!"))
        async function save() {
            let neonTitle = chalkanimation.rainbow("\n *You save your self from the zombies* \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await save()
    } else if (run.fast === "2x power"){
        console.log(chalk.blueBright("Now you have 2x boost power you can run faster now to save yourself from zombies!"))
    } else {
        console.log(chalk.greenBright("You can`t survive from zombie`s attack you are going to died soon......"))
        async function game() {
            let neonTitle = chalkanimation.rainbow("\n GAME OVER! \n");
            await sleep()
            neonTitle.stop()
        }
        // calling the function
        await game()
    }
    
 }
}

 
//  Now create a do and while function for again running the adventure game /
do {
    await again();
    var againstart = await inquirer
        .prompt(
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? Press y or n: "
            }
        )
    console.log("\n");
} while (againstart.restart == 'y' || againstart.restart == 'Y' || againstart.restart == 'yes' || againstart.restart == 'YES');