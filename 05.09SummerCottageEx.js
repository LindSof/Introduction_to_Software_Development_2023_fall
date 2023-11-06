function calculateRent() {
    var rent = document.getElementById("rent").value;
    var participants = document.getElementById("participants").value;

    var perPerson= rent/participants;

    // TODO
    document.getElementById("answerDiv").innerHTML= "Rent per participants is "+ perPerson.toFixed(2) + " euros.";
}