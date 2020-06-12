console.log("Hello World.")

// Initialize array and fill it with zeros
count = [0, 0, 0, 0, 0]

// Loop through results 1000 times
for (let i = 1; i <= 1000; i++) {

    // Declare rollOfDice1 and rollOfDice2 and assign them a random number between 1 and 6
    let rollOfDice1
    let rollOfDice2
    rollOfDice1 = Math.floor((Math.random() * 6) + 1)
    rollOfDice2 = Math.floor((Math.random() * 6) + 1)

    // Get sum of 2 dice
    let rollOfDice = rollOfDice1 + rollOfDice2

    // Increment count
    count[rollOfDice] = count[rollOfDice] + 1

    // Create a div, with class "bar", and set the width to 100px.
    let newElement = document.createElement("div");
    newElement.className = "bar";
    newElement.style.width = rollOfDice * 100 + "px";

    // Place a text label inside the new div.
    var newText = document.createTextNode("Dice Roll #" + i + " " + "Equals " + rollOfDice);
    newElement.appendChild(newText);

    // Put the new div on the page inside the existing element "d1".
    var destination = document.getElementById("d1");
    destination.appendChild(newElement);
}