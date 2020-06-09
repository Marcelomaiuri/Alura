console.log(`Trabalhando com listas`);
// const salvador = ;
// const saoPaulo = `;
// const rioDeJaneiro = ;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`)//adicionando 1 item na lista
console.log("Destinos possiveis");
// console.log(salvador,saoPaulo,rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1],listaDeDestinos[0]);