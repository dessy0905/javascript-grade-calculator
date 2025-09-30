// Student Grade Calculator
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

// Main grade calculator function
async function calculateStudentGrade() {
    console.log("=== Student Grade Calculator ===\n");

    try {
        // Get student information
        const studentName = await askQuestion('Enter student name: ');
        const subject = await askQuestion('Enter subject: ');

        // Get number of assignments/tests
        const numGrades = parseInt(await askQuestion('How many grades to enter? '));

        if (isNaN(numGrades) || numGrades <= 0) {
            console.log('Please enter a valid number of grades.');
            return;
        }

        // Collect all grades
        const grades = [];
        for (let i = 1; i <= numGrades; i++) {
            const gradeInput = await askQuestion(`Enter grade ${i} (0-100): `);
            const grade = parseFloat(gradeInput);

            if (isNaN(grade) || grade < 0 || grade > 100) {
                console.log('Please enter a valid grade between 0 and 100.');
                i--; // Repeat this iteration
                continue;
            }

            grades.push(grade);
        }

        // Calculate average
        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

        // Determine letter grade
        let letterGrade, status;
        if (average >= 90) {
            letterGrade = 'A';
            status = 'Excellent';
        } else if (average >= 80) {
            letterGrade = 'B';
            status = 'Good';
        } else if (average >= 70) {
            letterGrade = 'C';
            status = 'Satisfactory';
        } else if (average >= 60) {
            letterGrade = 'D';
            status = 'Needs Improvement';
        } else {
            letterGrade = 'F';
            status = 'Failing';
        }

        // Display results
        console.log(`\n============ GRADE REPORT ============`);
        console.log(`Student: ${studentName}`);
        console.log(`Subject: ${subject}`);
        console.log(`Individual Grades: ${grades.join(', ')}`);
        console.log(`Average Score: ${average.toFixed(2)}%`);
        console.log(`Letter Grade: ${letterGrade}`);
        console.log(`Status: ${status}`);
        console.log(`=====================================\n`);

        // Ask if user wants to calculate another grade
        const again = await askQuestion('Calculate another student grade? (y/n): ');
        if (again.toLowerCase() === 'y' || again.toLowerCase() === 'yes') {
            console.log('\n');
            await calculateStudentGrade();
        } else {
            console.log('Thank you for using the Grade Calculator!');
        }

    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Start the program
calculateStudentGrade();