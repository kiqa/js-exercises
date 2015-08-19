function Person(firstname, lastname, phonenumber, email){
  this.firstname = firstname;
  this.lastname = lastname;
  this.phonenumber = phonenumber;
  this.email = email;
}
  
var addressBook = [];
    var luis= new Person ( "Luis","ortega","789 7789","bhb@njn.ij" );
    var ely= new Person ( "Ely","Solar","689 7979","vybu@bhj.ko" );
    var norma= new Person ( "Norma","Roca","7909 879","hhh@jk.hij" );
    
    
function add(j) {
    addressBook.push(j);
}

add(luis);
add(ely);
//console.log(addressBook);

function search(obj){
    for( i=0; i < addressBook.length; i++){
        if(obj.firstname === addressBook[i].firstname && obj.lastname === addressBook[i].lastname){
        return true;
        }
    }   
    return false;
}
search(ely);
search(norma);
 function printAllEmails(){
    for( i=0; i< addressBook.length; i++ ){
        console.log(addressBook[i].email);
    }
 }
 
//printAllEmails();

function searchByEmail(email){
    for( i=0; i< addressBook.length; i++){
        if(email === addressBook[i].email){
            console.log(addressBook[i].firstname);
        }
    }
}
searchByEmail("vybu@bhj.ko");





 
 
    
 

