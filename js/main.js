//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."
let dynDiv = document.getElementById('dynamyc')
let str = ''
console.log(dynDiv)
function dogs(arr,s){
    arr.forEach(element => {
        if(s.includes(element)){
            if(element=='Sassy')
            str+="Sassy...That's a damn cat<br>"
            else{
                str+="Found your dog: <strong>"+element+"</strong><br>"
            }
           

        }
    });
    dynDiv.innerHTML = str
}
dogs(dogNames,dogString)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/
// Goku - Kamehameha, Trunks = Burning Attack, Gohan - Quiet Rage

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
let arr2 = ['Kamehameha'," ",'Burning Attack'," ", 'Quiet Rage'," "]
let dynDiv2 = document.getElementById('dynamyc2')
function evens(a,a2){
    for(let i=0; i <= a.length; i++){
        if(i % 2 == 0){
            a.splice(i,1,a2[i])
        }
    }
    a.forEach(element => {
        if(element){
            dynDiv2.innerHTML+="<strong>"+element+"</strong><br>"
        }
    });
}
evens(arr,arr2)


function phoneNumber(s){
    num = s.split(' ').join('').replace(/\D/g,'');
    if(num.charAt(0) != '0' || num.length != 11){
        return 'Not a Phone Number'
    }else{return num}
}

let dynDiv3 = document.getElementById('dynamyc3')

let one = phoneNumber("S:)0207ERGQREG88349F82!efRF)");
let two = phoneNumber("sjfniebienvr12312312312ehfWh");
let three = phoneNumber("0192387415456");
let four = phoneNumber("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165");
let five = phoneNumber("stop calling me no I have never been in an accident");

dynDiv3.innerHTML+= 'phoneNumber("S:)0207ERGQREG88349F82!efRF) Result = '+one+'<br>'
dynDiv3.innerHTML+= 'phoneNumber("sjfniebienvr12312312312ehfWh") Result = '+two+'<br>'
dynDiv3.innerHTML+= 'phoneNumber("0192387415456") Result = '+three+'<br>'
dynDiv3.innerHTML+= 'phoneNumber("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165") Result = '+four+'<br>'
dynDiv3.innerHTML+= 'phoneNumber("stop calling me no I have never been in an accident") Result = '+five+'<br>'

function removeUrlAnchor(url){
    let NewUrl = url.split('#')
    return NewUrl[0]
  }
let dynDiv4 = document.getElementById('dynamyc4')

let _one=removeUrlAnchor('www.codewars.com#about')
let _two=removeUrlAnchor('www.codewars.com/katas/?page=1#about')
let _three=removeUrlAnchor('www.codewars.com/katas/')

dynDiv4.innerHTML+="removeUrlAnchor('www.codewars.com#about') Result: "+_one+"<br>"
dynDiv4.innerHTML+="removeUrlAnchor('www.codewars.com/katas/?page=1#about') Result: "+_two+"<br>"
dynDiv4.innerHTML+="removeUrlAnchor('www.codewars.com/katas/') Result: "+_three+"<br>"