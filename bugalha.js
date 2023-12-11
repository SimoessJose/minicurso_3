let b1 = document.querySelector("#btn1");
let b2 = document.querySelector("#btn2");
let b3 = document.querySelector("#btn3");
let b4 = document.querySelector("#btn4");
let b5 = document.querySelector("#btn5");
let b6 = document.querySelector("#btn6");
let b7 = document.querySelector("#btn7");
let b8 = document.querySelector("#btn8");
let b9 = document.querySelector("#btn9");
let b10 = document.querySelector("#btn10");
let b11 = document.querySelector("#btn11");
let b12 = document.querySelector("#btn12");
let b13 = document.querySelector("#btn13");
let b14 = document.querySelector("#btn14");
let b15 = document.querySelector("#btn15");
let b16 = document.querySelector("#btn16");
let b17 = document.querySelector("#btn17");
let b18 = document.querySelector("#btn18");
let botoes = [[b1, b2, b3], [b4, b5, b6], [b7, b8, b9]];

let displayPt = document.querySelectorAll("p");
let Pt = [0, 0, 0, 0, 0, 0];

let tabJogador = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let tabBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let displayJog = [[b1, b2, b3], [b4, b5, b6], [b7, b8, b9]];
let displayBot = [[b10, b11, b12], [b13, b14, b15], [b16, b17, b18]];
let somaJog = 0;
let somaBot = 0;
let displaySoma = document.querySelectorAll('h4');
let dado;
let displayDado = document.querySelector('h3');
let vez = 1;
let ind;

