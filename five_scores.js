// Simple program to collect 5 scores from user and store in an array
const readline = require('readline');

// Function to ask a question and return a promise
function askQuestion(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Main function to collect 5 scores
async function collectFiveScores() {
    let scores = []; // Empty array to store the 5 scores

    console.log("Enter 5 scores:");

    // Loop to collect exactly 5 scores
    for (let i = 1; i <= 5; i++) {
        let validScore = false;

        // Keep asking until we get a valid score
        while (!validScore) {
            let input = await askQuestion(`Score ${i}: `);
            let score = parseFloat(input);

            // Check if input is a valid number
            if (!isNaN(score)) {
                scores.push(score); // Add score to array
                validScore = true;
                console.log(`Score ${i} added: ${score}`);
            } else {
                console.log("Please enter a valid number!");
            }
        }
    }

    // Display the complete array
    console.log("\n--- Results ---");
    console.log("All 5 scores:", scores);
    console.log("Array length:", scores.length);

    // Show some basic calculations
    let sum = scores.reduce((total, score) => total + score, 0);
    let average = sum / scores.length;

    console.log("Sum:", sum);
    console.log("Average:", average.toFixed(2));

    return scores; // Return the array
}

// Run the program
collectFiveScores().then(scoresArray => {
    console.log("Final array:", scoresArray);
}).catch(error => {
    console.error("Error:", error);
});
