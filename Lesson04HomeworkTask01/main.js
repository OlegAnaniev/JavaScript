(function () {
    class Test {
        constructor(instanceVariableValue) {
            this.instanceVariable = instanceVariableValue;
            this.instanceFunction = function () {
                return "Instance function called";
            }
        }

        prototypeFunction() {
            return "Prototype function called";
        }
    }
    Test.prototypeVariable = "Prototype variable value";

    const test1 = new Test("Instace variable value 1");
    const test2 = new Test("Instace variable value 2");

    console.log(test1.instanceVariable);
    console.log(test1.instanceFunction());
    console.log(test1.prototypeFunction());

    console.log(test2.instanceVariable);
    console.log(test2.instanceFunction());
    console.log(test2.prototypeFunction());

    console.log(Test.prototypeVariable);

    console.log(test1);
    console.log(test2);
})();