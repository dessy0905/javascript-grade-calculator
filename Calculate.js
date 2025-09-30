const prompt = require('prompt-sync')();

// Define alert function for Node.js (since it doesn't exist in Node.js)
function alert(message) {
    console.log('\n=== ALERT ===');
    console.log(message);
    console.log('=============\n');
    // Optionally, wait for user to press Enter
    prompt('Press Enter to continue...');
}

try {
    // Step 1: Ask the user for 5 subject scores
    let scores = [];
    for (let i = 0; i < 5; i++) {
        let input = prompt(`Enter score for subject ${i + 1}: `);
        let score = Number(input);

        // Handle invalid input
        if (isNaN(score) || score < 0 || score > 100) {
            throw new Error(`Invalid score entered: ${input}. Please enter numbers between 0 and 100.`);
        }

        scores.push(score);
    }

    // Step 2: Assign grades for each subject
    let grades = [];
    for (let i = 0; i < scores.length; i++) {
        let grade;
        if (scores[i] >= 80) {
            grade = "A";
        } else if (scores[i] >= 70) {
            grade = "B";
        } else if (scores[i] >= 60) {
            grade = "C";
        } else if (scores[i] >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        grades.push(grade);
    }

    // Step 3: Output results
    let result = "";
    for (let i = 0; i < scores.length; i++) {
        result += `Subject ${i + 1}: Score = ${scores[i]}, Grade = ${grades[i]}\n`;
    }
    alert(result);

} catch (error) {
    // Handle invalid inputs
    console.error(error.message);
    alert(error.message);
}
