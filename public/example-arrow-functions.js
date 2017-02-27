var names = ["Junaid", "Daniyal", "Hammad", "Faraz"];

console.log("************************");
console.log("Foreach loop # 1");
console.log("************************");
names.forEach(myFunction);

function myFunction(eachName, index){
	console.log("For each "+ (index+1) + " " + eachName);
}

console.log("************************");
console.log("Foreach loop # 2");
console.log("************************");

names.forEach(function(name){
	console.log("Name: " + name);
});

console.log("************************");
console.log("Arrow Function # 1");
console.log("************************");

names.forEach((name) => {
	console.log("Arrow Function Name: "+ name);
});

console.log("************************");
console.log("Arrow Function # 2");
console.log("************************");

names.forEach((name) => console.log("single line "+name));

console.log("*******************************");
console.log("return through arrow function");
console.log("*******************************");

var returnMe = (myName) => myName + "!";
console.log(returnMe("Junaid"));

console.log("*******************************");
console.log("Diff b/w Anonymous and Arrow Function");
console.log("*******************************");

var personAnonymous = {
	name: "Junaid",
	greet: function(){
		names.forEach(function(name){
			console.log(this.name + " say hi to " + name);
		});
	}
};

personAnonymous.greet();

var personArrow = {
	name: "Junaid",
	greet: function(){
		names.forEach((name) => {
			console.log(this.name + " say hi to " + name);
		});
	}
};

personArrow.greet();

var addStatement = (a,b) => {
	return a+b;
};

console.log(addStatement(3,5));

var addExpression = (a,b) => a+b;

console.log(addExpression(5,8));