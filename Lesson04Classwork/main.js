(function () {
    class Employee {
        constructor(firstName, lastName, position) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.position = position;
        }

        toString() {
            return `Employee: firstName = ${this.firstName}, 
                lastName = ${this.lastName}, 
                position = ${this.position}`;
        }
    }

    const array = [
      new Employee("FirstName1", "LastName1", "Position1"),
      new Employee("FirstName2", "LastName2", "Position2"),
      new Employee("FirstName3", "LastName3", "Position3"),
      new Employee("FirstName4", "LastName4", "Position4"),
      new Employee("FirstName5", "LastName5", "Position6"),
      new Employee("FirstName6", "LastName6", "Position6"),
      new Employee("FirstName7", "LastName7", "Position7"),
      new Employee("FirstName8", "LastName8", "Position8"),
      new Employee("FirstName9", "LastName9", "Position9"),
      new Employee("FirstName10", "LastName10", "Position10")
    ];

    const container = document.getElementById("element");

    for (let i = 0; i < array.length; i++) {
        container.innerHTML += array[i].toString() + "<br>";
    }
})();