/*

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr){
    var myMap = new Map();
    var newArr=[];
    for(var i=1;i<arr[0].length;i++){
        newArr.push(arr[i]);
    }
    console.log({newArr});

    for(var i=1;i<arr.length;i++){
        if(!myMap.has(arr[i])){
            myMap.set(arr[i],true);
        }
    }
    console.log({myMap});
    for(var [key,value] of myMap){
        for(var i =0;i<newArr.length;i++){
            if(newArr[i]==key){
                newArr[i]=null;
            }
        }
    }
    console.log({newArr});

    arr=[];
    for(var i =0;i<newArr.length;i++){
        if(newArr[i]!=null){
            arr.push(newArr[i]);
        }
    }


    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));