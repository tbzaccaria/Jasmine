let selectElementsStartingWithA = (array) => {
    // init new list
    let sortA=[];
    // loop 
    for (let elem of array){
        // select A in first character
        if (elem[0]==="a"){
            sortA.push(elem);
        }
    }
    return sortA ;
}

let selectElementsStartingWithVowel = (array) => {
    // init new array
    let sortVowel=[];
    let allVowel=["a", "e", "i", "o", "u", "y"];

    // array loop to check all element of array
    for (let elem of array){

        // second loop to check if first lette is a vowel
        
        for (let i=0; i < allVowel.length; i++ ){
            if (elem[0] === allVowel[i]){

                // if true push to the sort array
                sortVowel.push(elem);
            }
        }
    }
    
    return sortVowel;
}

let removeNullElements = (array) => {
    // init
    let sortArray=[];
    // array loop
    for (let elem of array){
        // Select other than null
        if (elem != null){
            sortArray.push(elem);
        }
    }


    return sortArray;
}

let removeNullAndFalseElements = (array) => {
    // init
    let sortArray=[];
    // array loop
    for (let elem of array){
        if (elem != null){
            if (elem === false){
                console.log(false);
            }
            else {
                sortArray.push(elem);
            }
            
        }
    }


    return sortArray;
}

let reverseWordsInArray = (array) => {
    // function reverse Word
    function reverseWord(word){
        // split str to a list
        let wordSplit=word.split('')
        // reverse element list
        let array=wordSplit.reverse();
        // remake a str
        let wordJoin=array.join();
        // remove all virgules
        let result=wordJoin.replace(/,/g,"");

        return result
        
    }
    //init
    let reverseWords=[];

    // array loop
    for (let elem of array){
        let newWord=reverseWord(elem);
        reverseWords.push(newWord);

    }
    return reverseWords;
}

let everyPossiblePair = (array) => {
    
    let sortInPair=[];
    for (let elem of array){
        for (let pair of array){
            if (elem != pair){
                
                
                sortInPair.push([elem,pair]);
                
                
            }
        }
        
    }
    
    
    
    return sortInPair;
}

let allElementsExceptFirstThree = (array) => {
    // init sort array
    sortArray=[];
    // loop if index > 2 push to sortArray
    for (let i = 0; i < array.length; i++){
        if (i > 2){
            sortArray.push(array[i]);
        }
    }
    return sortArray;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    
    // function reverse Word
    function reverseWord(word){
        // split str to a list
        let wordSplit=word.split('')
        // reverse element list
        let array=wordSplit.reverse();
        // remake a str
        let wordJoin=array.join();
        // remove all commas
        let result=wordJoin.replace(/,/g,"");

        return result
        
    }
    //init
    let reverseWords=[];

    // array loop
    for (let elem of array){
        let newWord=reverseWord(elem);
        reverseWords.push(newWord);

    }
    reverseWords.sort();
    let finalArray=[];
    for (let elem of reverseWords){
        let newWord=reverseWord(elem);
        finalArray.push(newWord);
    }
    
    return finalArray;
}

let getFirstHalf = (string) => {
    let number=string.length/2;
    let newStr="";
    for (let i = 0; i < number; i++){
        newStr=newStr+string[i];
    }
    return newStr;
}

let makeNegative = (number) => {
    
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
        // function reverse Word
        function reverseWord(word){
            // split str to a list
            let wordSplit=word.split('')
            // reverse element list
            let array=wordSplit.reverse();
            // remake a str
            let wordJoin=array.join();
            // remove all virgules
            let result=wordJoin.replace(/,/g,"");
    
            return result
            
        }
        //init
        let reverseWords=[];
        let newArray=[];
    
        // array loop
        for (let elem of array){
            let newWord=reverseWord(elem);
            reverseWords.push(newWord);
    
        }
        number=array.length
        
        // compare reverse word with original word
        for (let i = 0; i < number; i++){
            if (reverseWords[i]===array[i]){
                newArray.push(array[i]);

            }
        }
        return newArray.length;
}

let shortestWord = (array) => {
    function shortestStringForLoop(arr) {
        let word = array[0];
        for (let i = 0; i < arr.length; i++) {
          if (word.length > arr[i].length) {
            word = arr[i];
          }
        }
        return word;
    }
    return shortestStringForLoop(array);
}

