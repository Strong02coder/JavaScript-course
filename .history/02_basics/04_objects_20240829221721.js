const { log } = require("console");

const tinderUser = new Object()

tinderUser.id = "C198006"
tinderUser.name = "Samay Raina"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

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
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [
	{
		id: 1, name: "Samay"
	},
	{
		id: 2, name: "Sai"
	},
	{
		id: 3, name: "Sunil"
	},
	{
		id: 4, name: "Shital"
	},
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty);
