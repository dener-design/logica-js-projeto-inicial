
// Começo do curso


// alert('Boa vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// let valorChute = prompt('Escolha um número entre 1 e 10');

// if (valorChute == numeroSecreto){
//     console.log('Isso aí! Você acertou o número secreto (5)');
// }


// 1º Desafio

// //Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
// alert('Boas vindas ao nosso site!');

// //Declare uma variável chamada nome e atribua a ela o valor "Lua".
// let nome = 'Lua';

// //Crie uma variável chamada idade e atribua a ela o valor 25.
// let idade = 25;

// //Defina uma variável numeroDeVendas e atribua a ela o valor 50.
// let numeroDeVendas = 50;

// //Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
// let saldoDisponivel = 1000;

// //Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
// let mensagemDeErro = 'Erro! Preencha todos os campos';

// // Novas entradas dos usuários para armazená Nome e idade

// //Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
// let nomeDoUsuario = prompt('Digite seu nome:');

// //Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// let idadeDoUsuario = Number(prompt('Digite sua idade:'));


// //Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
// if (idadeDoUsuario >= 18){
//     alert(`${nomeDoUsuario}, Você pode tirar a habilitação!`);
// } else{
//     alert(`${nomeDoUsuario}, você não pode tirar a habilitação!`);
// }

// //Verrifica se o usuário digitou em todos os campos
// if(!nomeDoUsuario || !idade){
//     console.log('O usuário não digitou todos os campos pedidos no prompt')
//     alert(mensagemDeErro);
// }


// 2º Desafio

// alert('Boa vindas ao jogo do número secreto');

// let numeroSecreto = 5;
// console.log(numeroSecreto);

// let valorChute = prompt('Escolha um número entre 1 e 10');

// // se chute for igual ao número secreto 
// if (valorChute == numeroSecreto){
//     alert(`Isso aí! Você acertou o número secreto ${numeroSecreto}`);
// } else {
//     alert('Você errou =(');
// }



// let porcentagemDesconto = 0;
// let quantidadeMilhas = 5000;

// if(quantidadeMilhas > 30000){

//     porcentagemDesconto = porcentagemDesconto + 20;

// } else {

//     if(quantidadeMilhas > 5000){
//         porcentagemDesconto = porcentagemDesconto + 10;
//     }
// }


// alert('Boa vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// console.log(numeroSecreto);
// let valorChute; 
// let numeroDeTentativas = 1;

// // Enquanto o chute não for igual ao número secreto
// while (valorChute != numeroSecreto) {
//     valorChute = prompt('Escolha um número entre 1 e 10');
//     // Se o chute for igual ao número secreto
//     if (valorChute == numeroSecreto) {
//         alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${numeroDeTentativas}`);
//     } else {
//         if(valorChute > numeroSecreto){
//             alert(`O número secreto é menor que ${valorChute}`);
//         } else{
//             alert(`O número secreto é maior que ${valorChute}`);
//         }
//         numeroDeTentativas++;
//     }
// }



// let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador--;
// }

// let media = soma / qtdNumeros;

// console.log(media);

// // Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;
// while (contador <= 10){
//     console.log(contador);
//     if (contador == 10){
//         alert('Chegou até 10');
//     }
//     contador++; 

// }

// //Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// let contador = 10;

// while (contador >= 0){

//     console.log(contador);
//     if (contador >= 0){
//         alert('Chegou até 0');
//     }
//     contador --;        


// }


// // Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// let numeroContagem = prompt('Digite um número para contagem:')

// while (numeroContagem >= 0) {
//     console.log(numeroContagem);
//     numeroContagem--;
// }


//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// let numeroContagem = prompt('Digite um número para contagem:')
// let numeroDeContagem = 0;


// while (numeroDeContagem <= numeroContagem ) {
//      console.log(numeroDeContagem);
//      numeroDeContagem++;
//  }


// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.




alert('Boa vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let valorChute; 
let numeroDeTentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (valorChute != numeroSecreto) {
    valorChute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if (valorChute == numeroSecreto) {
        
        // Executa o processo de parar o while

        break;

    } else {
        if(valorChute > numeroSecreto){
            alert(`O número secreto é menor que ${valorChute}`);
        } else{
            alert(`O número secreto é maior que ${valorChute}`);
        }
        numeroDeTentativas++;
    }
}

let palavaraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';

// if (numeroDeTentativas > 1) {
//     alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${numeroDeTentativas} tentativas`);
// } else{
//     alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com uma ${numeroDeTentativas} tentativa`);
// }

alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${numeroDeTentativas} ${palavaraTentativa}`);
