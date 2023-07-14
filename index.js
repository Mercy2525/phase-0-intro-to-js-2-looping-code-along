// //Code your solutions in this file



const people=[]

 function writeCards(spy) {
  for (let i = 0; i < spy.length; i++) {
     people.push(`Thank you, ${spy[i]}, for the wonderful surprise gift!`); 
  }
return people;
 }
 
function countDown(value) {
  while (value>=0) {
    console.log(value)
    value--
  }
  
}

countDown(10)