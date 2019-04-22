let cores = document.querySelector("vermelho");
let sqcAleatoria = [];
let t = sqcAleatoria.length;
let i;
let cor = 0;

function rdmClr(){
    return Math.floor(Math.random() * (4) + 1);
}

function sqcArray(){
    for(i = 0; i<=t; i++){
        cor = rdmClr();
        sqcAleatoria.push(cor);
        cor = 0;
        
    } 
    return console.log("foi");
}

// function sqcArray(){
//     while(i<=t){
//         cor = rdmClr(4,1);
//         sqcAleatoria.push(cor);
//         i++;
//     }
// t++;
// }