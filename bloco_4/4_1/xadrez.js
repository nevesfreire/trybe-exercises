let peca 
switch ($(peca).val().toLowerCase()){
    case "peao";
        return ("para frente");
        break;
    case "torre";
        return ("reto");
        break;
    case "cavalo"
        return ("em L");
        break;
    case "bispo";
        return ("diagonal");
        break;
    case "rainha";
        return ("Todos os lados");
        break;
    case "rei"; 
        return ("todos os lados só 1 casa");
        break;
}