var currentTime = new Date(); 
console.log(currentTime );



// Get Form Inputs
function getInput() {
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  document.getElementById("result").innerHTML = "The user input is: " + input1 + " and " + input2;
}

function resetInput() {
document.getElementById('input1').value = '';
document.getElementById('input2').value = '';
}


// Get Button Inputs

var buttonValues = [];

function getButtonValue(buttonValue) {

if (buttonValue == "C" ) 
{
	
	
	
	if (length.buttonValues < 2 )
	{
		var buttonValues = [];
		document.getElementById("display").innerHTML = 0 ;
	}
	else
	{buttonValues.pop();}

}
else
if (buttonValue == "CA"){
	var buttonValues = [];
	document.getElementById("display").innerHTML = 0 ;}


	



else {buttonValues.push(buttonValue);}





var displayText = "";
for (i = 0; i < buttonValues.length ; i++) {
  displayText += buttonValues[i];

document.getElementById("display").innerHTML = displayText;

}


console.log("You have pressed " + buttonValues.length + " buttons " + displayText );
console.log("Length of buttonValues = "+ buttonValues.length);
console.log("buttonValues = "+ buttonValues);
}
