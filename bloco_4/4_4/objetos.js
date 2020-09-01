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
      return(array.indexOf(maior));
  }
  let teste = [8,5,2,9,6];

  console.log(maiorValor(teste))

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
    console.log ("umnome vale "+ umNome + " maior vale "+ maior)
    return (array[indice])
}
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log (nomeLongo(nomes));