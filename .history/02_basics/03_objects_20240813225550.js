// singleton

// object literals


const mySym = Symbol("key1")


const JsUser = {
  name: "Aryan",
  "full name": "Aryan Agrawal",
  age: 18,
  mySym: 
  location: "Mumbai",
  hobbies: ["Coding", "Reading", "Playing"],
  email: "aryanagrawal00@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);


