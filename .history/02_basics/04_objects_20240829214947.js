const { log } = require("console");

const tinderUser = new Object()

tinderUser.id = "C198006"
tinderUser.name = "Samay Raina"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
	email: "samayraina@gmail.com",
	fullname: {
		userfullname: {
			firstname: "Samay",
			lastname: "Raina"
		}
	}
}

// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);