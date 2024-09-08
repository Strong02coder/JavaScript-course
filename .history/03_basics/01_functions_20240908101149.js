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



function loginUserName() {
	let userName = "Aryan";
	let password = "1234";
	let user = prompt("Enter your username");
	let pass = prompt("Enter your password");
	if (user === userName && pass === password) {
		console.log("Login Successfull");
		} else {
			console.log("Invalid username or password");
		}
	}
}