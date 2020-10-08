const { SSL_OP_CIPHER_SERVER_PREFERENCE } = require('constants')

// const assert = require('assert')
// const sum = (a,b) => {
//     if (typeof(a)!='number'||typeof(b)!='number'){
//         throw new Error('parameters must be numbers');
//     }
//     return a+b;
// }
// assert.strictEqual(sum(4,5),9, '4+5 = 9'); //MENSAGEM DE ERRO APARECE SE A COMPARAÇÃO NÃO DER CERTO.
// assert.strictEqual(sum(0,0),0, '0+0 = 0');
// assert.strictEqual(sum(4,5),9, 'todos não são números' );


// function myRemove(arr, item) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (item !== arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// assert.strictEqual(myRemove([1,2,3,4],3),[1,2,4], 'o array não deve conter o '3'.');
// assert.notStrictEqual(myRemove([1,2,3,4],3),[1, 2, 3, 4], 'retornou o array esperado');
// assert.strictEqual(myRemove([1,2,3,4], 5),[1,2,3,4], "deu array esperado");
// implemente seus testes aqui
// console.log (myremove([1,2,3,4],3));

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let i = 0, len = arr.length; i < len; i += 1) {
//     if (arr[i] === item) {
//       arr.splice(i, 1);
//       i -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }    

// implemente seus testes aqui
// assert.strictEqual(myFizzBuzz(12),'fizzbuzz', 'resultado não esperado');
// assert.strictEqual(myFizzBuzz(6),'fizz', 'resultado não esperado');
// assert.strictEqual(myFizzBuzz(5),'buzz', 'resultado não esperado');
// assert.notStrictEqual(myFizzBuzz(15),'fizzbuzz', 'resultado  esperado');
// assert.ok(myFizzBuzz("if"),true, 'Entrada não é um número');

// const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// assert.deepStrictEqual(obj1,obj3, 'objects are not equal'); //ok. ativa quando 

// implemente seus testes aqui

// const assert = require('assert');
// // escreva a função addOne aqui
// function addOne(entry){
//     let array = entry;
//     for (let i=0;i<array.length;i+=1){
//         array[i]+=1;
//     }
//     return array;
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// const assert = require('assert');
// // escreva a função wordLengths aqui
// function wordLengths (entrada){
// let array=[];
// for (let i=0;i<entrada.length;i+=1){
//     array.push(entrada[i].length)
// }
// return array;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// const assert = require('assert');
// escreva a função addAllnumbers aqui
// function addAllnumbers (array) {
//     let soma = 0;
//     for (let i =0;i<array.length;i+=1){
//         soma += array[i];
//     }
//     return soma;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = addAllnumbers(numbers);

// assert.strictEqual(typeof addAllnumbers, 'function');
// assert.strictEqual(output, expected);

const assert = require('assert');
// // escreva a função findTheNeedle aqui
// function findTheNeedle (entrada, word) {
//     return entrada.indexOf(word);
// }

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// const greetPeople = (people) => {
//     let greeting = 'Hello ';
  
//     for (const person in people) {
//       greeting += people[person];
//     }
//     return greeting;
//   };
  
//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
// for (const i in parameter){
//   assert.strictEqual(greetPeople(parameter[i]),result[i])
// }

// const removeVowels = (word) => {
//     const characters = word.split('');
//     let results = [];
//     let cont = 1;
  
//     for (let i = 0; i < characters.length; i += 1) {
//       if (
//         characters[i] === 'a' ||
//         characters[i] === 'o' ||
//         characters[i] === 'i' ||
//         characters[i] === 'e' ||
//         characters[i] === 'u'
//       ) {
//         results+=cont;
//         cont+=1;
//       } else {
//         results+=characters[i];
        
//       }
//     }
//     return results;
//   };
  
//   const parameter = 'Dayane';
//   const result = 'D1y2n3';
//   assert.strictEqual(removeVowels(parameter),result, "Should have been 'D1y2n3' ")

// const greaterThanTen = (array) => {
//     let results = [];
//     for (let i = 0; i < array.length; i += 1) {
//       if (array[i] > 10) {
//         results.push(array[i]);
//       }
//     }
//     return results;
//   };
  
//   const parameter = [4, 10, 32, 9, 21];
//   const result = [32, 21];

//   assert.deepStrictEqual(greaterThanTen(parameter),result, "resultados não corretos")

  function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x - y;
    }); 
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
console.log(secondThirdSmallest(parameter))