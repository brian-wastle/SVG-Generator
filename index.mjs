import inquirer from 'inquirer';
import fs from "fs/promises";


import {Shape, Circle, Triangle, Square} from './lib/shapes.mjs';
let newObj;



let {shapeInput, bgColorInput, svgTextInput, textColorInput} = await inquirer
    .prompt([
        {
            type: 'list',
            message: 'Choose a logo shape from the following: ',
            name: 'shapeInput',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'bgColorInput',
            message: "Enter a color for your shape (color name or hexidecimal color code): ",
            default() {
                return 'red';
                },
        },
        {
            type: 'input',
            name: 'svgTextInput',
            message: "Enter your logo text (up to 3 letters or numbers): ",
            validate(value) {
                const pass = /^[A-Z]{0,3}$/i.test(value);
                if (pass) {
                    return true;
                    }
                return 'Please enter up to 3 letters or numbers.  Use the backspace key.';
                },
        },
        {
            type: 'input',
            name: 'textColorInput',
            message: "Enter your text color (color name or hexidecimal color code): ",
            default() {
                return 'white';
                },
        }, 
  ]) 





// console.log(shapeInput);
// console.log(bgColorInput);
// console.log(svgTextInput);
// console.log(textColorInput);


switch (shapeInput) {
    case 'Circle':
        newObj = new Circle;
        break;
    case 'Square':
        newObj = new Square;
        break;

    default:
        newObj = new Triangle;
        break;
}

newObj.setColor(bgColorInput);
newObj.setText(svgTextInput);
newObj.setTextColor(textColorInput);
newObj.render();
writeFile();


function writeFile() {
fs.writeFile( "./examples/logo.svg", newObj.renderHTML(), function(err){
    writeFile('message.txt', data, (err) => {
        if(err) {
        console.log(err);
        }
    })
})
console.log('Generated logo.svg');
}