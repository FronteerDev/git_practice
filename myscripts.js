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