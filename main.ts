import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 30000; // Dollar
let myPin = 4521;

// Print welcome Message
console.log("WELCOME TO ATM");

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: "Enter your pin code:",
        }
    ]);

    
    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option:",
                type: "list",
                choices: ["Withdraw", "Check balance"]
            }
        ]);

        if (operationAns.operation === "Withdraw") {
            let withdrawAns = await inquirer.prompt([
                {
                    name: "withdrawMethod",
                    type: "list",
                    message: "Select a withdrawal method",
                    choices: ["Fast cash", "Enter amount"]
                }
            ]);

            if (withdrawAns.withdrawMethod === "Enter amount") {
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        message: "Enter your amount:",
                        type: "number"
                    }
                ]);
                
                if (amountAns.amount > myBalance) {
                    console.log("Insufficient Balance");
                } else {
                    myBalance -= amountAns.amount;
                    console.log(`${amountAns.amount} Withdrawn Successfully`);
                    console.log(`Your Remaining Balance is: ${myBalance}`);
                }
            } else if (withdrawAns.withdrawMethod === "Fast cash") {
                let fastcashAns = await inquirer.prompt([
                    {
                        name: "fastCash",
                        type: "list",
                        message: "Select Amount",
                        choices: ["1000", "2000", "5000", "10000"]
                    }
                ]);
                
                if (fastcashAns.fastCash > myBalance) {
                    console.log("Insufficient Balance");
                } else {
                    myBalance -= fastcashAns.fastCash;
                    console.log(`${fastcashAns.fastCash} Withdrawn Successfully`);
                    console.log(`Your Remaining Balance is: ${myBalance}`);
                }
            }
        } else if (operationAns.operation === "Check balance") {
            console.log(`Your current Balance is: ${myBalance}`);
        }
    } else {
        console.log("Incorrect PIN Number.");
    }


