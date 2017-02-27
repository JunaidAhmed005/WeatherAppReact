function getTempCallback (location, callback){
	callback(undefined, 78);
	callback("City not found");
}

getTempCallback("Karachi", function(err, temp){
	if (err) {
		console.log("error", err);
	}
	else{
		console.log("success", temp);
	}
});

/*
getTempCallback("Karachi", weatherCall);

function weatherCall (err, temp){
	if (err) {
		console.log("error", err);
	}
	else{
		console.log("success", temp);
	}
}
*/

function getTempPromise (location){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(79);
			reject("City not found");	
		}, 1000)
		
	});
}

getTempPromise("karachi").then(function(temp){
	
	console.log("promise success", temp);
}, function(err){

	console.log("promise error", err);
});

// Challenge Area
function addPromise(a, b){
	return new Promise(function(resolve, reject){
		if (typeof a === "number" && typeof b === "number") {
			resolve(a+b);
		}
		else{
			reject("a & b need to be numbers");
		}
	});
}

addPromise(6,8).then(function(sum){
	console.log("add success", sum);
}, function(err){
	console.log("Error! ", err);
});


addPromise(6, "abc").then(function(sum){
	console.log("this should not show up");
}, function(err){
	console.log("This should appear as Error! ", err);
});