// Exercício 1 - Escreva uma função que calcule e retorne o fatorial de um número.
/* const fatorial = (n) =>{
    let fat = 1;
    for (let i = 1; i <= n; i++){
        fat *= i;
    }
    return(fat)
} */
// Exercício 2 - Escreva uma função que retorne uma String contendo uma sequência de N mensagens do texto informado pelo usuário. O valor de N e a mensagem são informados por parâmetro.
/* const stringMsgs = (n, msg) =>{
    var string = "";
    while(n>0){
        string += msg;
        n--;
    }
    return(string);
} */
// Exercício 3 - Escreva uma função que receba 2 valores e uma operação básica: adição, subtração, multiplicação e divisão e retorne o resultado da operação.
/* const operacao = (x, y, op) =>{
    let resultado;
    switch (op){
        case "adição":
            resultado = x + y;
            break;
        case "subtração":
            resultado = x - y;
            break;
        case "multiplicação":
            resultado = x * y;
            break;
        case "divisão":
            if(x==0 || y==0){
                return null;
            }
            else{
                resultado = x/y;
            }
    }
    return(resultado);
} */
// Exercício 4 - Escreva uma função que retorne um vetor contendo o resultado da tabuada de um número recebido por parâmetro. Cada resultado na respectiva posição do índice.
/* const tabuada = (n) => {
    let vetor = [];
    for(i=0; i<=10; i++){
        vetor[i] = n * i;
    }
    return vetor;
} */
// Exercício 5 - Escreva uma função que retorne um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número 578. O argumento da função e o retorno deve ser um valor inteiro
/* const inverte = (num) => {
    let invertido = '';
    let strNum = num.toString();
    let j = strNum.length - 1;
    for(i=0; i<strNum.length; i++){
        invertido += strNum[j];
        j--;
    } 
    let numInvertido = parseInt(invertido, 10);
    return numInvertido;
} */
// Exercício 6 - Escreva uma função que permita contar o número de vogais contidas em uma string fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função retorna o número 3 (há 3 vogais nessa palavra).
/* const qtVogais = (palavra) => {
    const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕàèìòùÀÈÌÒÙ";
    let contador = 0;
    for (i=0; i<palavra.length;i++){
        for(j=0; j<vogais.length; j++){
            if(palavra[i] == vogais[j]){
                contador++;
            }
        }
    }
    return contador;
}
console.log(qtVogais("Brócolis")); */
// Exercício 7 - Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo: “(([]))” retorna true, “(([)])” retorna falso.
/* const verificarSequencia = (sequencia) => {
    const pilha = [];
    const pares = {
        '(': ')',
        '[': ']'
    };
    for (let char of sequencia) {
        if (pares[char]) {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.length === 0 || pares[pilha.pop()] !== char) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}
console.log(verificarSequencia("(([]))"));
console.log(verificarSequencia("(([)])")); */
// Exercício 8 - Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista de nomes pré-definida; e gere idades entre 18 e 90 anos
/* const objeto = (n) =>{
    let  nomes = ["Arthur", "Amanda", "Bernardo", "Beatriz", "Carlos", "Carolina", "Flavio", "Fabiana", "Guilherme", "Giovana", "Lucca", "Letícia", "Marcos", "Mariana"];
    let objFinal = {};
    for (i=0; i<n; i++){
        let indice = Math.floor(Math.random() * nomes.length);
        objFinal[i] = { 
            id: i,
            nome: nomes[indice],
            idade: Math.floor(Math.random() * (90 - 18 + 1)) + 18
        };
    }
    return objFinal;
}
const pessoas = objeto(5);
console.log(pessoas); */
// Exercício 9 - Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a média de idades das pessoas presentes na lista.
/* const mediaIdade = (objFinal) =>{
    let total = 0;
    let idx = Object.keys(objFinal).length;
    for (j=0; j<idx; j++){
        total += objFinal[j].idade
    }
    return total/idx;
}
console.log(mediaIdade(pessoas)); */
// Exercício 10 - Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os dados por um dos atributos informados por parâmetros.
/* const ordenacao = (obj, param) =>{
    const arrayDeObjetos = Object.values(obj);
switch (param){
    case "id":
    arrayDeObjetos.sort((a, b) => {
        if (typeof a[param] === "string") {
            return a[param].localeCompare(b[param]);
        }
        return a[param] - b[param];
    });
    break;
    case "nome":
    arrayDeObjetos.sort((a, b) => {
        if (typeof a[param] === "string") {
            return a[param].localeCompare(b[param]);
        }
        return a[param] - b[param];
    });
    break;
    case "idade":
    arrayDeObjetos.sort((a, b) => {
        if (typeof a[param] === "string") {
            return a[param].localeCompare(b[param]);
        }
        return a[param] - b[param];
    });
    break;
}
return arrayDeObjetos;
}
console.log(ordenacao(pessoas, "nome")); */