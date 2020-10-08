const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result1 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

function formatedBookNames() {
  const booksMap = books.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`)
  // console.log (booksMap)
  return booksMap
  // crie um array NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  // escreva seu código aqui
}

assert.deepStrictEqual(formatedBookNames(), expected_result1);

const expected_result2 = [
  {
    age: 31,
    author: 'Isaac Asimov'
  },
  {
    age: 38,
    author: 'H. P. Lovecraft'
  },
  {
    age: 39,
    author: 'Stephen King'
  },
  {
    age: 43,
    author: 'George R. R. Martin'
  },
  {
    age: 45,
    author: 'Frank Herbert'
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien'
  }
];
// .map((item)=> {'age': (2020-item.author.birthYear), 'author': item.author.name})
function nameAndAge() {
  const ageName = books.sort (function(a, b) {
    return (a.releaseYear - a.author.birthYear) - (b.releaseYear - b.author.birthYear); //b-a porque é decrescente. 
}).map((item)=> {return {['age']: (item.releaseYear-item.author.birthYear), ['author']: item.author.name}});
  // console.log (ageName);
  return ageName;// escreva seu código aqui
}

assert.deepStrictEqual(nameAndAge(), expected_result2);

const expected_result3 = [
  {
     id: 1,
     name: 'As Crônicas de Gelo e Fogo',
     genre: 'Fantasia',
     author: {
       name: 'George R. R. Martin',
       birthYear: 1948
     },
     releaseYear: 1991,
   },
   {
     id: 2,
     name: 'O Senhor dos Anéis',
     genre: 'Fantasia',
     author: {
       name: 'J. R. R. Tolkien',
       birthYear: 1892,
     },
     releaseYear: 1954,
   },
   {
     id: 3,
     name: 'Fundação',
     genre: 'Ficção Científica',
     author: {
       name: 'Isaac Asimov',
       birthYear: 1920,
     },
     releaseYear: 1951,
   },
   {
     id: 4,
     name: 'Duna',
     genre: 'Ficção Científica',
     author: {
       name: 'Frank Herbert',
       birthYear: 1920,
     },
     releaseYear: 1965,
   },
 ]
 
 function fantasyOrScienceFiction() {
   const output = books.sort(function(a, b) {
    return a.id - b.id }).filter ((item) => {return(item.genre === 'Ficção Científica' || item.genre === 'Fantasia')});
   return output// escreva seu código aqui
 }
 
 assert.deepStrictEqual(fantasyOrScienceFiction(), expected_result3);

 const expected_result4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  }
]

function oldBooks() {
  // Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho
 const livrosAntigos = books.sort (function (a,b){return a.releaseYear - b.releaseYear}).filter((item) => {return (2020-item.releaseYear > 60)})
  // console.log (livrosAntigos)
  return livrosAntigos;
  // escreva seu código aqui
}

assert.deepStrictEqual(oldBooks(), expected_result4);
const expected_result5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]

function fantasyOrScienceFictionAuthors() {
  const authorNames = books.filter ((item) => {return(item.genre === 'Ficção Científica' || item.genre === 'Fantasia')}).map((item)=> {return item.author.name}).sort()
  // console.log(authorNames);
  return authorNames;
  // escreva seu código aqui
//Crie um array ordenado com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expected_result5);
const expected_result6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]

function oldBooks2() {
  const livrosSuperAntigos = [];
  const qualquer = books.filter((item)=> { return(2020 - item.releaseYear > 60)}).map((item)=>{return item.name}).forEach((item) => {livrosSuperAntigos.unshift(item)})
  // escreva seu código aqui
  // Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
  // console.log('qualquer '+ qualquer)
  // console.log('livros super antigos '+livrosSuperAntigos)
  return livrosSuperAntigos;
}

assert.deepStrictEqual(oldBooks2(), expected_result6);

const expected_result7 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
const initials = books.filter((item)=> { return(item.author.name[1]==='.' && item.author.name[4]==='.' && item.author.name[7]==='.')}).map ((item)=>{return item.name;})
  // Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto). 
  // console.log ('initial vale '+initials);
  return initials[0];
}

assert.strictEqual(authorWith3DotsOnName(), expected_result7);