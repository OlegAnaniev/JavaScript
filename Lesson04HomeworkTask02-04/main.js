(function () {
    class Human {
        constructor(name, age, superpower) {
            this.name = name;
            this.age = age;
            
            switch (superpower) {
                case Human.superpowers.POWER_2:
                    this.superpower = function (number) {
                        console.log(number + "^2 = " + Math.pow(number, 2));
                    };
                    break;
                case Human.superpowers.POWER_3:
                    this.superpower = function (number) {
                        console.log(number + "^3 = " + Math.pow(number, 3));
                    };
                    break;
            }
        }
        
        sayHi() {
            console.log("Hi, i'm " + this.name);
        }

        toString() {
            return "name: " + this.name + " age: " + this.age;
        }
    }

    Human.superpowers = {
      POWER_2 : 1,
      POWER_3 : 2
    };

    const people = new Array(
        new Human("John", 27, Human.superpowers.POWER_2),
        new Human("Peter", 31, Human.superpowers.POWER_3),
        new Human("Ann", 25, Human.superpowers.POWER_2),
        new Human("Kate", 22, Human.superpowers.POWER_3),
    );

    console.log(people);

    people.sort((a, b) => a.age - b.age);
    console.log(people);

    people.sort((a, b) => b.age - a.age);
    console.log(people);

    people.forEach(a => a.sayHi());
    people.forEach(a => console.log("Human: " + a));
    people.forEach(a => a.superpower(2));
})();