function calculateCosts() {
var kilometers = document.getElementById("kilometers").value;
var consumption =document.getElementById("consumption").value;
var price = document.getElementById("price").value;
var participants = document.getElementById ("participants").value;

var costPerParticipant = (consumption/100*price*kilometers/participants);

document.getElementById("answerId").innerHTML ="Fuel costs per participant is "+ costPerParticipant.toFixed(2) + " euros.";
}