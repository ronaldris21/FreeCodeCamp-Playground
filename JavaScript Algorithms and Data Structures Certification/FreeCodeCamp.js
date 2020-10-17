// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = b + " String!";
var sum = 10 + 0;
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


console.log({a,b,c,sum});
console.log(Math.floor(25/3));
console.log({myStr});


function palindrome(str) {
    for(var i=0;i<String.length;i++){
        if (str[i]!=str[str.length-i-1]){
            return false;
        }
    }
    return true;
  }
  console.log(palindrome("eye"));


  //Arrays

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray[3]);  
console.log({myArray}); 
myArray.push(["Ronald",21]); 
myArray.push(["Ashley",20]); 
console.log("my Array - After data pushed");
console.log({myArray});  

var arr1 = [1,2,3];
arr1.push(4);
console.log({arr1});
// arr1 is now [1,2,3,4]
console.log({arr1});

var arr2 = ["Stimpson", "J", "cat"];
console.log({arr2});
arr2.push(["happy", "joy"]);
console.log({arr2});
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

