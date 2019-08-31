(function () {
    function isNarcissistic (initialNumber) {
        const digits = getDigits(initialNumber);
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {
            sum += Math.pow(digits[i], digits.length);
        }

        return sum === initialNumber;
    }

    function getDigits(initialNumber) {
        const digits = new Array();
        let tempNumber = initialNumber;
        let digit;

        while (tempNumber !== 0) {
            digit = tempNumber % 10;
            digits.push(digit);
            tempNumber = (tempNumber - digit) / 10;
        }

        return digits;
    }

    console.log(isNarcissistic(123));
    console.log(isNarcissistic(153));
    console.log(isNarcissistic(1634));
})();