let numeroAlunos = 5;

let listaAlunos = ["Julia", "Rafael", "Vitoria", "Jasmin", "Ariel", "Maru"];

let contador = 0;

while (contador < listaAlunos.length) {

    if (contador == 0) {
        console.log(contador + ": ZERO: " + listaAlunos[contador]);
    } else if (contador % 2 == 1) {
        console.log(`${contador}: ÍMPAR: ` + listaAlunos[contador]);
    } else {
        console.log(`${contador}: PAR: ` + listaAlunos[contador]);
    }

    contador++;
}

// for(let contador = 0; contador < listaAlunos.length; contador++) {
//     // console.log(contador)

//     if(contador == 0) {
//         console.log(contador + ": ZERO");
//     } else if (contador % 2 == 1) {
//         console.log(`${contador}: ÍMPAR`);
//     } else {
//         console.log(`${contador}: PAR`);
//     }
// }