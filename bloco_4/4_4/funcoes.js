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
    if (a+b+c=180){
        return (true);
    } else {
        return (false);
    }
}
//6
function movement (a)
switch (a){
    case "peon"
    return ("Em frente");
    break
    case "knight"
    return ("Em L);
    break
    case "Tower"
    return ("Linha reta");
    break
    case "bishop"
    return ("diagonals");
    break
    case "queen"
    return ("Todos os lados");
    break
    case "king"
    return ("Todos os lados, apenas 1 casa");
    break
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