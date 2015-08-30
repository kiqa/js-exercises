var luckyNumber = [7,8,2,4,7,11,23,40,67,89,99,25,46,45,54,754,19,879,67,33];

var i = 0;

function inArray(n){
   for(var i=0; i < luckyNumber.length; i++){
       if(luckyNumber[i] === n){
       return true;
   } else {
       return false;
     }
   }
}

inArray(7);