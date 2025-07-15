var number = document.getElementById('number');
const btnConvert = document.getElementById('convert-btn');
const outPut = document.getElementById('output');


var convertRoman = (num) => {
    const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];


    let result = '';
    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].numeral;
            num -= romanMap[i].value;
        }
    }
    return result;
}
btnConvert.addEventListener('click', () => {
    if (number.value === '') {
        outPut.textContent = 'Please enter a valid number'
    } else if (number.value < 1) {
        outPut.textContent = "Please enter a number greater than or equal to 1"
    }else if(number.value > 4000){

        outPut.textContent = "Please enter a number less than or equal to 4000"
    }
    else{
        outPut.textContent  = convertRoman(number.value);
    }
})

console.log(convertRoman(105));