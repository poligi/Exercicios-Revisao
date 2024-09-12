/*
Nossa loja expandiu e estamos desejando salvar o produto no estoque . Para isso,
devemos fazer umas operações no nosso sistema criado anteriormente.

a-) Crie uma lista estática que adicione os produtos (objetos) na nossa lista de
promoções especiais ;
b-) Crie um novo produto seguindo a estrutura anterior , e adicione no final dessa
lista
c-) Busque o produto cujo o id seja 3 e retorne as informações deste produto ;
d-) Atualize esse produto, e coloque um novo nome para esse produto;
e-)Utilize método de array, para deletar o produto mencionado no item c ,
retornando a seguinte mensagem : "Produto deletado com sucesso !" 
*/


            //A
let promocoesEspeciais = {
   produto1: 'Pão',
   produto2: 'Ovo',
   produto3: 'Leite'
}

console.log(promocoesEspeciais)

        //B
promocoesEspeciais.produto4 = 'Queijo'

console.log(promocoesEspeciais)

         //C
let produtoId3 = promocoesEspeciais.produto3

console.log(produtoId3)

        //D
promocoesEspeciais.produto3 = 'Nescau'

console.log(promocoesEspeciais)

          //E
if (promocoesEspeciais.produto3) {
    delete promocoesEspeciais.produto3
    console.log('Produto deletado com sucesso!')
}

console.log(promocoesEspeciais)