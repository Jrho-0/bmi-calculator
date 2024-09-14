var weight = prompt("What is your weight in kg");
console.log(weight);

var height = prompt("What is youur height in m");
console.log(height); 

function bmiCalculator() {
    var bmi = weight / Math.pow(height,2);
    Math.round(bmi);

    if (bmi <18.5) {
        alert("Your BMI is " + bmi + ", so you are underweight.");
        } else if (bmi > 18.5 && bmi <= 24.9) {
            alert("Your BMI is " + bmi + ", so you have a normal weight.");
        } else if (bmi >= 25 && bmi <= 29.9) {
            alert("Your BMI is " + bmi + ", so you are overweight.");
        } else {
            alert("Your BMI is " + bmi + ", so you are obese.");
        }
}

bmiCalculator()

//To run the code on a console
