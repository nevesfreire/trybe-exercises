//1
function sum (a,b){
    return (a+b);
}
function sub (a,b){
    return (a-b);
}
function div (a,b){
    return (a/b);
}
function mult (a,b){
    return (a*b);
}
function mod (a,b){
    return (a%b);
}
//2
function greater2 (a,b){
    if (a>b){
    return ("o maior é " + a);
    } else if (b>a){
        return ("o maior é " + b);
    }else {
        return ("são iguais");
    }

}
//3 
function greater3 (a,b,c){
    if(a>b && a>c){
        return ( a +" é o maior.");
    } else if (b>c && b>a){
    return (b + " é o maior.");
} else if (c>a &&c>b){
    return (c + " é o maior");
} else{
    return ("não há maior.");
}
}
//4
function positiveNegative(a){
    if (a>0){
        return ("positive");
    }else if (a<0){
        return ("negative");
    } else{
        return ("zero");
    }
}
console.log (positiveNegative(-10));
console.log (greater3(5,7,9));
//5 
function angulos (a, b, c){
    if (a+b+c==180){
        return (true);
    } else {
        return (false);
    }
}
//6
function movement (a){
switch (a){
    case "peon":
    return ("Em frente");
    break
    case "knight":
    return ("Em L");
    break
    case "Tower":
    return ("Linha reta");
    break;
    case "bishop":
    return ("diagonals");
    break;
    case "queen":
    return ("Todos os lados");
    break;
    case "king":
    return ("Todos os lados, apenas 1 casa");
    break
}
}
//7
function grade (nota){
    if (nota>=90){
        return ("A");
    } else if (nota>=80){
        return ("B");
    }else if (nota>=70){
        return ("C");
    } else if (nota>=60){
        return("D")
    } else if (nota>=50){
        return("E")
    } else if (nota <50){
        return ("F")
    } else {
        return "Erro"
    }
}
//8
function umpar (a,b,c){
    if (a%2==0 || b%2==0 || c%2==0){
        return ("pelo menos 1 par");
    }   
}
//9
function impar (a,b,c){
    if (a%2!==0 || b%2!==0 || c%2!==0){
        return ("pelo menos 1 ímpar");
    }   
}

//10 
function venda(custo, venda){
if (custo<0 ||venda<0){
    return("Erro")
}else{
    return("Lucro = " + 1000 *(venda- 1.2*custo));
}
}
//11
function salario (bruto){
let posINSS
let final

if(bruto<=1556.94){
    posINSS=bruto*.92;
} else if (bruto<=2594.92){
    posINSS=bruto*.91;
} else if (bruto<=5189.82){
    posINSS=bruto*.89;
} else{
    posINSS= bruto-570.88;
}

if( posINSS<=1903.98){
    final =posINSS;
} else if (posINSS<=2826.65){
    final=posINSS*.925 + 142.8;
} else if (posINSS<=3751.05){
    final=posINSS*.85 +354.8;
} else if (posINSS<=4664.68){
    final=posINSS*.775 + 636.13;
} else {
    final=posINSS*.725 + 869.36;
}
return("O salário líquido é " + final);
}
console.log (salario(3000));