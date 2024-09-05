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

console.log(regularUser.userfullnamefullName);
