console.clear();
console.log("\n");
console.log("\t\tHello world");
console.log();

// variables
var name = "Raj";
var roll_num = 1001;
var cgpa = 7.35;
console.log("Name : "+ name + " cgpa : " + cgpa);
console.log();
var grade="O";
console.log("grade is :", grade);
console.log();
if(cgpa>=9.00){
    grade="O"
}
else if(cgpa>=8.00){
    grade="A+"
}
else{
    grade="B"
}
console.log("Grade is :", grade);

const prompt=require('prompt-sync')();
var cgpa=prompt("Please enter your marks : ");
cgpa=Number(cgpa);

if(cgpa >= 9.00){
    grade="O"
}
else if(cgpa >= 8.00){
    grade="A+"
}
else{
    grade="B"
}
console.log("Grade is :", grade);
console.log();