function somaColuna() {
    let cont = 1;
    let i = 0;
    if (vez === 0) {
        for (let j = 0; j < 3; j++) {
            if (i === 0) {
                if (tabJogador[i][j] === tabJogador[i + 1][j] || tabJogador[i][j] === tabJogador[i + 2][j] || tabJogador[i + 1][j] === tabJogador[i + 2][j]) {
                    cont = 2;
                    if (tabJogador[i][j] === tabJogador[i + 1][j]) {
                        Pt[j] = cont * (tabJogador[i][j] + tabJogador[i + 1][j]) + tabJogador[i + 2][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                    if (tabJogador[i][j] === tabJogador[i + 2][j]) {
                        Pt[j] = cont * (tabJogador[i][j] + tabJogador[i + 2][j]) + tabJogador[i + 1][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                    if (tabJogador[i + 2][j] === tabJogador[i + 1][j]) {
                        Pt[j] = cont * (tabJogador[i + 2][j] + tabJogador[i + 1][j]) + tabJogador[i][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                }
                if (tabJogador[i][j] === tabJogador[i + 1][j] && tabJogador[i][j] === tabJogador[i + 2][j] && tabJogador[i + 1][j] === tabJogador[i + 2][j]) {
                    cont = 3;
                    Pt[j] = (tabJogador[i][j] + tabJogador[i + 1][j] + tabJogador[i + 2][j]) * cont;
                    displayPt[j].innerHTML = Pt[j];
                }
                if (tabJogador[i][j] !== tabJogador[i + 1][j] && tabJogador[i][j] !== tabJogador[i + 2][j] && tabJogador[i + 1][j] !== tabJogador[i + 2][j]) {
                    cont = 1;
                    Pt[j] = (tabJogador[i][j] + tabJogador[i + 1][j] + tabJogador[i + 2][j]) * cont;
                    displayPt[j].innerHTML = Pt[j];
                }
            }
            if (i === 1) {
                if (tabJogador[i][j] === tabJogador[i - 1][j] || tabJogador[i][j] === tabJogador[i + 1][j] || tabJogador[i - 1][j] === tabJogador[i + 1][j]) {
                    cont = 2;
                    if (tabJogador[i][j] === tabJogador[i - 1][j]) {
                        Pt[j] = cont * (tabJogador[i][j] + tabJogador[i - 1][j]) + tabJogador[i + 1][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                    if (tabJogador[i][j] === tabJogador[i + 1][j]) {
                        Pt[j] = cont * (tabJogador[i][j] + tabJogador[i + 1][j]) + tabJogador[i - 1][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                    if (tabJogador[i + 1][j] === tabJogador[i - 1][j]) {
                        Pt[j] = cont * (tabJogador[i + 1][j] + tabJogador[i - 1][j]) + tabJogador[i][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                }
                if (tabJogador[i][j] === tabJogador[i - 1][j] && tabJogador[i][j] === tabJogador[i + 1][j] && tabJogador[i - 1][j] === tabJogador[i + 1][j]) {
                    cont = 3;
                    Pt[j] = (tabJogador[i][j] + tabJogador[i - 1][j] + tabJogador[i + 1][j]) * cont;
                    displayPt[j].innerHTML = Pt[j];
                }
                if (tabJogador[i][j] !== tabJogador[i - 1][j] && tabJogador[i][j] !== tabJogador[i + 1][j] && tabJogador[i - 1][j] !== tabJogador[i + 1][j]) {
                    cont = 1;
                    Pt[j] = (tabJogador[i][j] + tabJogador[i - 1][j] + tabJogador[i + 1][j]) * cont;
                    displayPt[j].innerHTML = Pt[j];
                }
            }
            if (i === 2) {
                if (tabJogador[i][j] === tabJogador[i - 1][j] || tabJogador[i][j] === tabJogador[i - 2][j] || tabJogador[i - 1][j] === tabJogador[i - 2][j]) {
                    cont = 2;
                    if (tabJogador[i][j] === tabJogador[i - 1][j]) {
                        Pt[j] = cont * (tabJogador[i][j] + tabJogador[i - 1][j]) + tabJogador[i - 2][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                    if (tabJogador[i][j] === tabJogador[i - 2][j]) {
                        Pt[j] = cont * (tabJogador[i][j] + tabJogador[i - 2][j]) + tabJogador[i - 1][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                    if (tabJogador[i - 2][j] === tabJogador[i - 1][j]) {
                        Pt[j] = cont * (tabJogador[i - 2][j] + tabJogador[i - 1][j]) + tabJogador[i][j];
                        displayPt[j].innerHTML = Pt[j];
                    }
                }
                if (tabJogador[i][j] === tabJogador[i - 1][j] && tabJogador[i][j] === tabJogador[i - 2][j] && tabJogador[i - 1][j] === tabJogador[i - 2][j]) {
                    cont = 3;
                    Pt[j] = (tabJogador[i][j] + tabJogador[i - 1][j] + tabJogador[i - 2][j]) * cont;
                    displayPt[j].innerHTML = Pt[j];
                }
                if (tabJogador[i][j] !== tabJogador[i - 1][j] && tabJogador[i][j] !== tabJogador[i - 2][j] && tabJogador[i - 1][j] !== tabJogador[i - 2][j]) {
                    cont = 1;
                    Pt[j] = (tabJogador[i][j] + tabJogador[i - 1][j] + tabJogador[i - 2][j]) * cont;
                    displayPt[j].innerHTML = Pt[j];
                }
            }
            i++;
        }
    }
    if (vez === 1) {
        for (let j = 0; j < 3; j++) {
            if (i === 0) {
                if (tabBot[i][j] === tabBot[i + 1][j] || tabBot[i][j] === tabBot[i + 2][j] || tabBot[i + 1][j] === tabBot[i + 2][j]) {
                    cont = 2;
                    if (tabBot[i][j] === tabBot[i + 1][j]) {
                        Pt[j + 3] = cont * (tabBot[i][j] + tabBot[i + 1][j]) + tabBot[i + 2][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                    if (tabBot[i][j] === tabBot[i + 2][j]) {
                        Pt[j + 3] = cont * (tabBot[i][j] + tabBot[i + 2][j]) + tabBot[i + 1][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                    if (tabBot[i + 2][j] === tabBot[i + 1][j]) {
                        Pt[j + 3] = cont * (tabBot[i + 2][j] + tabBot[i + 1][j]) + tabBot[i][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                }
                if (tabBot[i][j] === tabBot[i + 1][j] && tabBot[i][j] === tabBot[i + 2][j] && tabBot[i + 1][j] === tabBot[i + 2][j]) {
                    cont = 3;
                    Pt[j + 3] = (tabBot[i][j] + tabBot[i + 1][j] + tabBot[i + 2][j]) * cont;
                    displayPt[j+3].innerHTML = Pt[j+3];
                }
                if (tabBot[i][j] !== tabBot[i + 1][j] && tabBot[i][j] !== tabBot[i + 2][j] && tabBot[i + 1][j] !== tabBot[i + 2][j]) {
                    cont = 1;
                    Pt[j + 3] = (tabBot[i][j] + tabBot[i + 1][j] + tabBot[i + 2][j]) * cont;
                    displayPt[j+3].innerHTML = Pt[j+3];
                }
            }
            if (i === 1) {
                if (tabBot[i][j] === tabBot[i - 1][j] || tabBot[i][j] === tabBot[i + 1][j] || tabBot[i - 1][j] === tabBot[i + 1][j]) {
                    cont = 2;
                    if (tabBot[i][j] === tabBot[i - 1][j]) {
                        Pt[j + 3] = cont * (tabBot[i][j] + tabBot[i - 1][j]) + tabBot[i + 1][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                    if (tabBot[i][j] === tabBot[i + 1][j]) {
                        Pt[j + 3] = cont * (tabBot[i][j] + tabBot[i + 1][j]) + tabBot[i - 1][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                    if (tabBot[i + 1][j] === tabBot[i - 1][j]) {
                        Pt[j + 3] = cont * (tabBot[i + 1][j] + tabBot[i - 1][j]) + tabBot[i][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                }
                if (tabBot[i][j] === tabBot[i - 1][j] && tabBot[i][j] === tabBot[i + 1][j] && tabBot[i - 1][j] === tabBot[i + 1][j]) {
                    cont = 3;
                    Pt[j + 3] = (tabBot[i][j] + tabBot[i - 1][j] + tabBot[i + 1][j]) * cont;
                    displayPt[j+3].innerHTML = Pt[j+3];
                }
                if (tabBot[i][j] !== tabBot[i - 1][j] && tabBot[i][j] !== tabBot[i + 1][j] && tabBot[i - 1][j] !== tabBot[i + 1][j]) {
                    cont = 1;
                    Pt[j + 3] = (tabBot[i][j] + tabBot[i - 1][j] + tabBot[i + 1][j]) * cont;
                    displayPt[j+3].innerHTML = Pt[j+3];
                }
            }
            if (i === 2) {
                if (tabBot[i][j] === tabBot[i - 1][j] || tabBot[i][j] === tabBot[i - 2][j] || tabBot[i - 1][j] === tabBot[i - 2][j]) {
                    cont = 2;
                    if (tabBot[i][j] === tabBot[i - 1][j]) {
                        Pt[j + 3] = cont * (tabBot[i][j] + tabBot[i - 1][j]) + tabBot[i - 2][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                    if (tabBot[i][j] === tabBot[i - 2][j]) {
                        Pt[j + 3] = cont * (tabBot[i][j] + tabBot[i - 2][j]) + tabBot[i - 1][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                    if (tabBot[i - 2][j] === tabBot[i - 1][j]) {
                        Pt[j + 3] = cont * (tabBot[i - 2][j] + tabBot[i - 1][j]) + tabBot[i][j];
                        displayPt[j+3].innerHTML = Pt[j+3];
                    }
                }
                if (tabBot[i][j] === tabBot[i - 1][j] && tabBot[i][j] === tabBot[i - 2][j] && tabBot[i - 1][j] === tabBot[i - 2][j]) {
                    cont = 3;
                    Pt[j + 3] = (tabBot[i][j] + tabBot[i - 1][j] + tabBot[i - 2][j]) * cont;
                    displayPt[j+3].innerHTML = Pt[j+3];
                }
                if (tabBot[i][j] !== tabBot[i - 1][j] && tabBot[i][j] !== tabBot[i - 2][j] && tabBot[i - 1][j] !== tabBot[i - 2][j]) {
                    cont = 1;
                    Pt[j + 3] = (tabBot[i][j] + tabBot[i - 1][j] + tabBot[i - 2][j]) * cont;
                    displayPt[j+3].innerHTML = Pt[j+3];
                }
            }
            i++;
        }
    }
        somaJog = Pt[0] + Pt[1] + Pt[2];
        somaBot = Pt[3] + Pt[4] + Pt[5];
    }



function girarDado() {
    return dado = Math.floor(Math.random() * 6) + 1;
}

function limitaColuna() {
    let indice = Math.floor(Math.random() * 3);
    return ind = indice;
}

function alocaDadoNaMatriz(vez, ind) {
    let i = 0;
    if (vez === 0) {
        for (i = 0; i < 3; i++) {
            if (tabJogador[i][ind] !== 0) {
                continue;
            }
            else {
                break;
            }
        }
        if (tabJogador[i][ind] !== 0 && i === 3) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (tabJogador[j][k] === 0) {
                        tabJogador[j][k] = dado;
                        displayJog[j][k].innerHTML = dado;
                        break;
                    }
                }
            }
        }
        else {
            tabJogador[i][ind] = dado;
            displayJog[i][ind].innerHTML = dado;
        }
    }
    if (vez === 1) {
        for (i = 0; i < 3; i++) {
            if (tabBot[i][ind] !== 0) {
                continue;
            }
            else {
                break;
            }
        }
        if (tabBot[i][ind] !== 0 && i === 3) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (tabBot[j][k] === 0) {
                        tabBot[j][k] = dado;
                        displayBot[j][k].innerHTML = dado;
                        break;
                    }
                }
            }
        }
        else {
            tabBot[i][ind] = dado;
            displayBot[i][ind].innerHTML = dado;
        }
    }
    verificaTabAdversario(ind, vez);
}

function verificaTabAdversario(ind, vez) {
    let casasJog = 0;
    let casasBot = 0;
    if (vez === 0) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tabJogador[i][ind] === tabBot[j][ind]) {
                    Pt[ind+3] = Pt[ind+3] - tabBot[j][ind];
                    tabBot[j][ind] = 0;
                    displayBot[j][ind].innerHTML = "";
                    displayPt[ind+3].innerHTML = 0;
                }
            }
        }
    }
    if (vez === 1) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tabBot[i][ind] === tabJogador[j][ind]) {
                    Pt[ind] = Pt[ind] - tabJogador[j][ind];
                    tabJogador[j][ind] = 0;
                    displayJog[j][ind].innerHTML = "";
                    displayPt[ind].innerHTML = 0;
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabJogador[i][j] === 0) {
                continue;
            }
            else {
                casasJog++;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabBot[i][j] === 0) {
                continue;
            }
            else {
                casasBot++;
            }
        }
    }
    if ((casasJog === 9) || (casasBot === 9)) {
        somaColuna();
        if(somaJog > somaBot){
            displayDado.innerHTML = "FIM DE JOGO! PLAYER1 VENCEU!";
        }
        else{
            displayDado.innerHTML = "FIM DE JOGO! PLAYER2 VENCEU!";
        }
        displaySoma[0].innerHTML = somaJog;
        displaySoma[1].innerHTML = somaBot;
1 }
    else {
        somaColuna();
        vezDaJogada();
    }
}

function vezDaJogada() {
    if (vez === 0) {
        vez = 1;
    }
    else {
        vez = 0;
    }
    jogarRodada(vez);
}

function jogada1() {
    ind = 0;
    alocaDadoNaMatriz(0, 0);
}

function jogada2() {
    ind = 1;
    alocaDadoNaMatriz(0, 1);
}

function jogada3() {
    ind = 2;
    alocaDadoNaMatriz(0, 2);
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("restartButton").addEventListener("click", restartGame);
});

function restartGame(){
    location.reload();
}

function jogarRodada(vez) {
    console.log(tabJogador);
    console.log(tabBot);
    console.log(Pt);
    girarDado();
    displayDado.innerHTML = dado;
    if (vez === 1) {
        limitaColuna();
        alocaDadoNaMatriz(vez, ind);
    }
    if (vez === 0) {
        botoes[0][0].addEventListener("click", jogada1);
        botoes[0][1].addEventListener("click", jogada2);
        botoes[0][2].addEventListener("click", jogada3);
        botoes[1][0].addEventListener("click", jogada1);
        botoes[1][1].addEventListener("click", jogada2);
        botoes[1][2].addEventListener("click", jogada3);
        botoes[2][0].addEventListener("click", jogada1);
        botoes[2][1].addEventListener("click", jogada2);
        botoes[2][2].addEventListener("click", jogada3);
    }
}

function jogarPartida() {
    jogarRodada(vez);
}

jogarPartida();

