console.log("Hello World.")

// Initialize array and fill it with zeros
count = [0, 0]

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
    document.write(rollOfDice + "<br>")
}