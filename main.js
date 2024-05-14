#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter First Number:", type: "number", name: "firstNumber" },
    { message: "Enter Second Number:", type: "number", name: "secondNumber" },
    {
        message: "Please select the arithmetic operation you'd like to perform from the options:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional operators...
if (answer.operator === "Addition") {
    console.log(chalk.blueBright(`Result: ${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.green(`Result: ${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.yellow(`Result: ${answer.firstNumber} * ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`));
}
else if (answer.operator === "Division") {
    if (answer.secondNumber === 0) {
        console.log(chalk.red("Cannot divide by zero!"));
    }
    else {
        console.log(chalk.magenta(`Result: ${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`));
    }
}
else {
    console.log(chalk.red("Select an Appropriate Operator."));
}
