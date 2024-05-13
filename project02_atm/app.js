#! /usr/bin/env node
import inquirer from "inquirer";
const PIN = 1123;
let myBalance = 5000;
console.log('Welcome to ATM App ');
const introQuestions = [
    {
        type: 'number',
        name: 'pin',
        message: "Enter PIN",
        validate(value) {
            if (value === PIN) {
                console.log("PIN Validated.");
                return true;
            }
            return 'Invalid PIN. Try agin with valid PIN.';
        },
    },
    {
        type: 'list',
        name: 'operation',
        message: "Select and operation:",
        choices: ['withdraw', 'check balance']
    },
];
const withdrawQuestions = [
    {
        type: 'number',
        name: 'amount',
        message: "Enter PIN",
        validate(value) {
            if (value > 0) {
                return true;
            }
            return 'Amount musto greater then 0.';
        },
    },
];
const introAwnsers = await inquirer.prompt(introQuestions);
switch (introAwnsers.operation) {
    case 'check balance':
        console.log('Your Balance: ', myBalance);
        break;
    case 'withdraw':
        const withdrawAnswer = await inquirer.prompt(withdrawQuestions);
        myBalance = myBalance - withdrawAnswer.amount;
        console.log('Your new balance: ', myBalance);
        break;
    default:
        break;
}
