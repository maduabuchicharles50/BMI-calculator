// BMI -kg/m2
"use strict";

const btn =  document.querySelector(".btn"),
reset =  document.querySelector(".reset"),
form =  document.querySelector("form"),
result =  document.querySelector(".result"),
heightInput =  document.getElementById("height"),
weightInput =  document.getElementById("weight");

form.addEventListener("submit",validateInput);
function validateInput(e){
    e.preventDefault();
    let height = heightInput.value
    let weight = weightInput.value

    // validate form
    if (height=== ""){
       return result.textContent ="please enter a valid height!"
    } else if (weight=== ""){
        return result.textContent ="please enter a valid weight!"  
    } else {
        calculateBMI(height,weight);
        
    }
}

// cal BMI
function calculateBMI(height,weight){

    // convert height to meters
    height = height / 100
    let bmi = (weight / Math.pow(height,2)).toFixed(1)
    console.log(bmi);
    // categorize results
    if (bmi<18.5){
        result.innerHTML=bmi;
    }
}

