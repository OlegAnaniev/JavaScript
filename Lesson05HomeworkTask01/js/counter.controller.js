class CounterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.view.render(this.model.counter);
        this.view.listenIncrement(this.model.increment.bind(this.model));
        this.view.listenDecrement(this.model.decrement.bind(this.model));
        this.view.listenClear(this.model.clear.bind(this.model));
    }
}