let op=3; //atribui valor para variavel
//opções
console.log("Suporte técnico: Digite 1");
console.log("--------");
console.log("Atendimento ao Cliente: Digite 2");
console.log("--------");
console.log("Financeiro: Digite 3");
console.log("--------");
switch (op) {
    case 1:
        console.log(`Você escolheu a opção ${op}: Atendimento ao cliente`);
        break;

        case 2:
            console.log(`Você escolheu a opção ${op}: Atendimento ao cliente`);
        break;

        case 3:
            console.log(`Você escolheu a opção ${op}: Atendimento financeiro`);
        break;

        default:
            console.log("Opção inválida!!!");
        break;
}