const redlineSync = require("readline-sync");

const lista = [];
let   resp = "";

while (true) {
  resp = redlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");

  if(resp == ''){

    console.log('Não deixe vazio!');
    
 } else if (resp !='' && resp != 'sair'){

  lista.push(resp);
   continue;

} else if (resp == 'sair'){

  console.log(lista.sort());
  break;
}
}












// const redlineSync = require("readline-sync");

// const lista = [];
// let   resp = "";

// const adicionarNaLista = (prop) => {
//   lista.push(prop);
// };

// const ordenar = () => {
//   lista.sort();
// };

// const listar = () => {
//   //console.log(lista); //Lista como objeto array
//   //console.log(lista.toString()); //Lista array de string
//   lista.forEach((elemento)=> { console.log(elemento); }); //Lista por linha como string
// };

// while (true) {
//   resp = redlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");

//   if (resp.toLowerCase() == "sair") {
//     ordenar();
//     listar();
//   break;
 
//   } else if (resp.toLowerCase() !== "sair" && resp !=="") {
//     adicionarNaLista(resp);
//   }
// }