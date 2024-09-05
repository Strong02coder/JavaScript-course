const { log } = require("console");

const tinderUser = new Object()

tinderUser.id = "C198006"
tinderUser.name = "Samay Raina"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
      userfullname: {
          firstname: "hitesh",
          lastname: "choudhary"
      }
  }
}

console.log(regularUser.fullName);
