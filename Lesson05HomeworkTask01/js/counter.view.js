class CounterView {
    constructor() {
        this.counterWrap = document.querySelector("#counterModule");
        this.btn = this.counterWrap.querySelector(".counter__increment");
        this.btnDecrement = this.counterWrap.querySelector(".counter__decrement");
        this.btnClear = this.counterWrap.querySelector(".counter__clear");
        this.counter = this.counterWrap.querySelector(".counter__value");
    }

    listenIncrement(cb) {
        this.btn.addEventListener("click", () => {
            cb(this.render.bind(this));
        });
    }

    listenDecrement(cb) {
        this.btnDecrement.addEventListener("click", () => {
            cb(this.render.bind(this));
        });
    }

    listenClear(cb) {
        this.btnClear.addEventListener("click", () => {
            cb(this.render.bind(this));
        });
    }

    render(counter) {
        this.counter.innerHTML = counter;
    }
}