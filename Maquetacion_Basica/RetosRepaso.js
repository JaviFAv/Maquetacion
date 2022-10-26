let number1 = 0;
let number2 = 0;

let product = number1 * number2;

console.log(product);

let string = "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nuncquam, nec dictum erat feugiat vitae.";

console.log(string.length);

console.log(string.replace(/ /g, ""));

let isTrue1 = product > 2;
let isTrue2 = string.includes(" amet");

console.log(isTrue1);
console.log(isTrue2);

let neto;
let bruto;
let fromSpain;

if (neto >= 2000 && fromSpain == true) {
    bruto = neto * 1.16;
} else if (neto < 2000 && fromSpain == true) {
    bruto = neto * 1.1;
} else if (neto > 2000 && fromSpain == false) {
    bruto = neto * 1.26;
} else if (neto < 2000 && fromSpain == false) {
    bruto = neto * 1.2;
}

for (let i = 1; i <= 100; i++) {
    console.log(i * i);
}

let array = [2, 10, 45, 33, 22, 14];
let array2 = [];
for (let number of array) {
    array2.push(number * 2);
}
console.log(array2);

function ordenar(num1, num2, num3, num4, num5) {
    let array = [num1, num2, num3, num4, num5]
    let temp;

    for (j = 1; j < array.length; j++) {
        for (i = 0; i < (array.length - j); i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }

    return array;
}


console.log(ordenar(5, 8, 1, 78, 65));

function ovejas(arrayOvejas) {
    let arrayFinal = [];
    for (let i = 0; i < arrayOvejas.length; i++) {
        if (arrayOvejas[i].color == "rojo" && arrayOvejas[i].name.toUpperCase.includes("N") && arrayOvejas[i].name.toUpperCase.includes("A")) {
            arrayFinal.push(arrayOvejas[i]);
        }
    }
    return arrayFinal;
}

function passCheck(pass) {
    if (pass.length >= 8 && pass.includes(/[A-Z]/) && pass.includes(/[a-z]/) && pass.includes(/[0-9]/) && (pass.includes(/\D/) && pass.includes(/W/))) {
        return true;
    } else { return false; }
}

let lista = ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"];
let temp;
for (let i = 0; i < lista.length; i++) {
    if (lista[i].length > temp) {
        temp = i;
    }
}

for (let i = 0; i < lista.length; i++) {
    if (temp == i) {
        console.log((lista[i] + " [" + lista[i].length + "]").bold)
    } else {
        console.log(lista[i] + " [" + lista[i].length + "]");
    }

}

let matriz = [];

for (let i = 0; i <= 10; i++) {
    matriz[i] = new Array;
}

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        matriz[i][j] = Math.floor(Math.random() * 50)
    }
}

let matriz2 = [];

for (let i = 0; i <= 10; i++) {
    matriz2[i] = new Array;
}

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        matriz2[i][j] = Math.floor(Math.random() * 50)
    }
}

let sum = [];

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        sum[i][j] = matriz[i][j] + matriz2[i][j];
    }
}

let randomMult = [];
let randomNumber = Math.floor(Math.random() * 50);

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        randomMult[i][j] = matriz[i][j] * randomNumber;
    }
}

