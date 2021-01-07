const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");

const calPlus = e => {
    e.preventDefault();
    let numberDisplay = document.getElementById("displayNumber").innerHTML;
    let numberInput = document.getElementById("inputbox").value;

    numberDisplay = Number(numberDisplay);
    numberInput = Number(numberInput);

    let calculatedNumber = numberInput + numberDisplay;

    if(calculatedNumber >= 0) {
        numberDisplay = "";
        console.log(calculatedNumber)
        numberDisplay = calculatedNumber

    }else if(calculatedNumber < 0) {
        numberDisplay = "";
        console.log(numberDisplay)
        numberDisplay = calculatedNumber;
    };
}

const calMinus = e => {
    e.preventDefault();
    
    numberDisplay = Number(numberDisplay);
    numberInput = Number(numberInput);
    
    calculatedNumber = numberInput + numberDisplay;
    
    return (calculatedNumber)
    placeNumber();
}
const placeNumber = () => {
    console.log(calculatedNumber);
    
}

btnPlus.addEventListener("click", calPlus);
btnMinus.addEventListener("click", calMinus);
