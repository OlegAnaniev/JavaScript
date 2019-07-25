var data = [
    {
        name: "Bob",
        age: 32
    },
    {
        name: "John",
        age: 23
    },
    {
        name: "Mike",
        age: 13
    },
    {
        name: "Nelson",
        age: 78
    }
];

console.log(pluck(data, "name"));

function pluck(data, field) {
    if (!Array.isArray(data) || typeof field !== "string") {
        return false;
    }
    
    var result = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
        result[i] = data[i][field];
    }

    return result;
}