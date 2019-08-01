(function() {
    const generator1 = sequence(10, 3);
    const generator2 = sequence(7, 1);
    const generator3 = sequence(100);
    const generator4 = sequence();

    console.log(take(generator1, 5));
    console.log(take(generator2, 3));
    console.log(take(generator3, 10));
    console.log(take(generator4, 5));

    console.log(generator1());
    console.log(generator1());
    console.log(generator2());
    console.log(generator2());
    console.log(generator3());
    console.log(generator3());
    console.log(generator4());
    console.log(generator4());

    function sequence(start = 0, step = 1) {
        start -= step;

        return function () {
            return start += step;
        }
    }

    function take(sequence, iterations) {
        const result = new Array(iterations);

        for (let i = 0; i < iterations; i++) {
            result[i] = sequence();
        }

        return result;
    }
}());