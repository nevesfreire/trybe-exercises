let bruto
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
} else if (posINSS<=1903.99){
    final=posINSS*.925 + 142.8;
} else if (posINSS<=3751.05){
    final=posINSS*.85 +354.8;
} else if (posINSS<=4664.68){
    final=posINSS*.775 + 636.13;
} else {
    final=posINSS*.725 + 869.36;
}
console.log(final);
