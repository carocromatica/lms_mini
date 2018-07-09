function computeAverageLengthOfWords(word1, word2) {
    
    var suma = word1.length + word2.length;

    var promedio = suma / 2;

    return promedio;
}

//--------------------------------------------------

function getNthElement(array, n) {

    return array[n];

}

//---------------------------------------------

function convertDoubleSpaceToSingle(str) {
   
    return str.split('  ').join(' '); // Descubrimiento nuevo OMG!!!! no sabía que se podían poner métodos uno tras otro
}

//------

function areValidCredentials(name, password) {

    if (name.length > 3 && password.length >= 8) {
        return true;

    } else { return false; }

}

//--------------

function findPairForSum(array, number) {
  
    for (let i=0; i<array.length; i++){
      for (let j=0; j<array.length; j++) {
        if(array[i]+array[j]==number){
          return [array[i],array[j]];
        }
      }
    }
  }

//--------------------

function filterOddElements(arr) {

let numberodd=[]; 

    for (let i=0; i<arr.length; i++){
       
          if(arr[i]%2!==0){
            numberodd.push(arr[i]);
          }
        
      }return numberodd;
    
  }
  