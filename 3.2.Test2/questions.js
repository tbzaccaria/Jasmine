let CreationTableauLangages =  () => {
    let langages=["Html", "CSS", "Java", "PHP"];
    return langages;

}

let CreationTableauNombres =  (langages=[0, 1, 2, 3, 4, 5]) => {
    return langages;

}

let RemplacementElement =  (langages) => {
    let array=[];
    for (let elem of langages){
        if (elem ==="Java"){
            array.push("Javascript");

        }
        else{
            array.push(elem);
        }
    }
    return array;
    

}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby");
    langages.push("Python");
    return langages;

}

let AjoutElementNombres =  (nombres) => {
    let newArray=[-2, -1];
    for (let elem of nombres){
        newArray.push(elem);
    }
    
    return newArray;

}

let SuppressionPremierElement =  (langages) => {
    let elem = langages[0];
    let newArray=[];
    for(let i=0;i<langages.length;i++){
        if(langages[i]===elem){
            
    

        }
        else{
            newArray.push(langages[i]);
        }
    }
    

    
    
    return newArray;

}

let SuppressionDernierElement =  (langages) => {
    let elem = langages[langages.length-1];
    let newArray=[];
    for(let i=0;i<langages.length;i++){
        if(langages[i]===elem){
            
    

        }
        else{
            newArray.push(langages[i]);
        }
    }
    

    
    
    return newArray;

}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux_sociaux=reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;

}

let ConversionTableauChaine =  (langages) => {
    let str="";
    for (let i = 0; i < langages.length; i++){
        if(langages[i]===langages[langages.length-1]){
            str=str+langages[i];
        }
        else{
            str=str+langages[i]+","
        }
    }
    return str;

}

let TriTableau =  (reseaux_sociaux) => {
    let reseau =reseaux_sociaux.sort();
    return reseau;

}

let InversionTableau =  (langages) =>{
    return langages.reverse();


}
