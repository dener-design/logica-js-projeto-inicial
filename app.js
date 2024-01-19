// alert('Boa vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// let valorChute = prompt('Escolha um número entre 1 e 10');

// if (valorChute == numeroSecreto){
//     console.log('Isso aí! Você acertou o número secreto (5)');
// }


//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'Lua';

//Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos';

// Novas entradas dos usuários para armazená Nome e idade

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nomeDoUsuario = prompt('Digite seu nome:');

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeDoUsuario = prompt('Digite sua idade:');


//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idadeDoUsuario >= 18){
    alert( nomeDoUsuario + ', Você pode tirar a habilitação!');
} else{
    alert( nomeDoUsuario + ', você não pode tirar a habilitação!');
}

//Verrifica se o usuário digitou em todos os campos
if(!nomeDoUsuario || !idade){
    console.log('O usuário não digitou todos os campos pedidos no prompt')
    alert(mensagemDeErro);
}

