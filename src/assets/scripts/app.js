//import { apiKey }from "./util.js";
import apiKey from "./util.js"
console.log(apiKey);

class User {
  constructor(name, age) {
      this.name = name;
      this.age = age;
    }
greet() {
      console.log(' Hi ! ');
  }
}
const user1 = new User("Manuel",35);
console.log(user1);
// arrays---------------------------------------------
/* const hobbies = ["Sports", "Cooking", "Reading" ] ;
console.log(hobbies[0]);

hobbies.push("working");
console.log(hobbies);

const index = hobbies.findIndex((item )=>item ==='Sports' )
console.log(index);

const editedHobbies = hobbies.map((item)=>({text:item }));


console.log(editedHobbies);
 */

//destructureizing
const{name:userName , age}={
  name:"Harsha" , //key of the value : value stored inside it 
  age:21 ,
}

console.log(userName);
console.log(age);