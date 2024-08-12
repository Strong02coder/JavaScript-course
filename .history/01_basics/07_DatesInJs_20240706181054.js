// const date = Temporal.Now.instant()
// console.log(date);

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreateDate = new Date(2024, 6, 7, 8, 3);
console.log(myCreateDate.toLocaleString());

let myCreateDate1 = new Date("2024-07-06");
console.log(myCreateDate1.toLocaleString(), myCreateDate1.toDateString(), myDate.toTimeString());