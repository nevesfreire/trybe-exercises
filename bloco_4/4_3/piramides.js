//1 - Fazer quadrado de asteriscos:

let base = 5;
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

// 6 - é primo ou não. 
let numero =567;
let divisores =0;
for (i=0;i<=numero;i+=1){
    if (numero%i ==0){
        divisores++;
    }
}
if (divisores ==2){
    console.log (numero + " é primo.");
}else{
    console.log(numero + " não é primo.")
}
console.log(divisores);

//7 - fazer array com número s primos
console.log("lista de primos")
let primos =[];
let contador=0;
for (j=0;j<10;j++){ //define o intervalo (0-j) onde você está procurando números sprimos. 
    contador=0;
    for (z=0;z<=j;z+=1){
        if (j%z==0){
            contador +=1;
        }
    }
    if (contador ==2){
        primos.push(j);
    }

}

console.log("Os números primos nesse intervalo são: " + primos);

//Posição da rainha

let colunaRainha = 4;
let linhaRainha = 4;
let linhaPeca = 7;
let colunaPeca =1;
let ataqueBemSucedido = false;

if (colunaRainha === colunaPeca || linhaRainha === linhaPeca || colunaRainha-colunaPeca === linhaRainha-linhaPeca || colunaRainha-colunaPeca === -(linhaRainha-linhaPeca)){
    ataqueBemSucedido = true;
}

console.log (ataqueBemSucedido);