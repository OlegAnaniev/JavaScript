(function () {
    class Stopwatch {
        constructor(displayId) {
            this.displayId = displayId;
            this.minutes = 0;
            this.seconds = 0;
            this.centiseconds = 0;
            this.setDisplay();
        }

        setDisplay() {
            const format = function (number) {
                return number < 10 ? "0" + number : number;
            };

            const time = format(this.minutes) + ":" + format(this.seconds)
                + ":" + format(this.centiseconds);
            document.getElementById(this.displayId).innerHTML = time;
        }

        increment() {
            this.centiseconds++;

            if (this.centiseconds === 100) {
                this.seconds++;
                this.centiseconds = 0;
            }

            if (this.seconds === 60) {
                this.minutes++;
                this.seconds = 0;
            }

            this.setDisplay();
        }

        reset() {
            this.centiseconds = 0;
            this.seconds = 0;
            this.minutes = 0;

            this.setDisplay();
        }
    }

    const stopwatch = new Stopwatch("display");
    let interval;

    function startHandler() {
        interval = setInterval(stopwatch.increment.bind(stopwatch), 10);
    }

    function stopHandler() {
        clearInterval(interval);
    }

    function resetHandler() {
        clearInterval(interval);
        stopwatch.reset();
    }

    document.getElementById("start").addEventListener("click", startHandler);
    document.getElementById("stop").addEventListener("click", stopHandler);
    document.getElementById("reset").addEventListener("click", resetHandler);
})();