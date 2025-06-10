import "./pages/index.css"; // add import of the main stylesheets file
import stepsSrc from "./images/steps.png"; // add import of the image file"

const stepsImage = document.querySelector("#image-steps");
stepsImage.src = stepsSrc; // set the image source to the imported image file


const numbers = [2, 3, 5];

// Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map(number => number * 2); 

console.log(doubledNumbers); // 4, 6, 10