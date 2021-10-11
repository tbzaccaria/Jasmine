
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let a = texte1 + texte2 ;
    return a;

}
let afficherCar5 =  (texte) => {
    return texte[4];

}
let afficher9Car =  (texte) => {
    let newText="";
    for(i=0; i<9;i++){
        newText=newText+texte[i];
        
        
    }
    return newText;

}
let majusculeString =  (texte) => {
    texte=texte.toUpperCase();
    return texte;

}
let minusculeString =  (texte) => {
    texte=texte.toLowerCase();
    return texte;

}
let SupprEspaceString =  (texte) => {
    texte=texte.slice(1);
    texte=texte.slice(0, texte.length - 1);
    
    return texte;

}
let IsString =  (texte) => {
    let result=""
    if (typeof texte ==="string" || texte instanceof String){
        result=true;
    }
    else{
        result=false
    }
    return result;


}

let AfficherExtensionString =  (texte) => {

    let newText=texte.split(".").pop();
    return newText;

}
let NombreEspaceString =  (texte) => {
    let counter=0;
    for(i=0;i<texte.length;i++){
        if (texte[i]===" "){
            counter++;
        }

    }
    return counter;

}
let InverseString =  (texte) => {
    let textSplit="";
    let textReverse="";
    let textJoin="";
    textSplit=texte.split("");
    textReverse=textSplit.reverse();
    textJoin=textReverse.join("");
    return textJoin;

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);

}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);

}
let valeurAbsolueArray =  (array) => {
    let newArray=[];
    for (let elem of array){
        let number=Math.abs(elem)
        newArray.push(number);

    }
    return newArray;

}
let sufaceCercle =  (rayon) => {
    let surface= (rayon*rayon)*Math.PI;
    surface=Math.round(surface);
    return surface;


}
let hypothenuse =  (ab, ac) => {
    let bc = Math.pow(ab, 2)+Math.pow(ac, 2);
    bc=Math.pow(bc, 1/2);
    return bc;

}
let calculIMC =  (poids, taille) => {
    let result=poids/(taille*taille);
    result=result*100;
    result=Math.round(result);
    result=result/100;
    return result;

}
