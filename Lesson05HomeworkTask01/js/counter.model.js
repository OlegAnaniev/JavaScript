class CounterModel {
    constructor() {
        this.counter = 0;
    }

    increment(cb) {
        this.counter += 1;
        cb(this.counter);
    }

    decrement(cb) {
        this.counter -= 1;
        cb(this.counter);
    }

    clear(cb) {
        this.counter = 0;
        cb(this.counter);
    }
}