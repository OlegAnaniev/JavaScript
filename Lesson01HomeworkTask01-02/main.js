var memories = [
    {
        value: 64,
        options: [
            {
                color: "black",
                price: 500
            },
            {
                color: "silver",
                price: 520
            },
            {
                color: "gold",
                price: 540
            }
        ]
    },
    {
        value: 128,
        options: [
            {
                color: "black",
                price: 800
            },
            {
                color: "silver",
                price: 830
            },
            {
                color: "gold",
                price: 860
            }
        ]
    },
    {
        value: 256,
        options: [
            {
                color: "black",
                price: 1200
            },
            {
                color: "silver",
                price: 1240
            },
            {
                color: "gold",
                price: 1280
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

        for (var j = 0; j < memories[position].options.length; j++) {
            if (color === memories[position].options[j].color) {
                price = memories[position].options[j].price;
                break;
            }
        }
    } while (typeof price === "undefined");
}

if (typeof price === "undefined") {
    document.write("<img src='./img/default.png'>");
    document.write("<br>");
    document.write("Операция отменена пользователем");
} else {
    document.write("<img src='./img/" + color + ".png'>");
    document.write("<br>");
    document.write(price);
}