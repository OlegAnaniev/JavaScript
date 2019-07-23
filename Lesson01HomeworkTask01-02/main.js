var memories = [
    {
        value: 64,
        options: [
            {
                color: "red",
                price: 500
            },
            {
                color: "green",
                price: 520
            }
        ]
    },
    {
        value: 128,
        options: [
            {
                color: "red",
                price: 800
            },
            {
                color: "green",
                price: 830
            }
        ]
    },
    {
        value: 256,
        options: [
            {
                color: "red",
                price: 1200
            },
            {
                color: "green",
                price: 1240
            }
        ]
    }
];
var memory;
var color;
var price;
var userInput;
var position;


do {
    userInput = prompt("Введите объем памяти");

    if (userInput === null) {
        break;
    }
    memory = +userInput;

    for (var i = 0; i < memories.length; i++) {
        if (memory === memories[i].value) {
            position = i;
            break;
        }
    }
} while (typeof position === "undefined");

if (typeof position !== "undefined") {
    do {
        color = prompt("Введите цвет");

        if (color === null) {
            break;
        }

        for (var i = 0; i < memories[position].options.length; i++) {
            if (color === memories[position].options[i].color) {
                price = memories[position].options[i].price;
                break;
            }
        }
    } while (typeof price === "undefined");
}

if (typeof price === "undefined") {
    document.write("Операция отменена пользователем");
} else {
    document.write(price);
}