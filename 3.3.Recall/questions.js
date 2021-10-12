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
    sortInPair=[]
    for (let elem of array){
        for (let pair of array){
            if ((elem != pair) && (!(sortInPair.includes([pair,elem])))){
                let repetition=sortInPair.includes([pair,elem]);
                if (repetition===false){
                    sortInPair.push([elem,pair]);
                }
                
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
    return 'Write your method here';
}

let getFirstHalf = (string) => {
    return 'Write your method here';
}

let makeNegative = (number) => {
    return 'Write your method here';
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
