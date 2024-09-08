// function sayMyname() {
// 	console.log("A");
// 	console.log("R");
// 	console.log("Y");
// 	console.log("A");
// 	console.log("N");
// }

// sayMyname()

function addTwoNumbers(num1, num2) {
	// let result = num1 + num2
	// console.log("Aryan");
	// return result
	return num1 + num2
}

const result = addTwoNumbers(790, 234)

// console.log("Result :", result);



// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function loginUserName() {
//     let userName = "Aryan";
//     let password = "1234";
    
//     readline.question("Enter your username : ", (user) => {
//         readline.question("Enter your password : ", (pass) => {
//             if (user === userName && pass === password) {
//                 console.log("Login Successful");
//             } else {
//                 console.log("Invalid username or password");
//             }
//             readline.close();
//         });
//     });
// }

// loginUserName();


function loginUserName(userName = "Lucas") {

	if(!userName) {
		return "Please enter your username";
	} else {
	return `${userName} just logged in`
	}
}

// console.log(loginUserName("Gomji"))


function calculateCartPrice(...num1){
	return num1
}

// console.log(calculateCartPrice(200, 400, 600, 800, 1000));

const user = {
	username : "Aryan Agrawal",
	price : 200
}

function handleObject(anyobject){
	return `Username is $`
}

handleObject(user)