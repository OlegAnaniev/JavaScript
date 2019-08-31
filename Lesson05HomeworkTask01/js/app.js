class App {
    constructor() {
        this.model = new CounterModel();
        this.view = new CounterView();
        this.controller = new CounterController(this.model, this.view);
    }

    init() {
        this.controller.init();
    }
}

new App().init();