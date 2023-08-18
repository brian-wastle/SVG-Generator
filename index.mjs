import inquirer from 'inquirer';
import fs from "fs/promises";


import {Circle, Triangle, Square} from './lib/shapes.mjs';
// import Circle from './lib/shapes.mjs';
// import Square from './lib/shapes.mjs';
// import Triangle from './lib/shapes.mjs';



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
            message: "Enter your text color: ",
            default() {
                return 'white';
                },
        }, 
  ])

   
    console.log(shapeInput);
    console.log(bgColorInput);
    console.log(svgTextInput);
    console.log(textColorInput);
    console.log(Circle);












// FileSystem.writeFile( "shape.svg", example.markUp, function(err){
//     writeFile('message.txt', data, (err) => {
//         if(err) {
//         console.log(err);
//         }
//     })
// })