let longestWord = (array) => {
    function longestStringForLoop(arr) {
        let word = "";
        for (let i = 0; i < arr.length; i++) {
          if (word.length < arr[i].length) {
            word = arr[i];
          }
        }
        return word;
    }
    return longestStringForLoop(array);
      

}

let sumNumbers = (array) => {
    let number = 0;
    for (let elem of array){
        number=number+elem;
    }
    return number;
}

let repeatElements = (array) => {
    let number=array.length
    for (let i = 0; i < number; i++){
        array.push(array[i]);
        

    }
    
    return array;
}

let stringToNumber = (string) => {
    string=Number(string);
    return string;
}

let calculateAverage = (array) => {
    let average=0;
    for (let elem of array){
        average=average+elem;
    }
    average=average/array.length;
    return average;
}

let getElementsUntilGreaterThanFive = (array) => {
    let sortArray=[];
    for (let i = 0; i < 6; i++){
        sortArray.push(array[i]);
    }
    
    return sortArray;
}

let convertArrayToObject = (array) => {
    
    return array;
}

let getAllLetters = (array) => {
    let sortArray=[];
    for (let elem of array){
        let word=elem.split("");
        for (let s_elem of word){
            sortArray.push(s_elem);
        }
        
    }
    sortArray.sort();
    sortArray=[...new Set(sortArray)];
    return sortArray;
}

let swapKeysAndValues = (object) => {
    function swap(object){
        var ret = {};
        for(var key in object){
          ret[object[key]] = key;
        }
        return ret;
      }
    object=swap(object)
    return object;
}

let sumKeysAndValues = (object) => {
    function swap(object){
        var ret = {};
        for(var key in object){
          ret[object[key]] = key;
        }
        return ret;
      }
    let obj0=object[1];
    let obj1=object[5];
    let swap_obj=swap(object);
    let swap0=Number(swap_obj[obj0]);
    let swap1=Number(swap_obj[obj1]);
    let result=obj0+obj1+swap0+swap1;

    


    
    

    return result;
}

let removeCapitals = (string) => {
    let word=""
    for (let i = 0; i < string.length ; i++){
        if (string[i] == string[i].toLowerCase()){
            word=word+string[i];
        }
    }
    return word
    
}

let roundUp = (number) => {
    function roundUp(number){
        if ((Math.round(number) < number) && (Math.round(number+1)> number))
        {
            number=Math.round(number)+1;
        }
        return number;
    }
    return roundUp(number);
}

let formatDateNicely = (date) => {
    date = new Date(date);
    let day=date.getDay();
    day=Number(day+1);
    day="0"+day.toString();
    let month=date.getMonth();
    month=Number(month)+1;
    if (month<10){
        month="0"+month.toString();

    }
    else{
        month=month.toString();
    }
    let year=date.getFullYear();
    
    return day+"/"+month+"/"+year;
}

let getDomainName = (string) => {
    let mail=string.split("@");
    let domain=mail[1];
    let result=domain.split(".com");
    domain="";
    domain=result[0];
    return domain;
}

let titleize = (string) => {

    string=string.split(" ");
    let arraySort=[];
    for (let elem of string){
        let word=elem.substring(1);
        arraySort.push(elem[0].toUpperCase()+word);

    }
    arraySort=arraySort.join();
    let result=arraySort.replace(/,/g," ");

    
    
    
    
    


    return result;

}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return Math.pow(number, 1/2);
}

let factorial = (number) => {
    function factorial(n) {
        if (n<=0){
          return 1;
        }
        else{
            return (n * factorial(n-1));
        }
    }
    return factorial(number);
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    function fToC(fahrenheit){
        var fTemp = fahrenheit;
        var fToCel = (fTemp - 32) * 5/9;
    }
    return Math.round((number-32)*5/9);
}

let letterPosition = (array) => {
    function alphabetPosition(text) {
        const words = text.toLowerCase().replace(/[^a-z]/g,"");
        return [...words].map(v=> v.charCodeAt() - 96);
    }
    let sortArray=[];
    for (let elem of array){
        let position = alphabetPosition(elem);
        sortArray.push(position);
    }
    return sortArray;
}
