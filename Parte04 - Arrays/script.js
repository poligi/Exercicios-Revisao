/*
A-) Crie uma lista com 10 números inteiros positivos ;
B-) Crie um código que multiplique todos os números do array anterior pelo o
dobro e salve em um novo array ;
C-) Do novo array com números dobrados, selecione só os números maiores que
12 , e imprima-os na tela;
D-) No array do item anterior, insira no final um novo número ímpar
E-) Suponha que você não saiba que o número ímpar esteja na posição final do
array. Utilize algum método de array, para retornar a posição do elemento ímpar
no array. 
*/

           //A
const numeros = [2, 17, 25, 39, 43, 58, 66, 74, 81, 97]
console.log(numeros)

        //B
let novoArray = numeros.map(function(numero) {
    return numero * 2
})

console.log(novoArray)

            //C
let maioresQueDoze = novoArray.filter(function(numero) {
    return numero > 12
})

console.log(maioresQueDoze)

       //D
maioresQueDoze.push(15)
console.log(maioresQueDoze)

         //E
let impar = maioresQueDoze.findIndex(function(numero) {
    return numero % 2 !== 0
})

console.log(impar)