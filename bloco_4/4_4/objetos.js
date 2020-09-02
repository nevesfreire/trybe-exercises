let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log ("Bem vinda " + info.personagem);

  info.recorrente = "Sim";

  console.log(info);

  for (let i in info){
      console.log(i);
  }
  for (i in info){
      console.log(info[i]);
  }
  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
  };

  //funções

  function palindromo (a){
      let verificador = 0;
      for (let i=0;i<a.length;i+=1){
          if (a[i] !=a[a.length-1-i]){
              verificador+=1;
          }
      }
      if (verificador >0){
          return (false);  
      } else{
          return (true);
      }
  }
  
  function maiorValor (array){
      let maior= array[0];
      for (let i in array){
        if (array[i]>maior){
            maior = array[i];
        }
      }
      console.log (maior);
      console.log (array.indexOf(10));
      return(array.indexOf(maior));
  }
  let teste = [2, 4, 6, 7, 10, 0, -3];

  console.log("função maior valor :" + maiorValor(teste))

  function menorValor (array){
    let menor= array[0];
    for (let i in array){
      if (array[i]< menor){
          menor = array[i];
      }
    }
    console.log (menor);
    return(array.indexOf(menor));
}
console.log(menorValor(teste))

//4
function nomeLongo (array){
    let umNome =array[0]
    let maior = umNome.length
    let indice

    for (let i in array){
        umNome = array[i];
    if (umNome.length > maior){
        maior = umNome.length;
        indice = i;
    }
    }
    //console.log ("umnome vale "+ umNome + " maior vale "+ maior)
    return (array[indice])
}
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log (nomeLongo(nomes));

let inteiros = [2, 3, 2, 5, 8, 2, 3];

//5
function maisFrequente (array){
    let frequencia=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let numero=0;
    for (let k=0; k<array.length;k+=1){
        numero = frequencia [array[k]]
        frequencia [array[k]] = numero + 1;
    }
    //console.log(frequencia);
    return (maiorValor (frequencia));
    }
console.log("o número mais frequente é o " + maisFrequente(inteiros));


//6
function somatorio(a){
    let soma =0
    for(let j=0;j<=a;j+=1){
        soma = soma + j;
    }
    return (soma);
}
console.log(somatorio (5));

//7
function stringEnd (main, ending){
    let indicador =0;
    for (let z=0;z<ending.length; z++){
        if (ending[ending.length-z-1] !== main[main.length-z-1])
            indicador ++;
    }
    if (indicador >0){
        return(false);
    }else {
        return (true);
    }
}
console.log(stringEnd('fernando', 'nando'));

//Bonus1
let romano = 'CXCIX'
//function romanos(a){
    let valor = 0;
let tabela={
    I:1,
    IV:4,
    V:5,
    IX:9,
    X:10,
    XL:40,
    L:50,
    XC:90,
    C:100,
    CD:400,
    D:500,
    CM:900,
    M:1000,
}
let a = 'CXL';
for (let x in a){
if (a[a.length-1-x] == 'I'){
    valor = valor + ' 1'
} else if (a[a.length-1-x]== 'V'){
    
    if (a[a.length-2-x] == 'I'){
        valor = valor + ' 4'
        x= x+1;
    }else{
        valor = valor + ' 5'
    }

} else if (a[a.length-1-x] == 'X'){

    if (a[a.length-2-x] == 'I'){
        valor = valor + ' 9'
        x= x+1;
    }else{
        valor = valor + ' 10'
    }


}else if (a[a.length-1-x] == 'L'){

    if (a[a.length-2-x] == 'X'){
        valor = valor + ' 40'
        x= x+1;
    }else{
        valor = valor + ' 50'
    }

} else if (a[a.length-1-x] == 'C'){

    if (a[a.length-2-x] == 'X'){
        valor = valor + ' 90'
        x= x+1;
    }else{
        valor = valor + ' 100'
    }

}
}

console.log (valor);



