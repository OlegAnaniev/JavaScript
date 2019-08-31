(function () {
    function isNarcissistic (initialNumber) {
        const digits = getDigits(initialNumber);
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {
            sum += Math.pow(digits[i], digits.length);
        }

        return sum === initialNumber;
    }

    function getDigits(number) {
        const digits = new Array();
        let digit;

        while (number !== 0) {
            digit = number % 10;
            digits.push(digit);
            number = (number - digit) / 10;
        }

        return digits;
    }

    console.log(isNarcissistic(123));
    console.log(isNarcissistic(153));
    console.log(isNarcissistic(1634));
})();