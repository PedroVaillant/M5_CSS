// No terminal de "node app.js"

// Importar o readline-sync
const readlineSync = require("readline-sync");

const lista = [];
var valor = 1;

console.log("--------------------------------------------------------------------------");
console.log('Digite "EXIBIR" para ver a listagem ou "SAIR" para e encerrar o projeto:');

while (valor != 0) {
  var inserir = readlineSync.question("Digite uma propriedade do CSS: ");
  inserir = inserir.toLowerCase();

  if (inserir == "sair") {
    valor = 0, console.log("lista CSS:", lista.sort());
    console.log("--------------------------------------------------------------------------");
  } else if (inserir == "exibir") {
    console.log("lista CSS:", lista.sort());
  } else if (inserir == "") {
    console.log("Não deixe vazio!");
  }
  else (lista.push(inserir));
}