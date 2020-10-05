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

function authorBornIn1947() {
  const writer = (books.find ((date) => date.author.birthYear === 1947));
  console.log (writer.author.name)
  return (writer.author.name)

  // escreva aqui o seu código
}
assert.strictEqual(authorBornIn1947(), 'Stephen King');
// SHORTEST BOOK NAME

function smallerName() {
  let nameBook = '                  ';
  let funcaoQualquer = (writer) => {
    if (writer.name.length < nameBook.length){
    nameBook = writer.name;
  }
  }
  books.forEach(funcaoQualquer)
  console.log ("nameBook vale "+nameBook)
  return nameBook
}
assert.strictEqual(smallerName(), 'Duna');

function getNamedBook() {
  return (books.find (writer => writer.name.length === 26))
  // escreva seu código aqui
}
assert.deepStrictEqual(getNamedBook(), {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948
  },
  releaseYear: 1991,
});

const expected_result = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  }
] ;

function booksOrderedByReleaseYearDesc() {
  return books.sort(function(a, b) {
    return b.releaseYear - a.releaseYear; //b-a porque é decrescente. 
});
  // escreva aqui seu código
}
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expected_result);

function everyoneWasBornOnSecXX() {
return books.every((year) => (year.author.birthYear[0] === 1 && year.author.birthYear[1] === 9 ));
  // escreva seu código aqui
}

assert.strictEqual(everyoneWasBornOnSecXX(), false);

function someBookWasReleaseOnThe80s() {
  return books.some((year) => (year.releaseYear[2] === 8));
  // escreva seu código aqui
}

assert.strictEqual(someBookWasReleaseOnThe80s(), false); //não tem nenhum lançado na década de 80;

function authorUnique() {
  let selector =[];
  books.forEach((writer) => {if (selector[writer.author.birthYear] === undefined) {
    selector[writer.author.birthYear] =1;
  } else {
    selector[writer.author.birthYear] =2;
  };
});
  console.log (selector)
  console.log ('vale '+ selector.some( (item)=> item ===2))
  return selector.some( (item)=> item ===2);
  // escreva seu código aqui autores com mesmo ano de nascimento
}

assert.strictEqual(authorUnique(), true); //true porque tem dois com o mesmo ano de nascimento.,