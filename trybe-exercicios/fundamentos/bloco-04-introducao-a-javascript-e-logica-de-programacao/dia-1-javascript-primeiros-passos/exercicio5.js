//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.
const a = 35;
const b = 120;
const c = 25;
const somaDeLados = a + b + c;

if (somaDeLados === 180) {
  console.log(true)
} else {
  console.log(false)
}
//nao consegui chegar a conclusao de erro (estudar mais sobre)