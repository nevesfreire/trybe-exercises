let estados =[ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];
let select = document.querySelector("#estados");
for(let index=0;index<estados.length;index+=1){
    let option = document.createElement('option');
    option.value= estados[index];
    option.innerText=estados[index];
    select.appendChild(option);
}
