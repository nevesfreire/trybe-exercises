const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' }
    ]
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' }
    ]
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' }
    ]
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' }
    ]
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' }
    ]
  },
]
const melhorNota = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
}
const resultado = (students) => {
  return students.map((student)=> {
     return {
    name: student.nome,
    bestScore: student.materias.reduce(melhorNota).name,
  }
  }
 )
}


//Dada uma matriz de matrizes, transforme em uma única matriz.    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const matrixReloaded = arrays.reduce((grupo,item) => {
    //  console.log ('item vale '+item)
        item.forEach((a) => grupo.push(a))
      return grupo; //NÃO ESQUEÇA DE COLOCAR RETORNO!
  })
  // console.log (matrixReloaded)
  return matrixReloaded;
  // escreva seu código aqui
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

// Crie uma string com os nomes de todas as pessoas autoras.
    
// const assert = require('assert');

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


function allNames() {
  const autores = books
  .map ((apenasnomes) => {return ' ' +apenasnomes.author.name })
  const result = 'Nomes:'+autores+'.'
  // console.log(autores);
  return result
}
// console.log(allNames());

assert.deepStrictEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expected_result2 = 43;

function averageAge() {
  const media = books
  .map ((apenasnomes) => {return (apenasnomes.releaseYear - apenasnomes.author.birthYear)  })
  .reduce((total,item)=> { total += item; return total})
  // console.log (media)
  const media2 = books
  .map ((apenasnomes) => {return 0})
  
  return media/media2.length;
  // escreva seu código aqui
}
// console.log (averageAge())

assert.strictEqual(averageAge(), expected_result2);

// Encontre o livro com o maior nome.

const expected_result3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

function longestNamedBook() {
  const nomeLongo = books
  .map((item) => item.name)
  .reduce((longo,atual)=>{ if(atual.length>longo.length){ return atual}else{ return longo}},'first ')
  // console.log(nomeLongo)
  const result = books.find((item)=> item.name = nomeLongo)
  // console.log ('result vale '+ result)
  // escreva seu código aqui
  return result
}
// console.log(longestNamedBook())
assert.deepStrictEqual(longestNamedBook(), expected_result3);

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

    
// const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const contarAs = (word) => {
  let cont = 0;
  for (let i=0; i<word.length; i+=1){
    if(word[i] === 'a'|| word[i]=== 'A'){
      cont+=1
    }
  }
  return cont;
}
function containsA() {
  const letraA = names.map (item => contarAs(item)).reduce((a,b)=> a+=b)
  // console.log (letraA)
  // escreva seu código aqui
  return letraA
}
// console.log(containsA())
assert.deepStrictEqual(containsA(), 20);

// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada 
// objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos
//  assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além 
//  de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index 
//  do array dentro de map, e você pode ver o objeto esperado na constante expected.

    
// const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const media = (number) => number.reduce((total,one)=>{total =total +one; return total;})


function studentAverage() {
  const result = alunos.map((item,i)=> {return{name: item, 
    average: media(notas[i])/5 }})
  
  return result;
  // escreva seu código aqui
}
// console.log(studentAverage())
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);