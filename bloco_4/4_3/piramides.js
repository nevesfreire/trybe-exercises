//1 - Fazer quadrado de asteriscos:

let base = 7;
let linha=["*"];
for (let i=1; i<base;i+=1){
    linha = linha + "*";
}
for (let j=0;j<base;j+=1){
    console.log(linha);
}

//2 - pirâmide com até n de base

linha="*";
 for (let z=0; z<base;z+=1){
     console.log(linha)
     linha = linha + "*";
 }

 // 3 - Piramide do outro lado
 linha="*";
 let zeros = base-1
 
 for (i=0;i<base;i+=1){
 
    for (z=0;z<zeros;z+=1){
     
         linha= " " + linha
     
     }
    
    for(j=1;j+zeros <base;j+=1){
         linha = linha +"*";
     }
 
 zeros-=1;
 console.log(linha);
 linha= "*";
   }

// 4 -pirâmide com n asteriscos de base:

//pares
zeros = base/2
if (base%2===0){

    
  for (i=1;i<=base/2;i+=1){
    
    console.log(' '.repeat(zeros--) +'**'.repeat(i))
  }
}else{

//ímpares
    for (i=1;i<=base;i+=1){
      if (i%2!=0){
      console.log(' '.repeat(zeros--) +'*'.repeat(i))
      }
    }
}
//5 arvore de natal
//   *
//  * *
// *   *
//*******

let espaco =1;
console.log ("exercício 5");
if(base%2!=0){
    zeros = (base-1)/2;
    for(let i=1;i<=base;i+=2){
        if(i==base){    
            console.log('*'.repeat(base))
        }else if(i==1){
            console.log(' '.repeat(zeros--)+ '*')
        }else 
            console.log(' '.repeat(zeros--) + '*' + ' '.repeat(i-2)+'*');
        }

    }else{
    console.log('Não funciona com base par');
}
