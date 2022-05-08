document.getElementById("circle").addEventListener("mouseout", (e) => {showText1()}, { once: true }); 
document.getElementById("circle").addEventListener("click", changeText2);

function showText1() {
	document.getElementById("demo").innerHTML = "Whoopsie Daisy! ;)";
	removeEventListener("demo");
}

function showText2() {
	document.getElementById("demo").innerHTML = `Good Job!!`;
}


function changeText2(){
	var userInput = document.getElementById('name').value;
	document.getElementById("demo").innerHTML = "Good Job " + userInput + "!!";
}

document.getElementById("submit").addEventListener("click", makeStory);

function makeStory() {
	var favAnimal = document.getElementById("favAnimal").value.toLowerCase();
	var verb = document.getElementById("verb").value.toLowerCase();
	var planet = document.getElementById("planet").value.toLowerCase();
	document.getElementById("story").innerHTML = "On a summerday a " + favAnimal + " was " + verb + " on a beach on " + planet + ".";
}