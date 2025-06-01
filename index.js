// ASIGNACIONES Y CÁLCULOS

function numeros(X, Y) {
  return `El primer número es ${X} y el segundo número es ${Y}`;
}

console.log(numeros(184, 95));

function mayor(a, b, c) {
  let numMayor;
  if (a > b && a > c) {
    numMayor = a;
  } else if (b > a && b > c) {
    numMayor = b;
  } else if (c > a && c > b) {
    numMayor = c;
  } else {
    numMayor = a;
  }
  return "El número mayor es " + numMayor;
}

console.log(mayor(1, 5, 7));
console.log(mayor(1, 51, 7));
console.log(mayor(155, 51, 7));
console.log(mayor(8, 8, 8));

const calcula = (a, b) => {
  let suma = a + b;
  let resta = a - b;
  let producto = a * b;
  let division = a / b;

  return `${a} + ${b} = ${suma}\n${a} - ${b} = ${resta}\n${a} * ${b} = ${producto}\n${a} / ${b} = ${division}`;
};

console.log(calcula(25, 15));

function xx(chicos, chicas) {
  let total = chicos + chicas;
  let procentajeDeChicas = (chicas / total) * 100;

  return `El porcentaje de chicas es ${procentajeDeChicas.toFixed(2)}%`;
}

console.log(xx(12, 19));

// COMPARACIONES

function compara(a, b) {
  if (a > b) {
    return `El número mayor es ${a}`;
  } else if (a < b) {
    return `El número mayor es ${b}`;
  } else if (a == b) {
    return `Ambos números son iguales`;
  }
}

console.log(compara(15, 54));
console.log(compara(15, 5));
console.log(compara(15, 15));

function operacion(a, b, operacion) {
  if (operacion === "s") {
    return `La suma es ${a + b}`;
  } else if (operacion === "m") {
    return `El producto es ${a * b}`;
  } else {
    return "Operacion desconocida";
  }
}

console.log(operacion(12, 14, "m"));
console.log(operacion(24, 4, "s"));
console.log(operacion(24, 4, "2"));

function anyo(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    return `El año ${num} es bisiesto.`;
  } else {
    return `El año ${num} no es bisiesto.`;
  }
}

console.log(anyo(2021));
console.log(anyo(2022));
console.log(anyo(2023));
console.log(anyo(2024));
console.log(anyo(2025));
console.log(anyo(2026));
console.log(anyo(2027));
console.log(anyo(2028));

// BUCLES

// while (true) {
//   const num = prompt("Introduzca un número del 1 al 10");
//   if (num <= 10 && num >= 1) {
//     let quadrado = num ** 2;
//     alert(`El cuadrado de ${num} es ${quadrado}`);
//     break;
//   } else {
//     alert("Número incorrecto, entrar de nuevo");
//   }
// }

// let numArr = [];

// while (true) {
//   let numPrompt = prompt("");
//   let numeroMenor;
//   let numeroMayor;
//   let numeroMedia;

//   let numSum;
//   numArr.push(numPrompt);
//   if (numPrompt === "") {
//     alert("Error: debes introducir al menos un número");
//   } else if (numPrompt <= 0) {
//     console.log(numArr.length);
//     for (let i = 0; i < numArr.length; i++) {
      
//     }
//     console.log(numSum);
//     numeroMenor = numSum / numArr.length;
//     alert(`El número menor es ${numeroMenor}`);
//     console.log(numArr);
//     break;
//   }
// }
