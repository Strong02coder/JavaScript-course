let score = 33;
let score1 = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;

console.table([score, score1, score2, score3, score4])
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);


console.table(typeof [valueInNumber, valueInNumber1, valueInNumber2, valueInNumber3, valueInNumber4]);

console.table([valueInNumber, valueInNumber1, valueInNumber2, valueInNumber3, va]);