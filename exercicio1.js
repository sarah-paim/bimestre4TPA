let num1=2;
let num2=2;
const soma=num1+num2;
const sub=num1-num2;
const mult=num1*num2;
const div=num1/num2
let op="subtração";

console.log("");
console.log("Digite o primeiro número:");
console.log("");
console.log("Digite o segundo número:");
console.log("");
console.log("Digite a operação desejada:");
console.log("");

switch (op) {
    case "soma":
        console.log(`${num1}+${num2}=${soma}`);
        console.log("");
        break;

    case "subtração":
        console.log(`${num1}-${num2}=${sub}`);
        console.log("");
        break;
        
    case "multiplicação":
        console.log(`${num1}x${num2}=${mult}`);
        console.log("");
        break;

        case "divisão":
        console.log(`${num1}:${num2}=${div}`);
        console.log("");
        break;

    default:
        console.log("Digite uma operação válida!");
        console.log("");
        break;
}