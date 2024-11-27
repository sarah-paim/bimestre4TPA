let op="5";

console.log("--------------------");
console.log("digite 1: primavera");
console.log("digite 2:verão");
console.log("digite 3: outono");
console.log("digite 4: inverno");
console.log("--------------------");
console.log("");

switch (op) {
    case "1":
        console.log(`Você escolheu a opção ${op}: Primavera`);
        break;

    case "2":
        console.log(`Você escolheu a opção ${op}: Verão`);
        break;

    case "3":
        console.log(`Você escolheu a opção ${op}: Outono`);
        break;

    case "4":
        console.log(`Você escolheu a opção ${op}: Inverno`);
        break;
    
        default:
            console.log("Opção inválida!!!");
        break;

        console.log("Fim do programa.");
        console.log("--------------------");
        
}