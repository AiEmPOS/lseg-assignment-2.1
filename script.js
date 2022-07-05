function inputValidation(number){
    let roundInput = Math.round(number);
    const input = document.getElementById("user-input");
    if(roundInput < 0 || isNaN(roundInput)){
        roundInput = 1;
        input.value = roundInput;
    }else{
        input.value = roundInput;
    }
}

function isPrime(number) {
    let count = 0;
    if (number == 0) {
        return false;
    }
    for (let i = 1; i <= number; i++) {
        if(number % i == 0){
            count++;
        }    
        if (count > 2) {
            return false;
        }
    }
    return true;
}

function isFibonacci(number) {
    let num1 = 0;
    let num2 = 1;

    if(number == 0){
        return true;
    }

    let sum = 0;
    while (number > sum) {
        sum = num1 + num2;
        if(number == sum){
            return true;
        }
        num1 = num2;
        num2 = sum;
    }
    return false;
}

const input = document.getElementById("user-input");
const calculation = document.getElementById("calculation");
input.addEventListener("change", () => {
    inputValidation(input.value);
    let output;
    if(calculation.value === "isPrime"){
        output = isPrime(input.value);
    }else{
        output = isFibonacci(input.value);
    }
    document.getElementById("output").textContent = output;
});

calculation.addEventListener("change", () => {
    let output;
    if(calculation.value === "isPrime"){
        output = isPrime(input.value);
    }else{
        output = isFibonacci(input.value);
    }
    document.getElementById("output").textContent = output;
});