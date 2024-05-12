// #!/usr/bin/env node

import inquirer from 'inquirer';

console.log('Welcome to Calculator App ');

const LogsMenu = ()=>{
        console.log("Enter 1 for Add");
        console.log('Enter 2 for Substrate');
        console.log('Enter 3 for Multiple');
        console.log('Enter 4 for Divide');
}

const GetAnswer = (selection: any)=>{
    let result;
    switch (Number(selection.Operation)) {
        case 1:
            result = parseFloat(selection.FirstNumber) + parseFloat(selection.SecondNumber)
            break;
        case 2:
            result = parseFloat(selection.FirstNumber) - parseFloat(selection.SecondNumber)
            break;
        case 3:
            result = parseFloat(selection.FirstNumber) * parseFloat(selection.SecondNumber)
            break;
        case 4:
            result = parseFloat(selection.FirstNumber) / parseFloat(selection.SecondNumber)
            break;
        default:
            result = 0;
            break;
    }
    return result.toFixed(2);
}

LogsMenu();

const questions = [
    {
        type: 'input',
        name: 'Operation',
        message: "Select operation",
        validate(value: string) {
          const allOptions = [1,2,3,4];
          if (allOptions.includes(Number(value))) {
            return true;
          }
          LogsMenu();
          return 'Please enter number from above is for operation selection';
        },
      },
  {
    type: 'input',
    name: 'FirstNumber',
    message: "Enter first number",
    validate(value: string) {
      if (!value)  return 'Please enter any number.';
      if (!isNaN(Number(value))) {
        return true;
      }

      return 'Please enter a valid number.';
    },
  },
  {
    type: 'input',
    name: 'SecondNumber',
    message: "Enter second number",
    validate(value: string) {
        if (!value)  return 'Please enter any number.';
        if (!isNaN(Number(value))) {
            return true;
        }
      return 'Please enter a valid number.';
    },
  },
  
];

inquirer.prompt(questions).then((answers) => {
  console.log('\Result:' , GetAnswer(answers));
});

