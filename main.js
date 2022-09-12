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

    // display reset button
    reset.style.display = "block";
    result.style.display = "block";
    // validate form
    if (height=== ""){
       return result.textContent ="please enter a valid height!"
    } else if (weight=== ""){
        return result.textContent ="please enter a valid weight!"  
    } else {

        result.innerHTML = `
            <div class= "loader-div">
                <img class="loader" src="./images/loader.gif" alt="Loading..."
            </div>
        `;
        setTimeout(()=> {
            calculateBMI(height,weight);
        }, 1000)
        
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
        showResult(`underweight: <span>${bmi}  </span>`, "orange")
    } else if (bmi >= 18.5 && bmi< 24.9){
        showResult(`Normal: <span>${bmi}  </span>`, "green")
    } else if (bmi >=25.0 && bmi< 29.9){
        showResult(`Overweight: <span>${bmi}  </span>`, "purple")
    } else {
        showResult(`Obese: <span>${bmi}  </span>`, "red")
    }
}

// show result
function showResult(val,color){
    result.style.backgroundColor = color;
    return result.innerHTML = val

}
reset.addEventListener("click", ()=> {
    form.reset();
    result.style.display = "none"
    reset.style.display = "none"
})
