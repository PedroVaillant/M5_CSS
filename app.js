const readlineSync = require("readline-sync");

const lista = [];

console.log(
  "--------------------------------------------------------------------------"
);
console.log(
  'Digite "EXIBIR" para ver a listagem ou "SAIR" para e encerrar o projeto:'
);

while (true) {
  var inserir = readlineSync.question("Digite uma propriedade do CSS: ");
  inserir = inserir.toLowerCase();

  if (inserir == "sair") {
    console.log("lista CSS:", lista.sort());
    console.log("--------------------------------------------------------------------------");
    break;
  } else if (inserir == "exibir") {
    console.log("lista CSS:", lista.sort());
  } else if (inserir == "") {
    console.log("Não deixe vazio!");
  } else lista.push(inserir);
}
