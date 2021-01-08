// TA
const display = document.getElementById("display");
const input = document.getElementById("inputbox");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let num = 0;

function addNum(e) {
    e.preventDefault();
    num += parseInt(input.value);
    display.innerText = num;
    if (num >= 0) {
        display.style.color = "black"
    };
}

function subtractNum(e) {
    e.preventDefault();
    num -= parseInt(input.value);
    display.innerText = num;
    if (num < 0) {
        display.style.color = "red"
    };
}


plus.addEventListener("click", (e) => addNum(e));
minus.addEventListener("click", (e) => subtractNum(e));


// const btnPlus = document.getElementById("plus");
// const btnMinus = document.getElementById("minus");
// let numberDisplay = document.getElementById("display").innerHTML;
// let numberInput = document.getElementById("inputbox").value;

// const calPlus = e => {
//     e.preventDefault();
//     // let numberDisplay = document.getElementById("display").innerHTML;
//     // let numberInput = document.getElementById("inputbox").value;

//     numberDisplay = Number(numberDisplay);
//     numberInput = Number(numberInput);

//     let calculatedNumber = numberInput + numberDisplay;
//     console.log(calculatedNumber)
//     if(calculatedNumber >= 0) {
//         numberDisplay = calculatedNumber

//     }else if(calculatedNumber < 0) {
//         numberDisplay = "";
//         numberDisplay = calculatedNumber;
//     };
// }

// const calMinus = e => {
//     e.preventDefault();
    
//     numberDisplay = Number(numberDisplay);
//     numberInput = Number(numberInput);
    
//     calculatedNumber = numberInput + numberDisplay;
    
//     return (calculatedNumber)
//     placeNumber();
// }

// btnPlus.addEventListener("click", calPlus);
// btnMinus.addEventListener("click", calMinus);
