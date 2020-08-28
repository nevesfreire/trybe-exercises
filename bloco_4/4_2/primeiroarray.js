//1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
//for(let i in numbers){
//    console.log(numbers[i]);
//}

//2 Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let soma=0
for(let i=0;i<numbers.length;i++){
    soma = soma + numbers[i];
}
    console.log ("A soma total do array é " + soma);

//3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

    console.log ("A média aritmética do array é: " + soma/numbers.length);

//4 Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (soma/numbers.length >20){
    console.log("Valor maior que 20.");
} else{
    console.log("Valor menor ou igual a 20.")
}

//5 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior=0
for(let i=0;i<numbers.length;i++){
if(numbers[i]> maior){
    maior=numbers[i];
}
}
console.log("O maior número é: " + maior);
//6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let =quantosPrimos =0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2 !==0){
        quantosPrimos++;
    }
}
if (quantosPrimos==0){
    console.log ("Nenhum valor ímpar encontrado");
}else{
    console.log("O número de primos é: " + quantosPrimos);
}
//7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor=numbers[0];
for(let i=0;i<numbers.length;i++){
if(numbers[i]< menor){
    menor=numbers[i];
}
}
console.log("O menor número é: " + menor);
//8 Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
var ate25 =[]
for (let i=1;i<=25;i++){
    ate25.push(i);
}
console.log(ate25);

//9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (i=0;i<=ate25.length;i++){
    
    console.log(ate25[i]/2);
}
//BONUS 1 -Ordene o array numbers em ordem crescente e imprima seus valores;
let num = 0;

let crescente = [...numbers];
for (let j=0; j<crescente.length;j += 1){
for (let i=0;i<crescente.length;i += 1){
  if (crescente[i]>crescente[i+1]){
     num = crescente[i];
     crescente[i] = crescente[i+1];
     crescente[i+1] = num; 
  }
}
}
console.log("Numbers em ordem crescente: "+crescente);

//BONUS 2 Ordene o array numbers em ordem decrescente e imprima seus valores;

let decrescente = [...numbers];
for (let j=0; j<decrescente.length;j += 1){
    for (let i=0;i<decrescente.length;i += 1){
      if (decrescente[i]<decrescente[i+1]){
         num = decrescente[i];
         decrescente[i] = decrescente[i+1];
         decrescente[i+1] = num; 
      }
    }
    }
    console.log("Numbers em ordem decrescente:" +decrescente);


//BONUS 3 Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
let mult=[];

for (let z=0;z<numbers.length;z+=1){
    if (z!==numbers.length-1){
    mult.push(numbers[z]*numbers[z+1])
    } else{
        mult.push(numbers[numbers.length-1] *2);
    }
}
console.log(mult);