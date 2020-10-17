//
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    var newArr = [];
   var myMap1 = new Map();
   var myMap2 = new Map();

   //Create Map with no repetitive elements
    for(var i=0;i<arr1.length;i++){
        if(!myMap1.has(arr1[i])){
            myMap1.set(arr1[i],true);
        }
    }
    for(var i=0;i<arr2.length;i++){
        if(!myMap2.has(arr2[i])){
            myMap2.set(arr2[i],true);
        }
    }
    //Check non intercepted elements on opposite arrays
    for(var [key,value] of myMap1){
        if(!myMap2.has(key)){
            newArr.push(key);
        }
    }
    for(var [key,value] of myMap2){
        if(!myMap1.has(key)){
            newArr.push(key);
        }
    }

    return newArr;
  }
  
console.log(  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log( diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] ));
  