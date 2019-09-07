(function () {
    function isNarcissistic (number) {
        const digits = getDigits(number);
        const reducer = (sum, value) => {
            return sum + Math.pow(value, digits.length);
        };

        return digits.reduce(reducer, 0) === number;
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

    console.log("123 " + isNarcissistic(123)); //false
    console.log("153 " + isNarcissistic(153)); //true
    console.log("1634 " + isNarcissistic(1634)); //true
})();