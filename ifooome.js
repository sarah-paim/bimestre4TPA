let opcao_lanche = "Xburguer"; // seleciona qual lanche você vai querer
let opcao_sobremesa = "pudim"; // seleciona qual sobremesa você vai querer
let opcao_bebida = "suco"; // seleciona qual bebida você vai querer
let pedido = "";

console.log(`========IFOOOME========`);
console.log("====Menu de Lanches====");
console.log(`-Xburguer-`);
console.log(`-hamburguer-`);
console.log(`-hamburguer vegano-`);
console.log(`-sanduiche-`);
console.log(`-xbacon-`);
console.log(`===Menu de Sobremesas===`);
console.log(`-pudim-`);
console.log(`-torta de morango-`);
console.log(`-bolo de pote-`);
console.log(`-panacota-`);
console.log(`-salada de frutas-`);
console.log(`=====Menu de Bebidas====`);
console.log(`-suco-`);
console.log(`-refrigerante-`);
console.log(`-agua-`);
console.log(`-agua tonica-`);
console.log(`-cerveja-`);
console.log(`__________________________________`);
console.log(`Digite a opção de lanche desejada:`);

switch (opcao_lanche) {
    case "Xburguer":
        console.log(`Você escolheu a opção: ${opcao_lanche}`);
        pedido += `${opcao_lanche}, `;
        break;
    case "hamburguer":
        console.log(`Você escolheu a opção: ${opcao_lanche}`);
        pedido += `${opcao_lanche}, `;
        break;
    case "hamburguer vegano":
        console.log(`Você escolheu a opção: ${opcao_lanche}`);
        pedido += `${opcao_lanche}, `;
        break;
    case "sanduiche":
        console.log(`Você escolheu a opção: ${opcao_lanche}`);
        pedido += `${opcao_lanche}, `;
        break;
    case "xbacon":
        console.log(`Você escolheu a opção: ${opcao_lanche}`);
        pedido += `${opcao_lanche}, `;
        break;
    default:
        console.log(`Nenhum lanche adicionado`);
        break;
}
console.log(`__________________________________`);
console.log(`Digite a opção de sobremesa desejada:`);

switch (opcao_sobremesa) {
    case "pudim":
        console.log(`Você escolheu a opção: ${opcao_sobremesa}`);
        pedido += `${opcao_sobremesa}, `;
        break;
    case "torta de morango":
        console.log(`Você escolheu a opção: ${opcao_sobremesa}`);
        pedido += `${opcao_sobremesa}, `;
        break;
    case "bolo de pote":
        console.log(`Você escolheu a opção: ${opcao_sobremesa}`);
        pedido += `${opcao_sobremesa}, `;
        break;
    case "panacota":
        console.log(`Você escolheu a opção: ${opcao_sobremesa}`);
        pedido += `${opcao_sobremesa}, `;
        break;
    case "salada de frutas":
        console.log(`Você escolheu a opção: ${opcao_sobremesa}`);
        pedido += `${opcao_sobremesa}, `;
        break;
    default:
        console.log(`Nenhuma sobremesa adicionada`);
        break;
}
console.log(`__________________________________`);
console.log(`Digite a opção de bebida desejada:`);

switch (opcao_bebida) {
    case "suco":
        console.log(`Você escolheu a opção ${opcao_bebida}`);
        pedido += `${opcao_bebida}`;
        break;
    case "refrigerante":
        console.log(`Você escolheu a opção ${opcao_bebida}`);
        pedido += `${opcao_bebida}`;
        break;
    case "agua":
        console.log(`Você escolheu a opção ${opcao_bebida}`);
        pedido += `${opcao_bebida}`;
        break;
    case "agua tonica":
        console.log(`Você escolheu a opção ${opcao_bebida}`);
        pedido += `${opcao_bebida}`;
        break;
    case "cerveja":
        console.log(`Você escolheu a opção ${opcao_bebida}`);
        pedido += `${opcao_bebida}`;
        break;
    default:
        console.log(`Nenhuma bebida adicionada`);
        break;
}
console.log(`========================`);


console.log(`Pedido final: ${pedido}`);
