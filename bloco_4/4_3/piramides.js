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