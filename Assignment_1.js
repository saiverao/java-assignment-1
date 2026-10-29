// 1. Store student details
let studentName = "Ananya Sharma";
let rollNumber = 17;
let department = "Information Technology";

let marks_English = 76;
let marks_Science = 88;
let marks_Socialstudies = 81;
let marks_Hindi = 92;
let marks_Mathematics = 69;

// 2. Store the five subject marks in an array
let marks = [
    marks_English,
    marks_Science,
    marks_Socialstudies,
    marks_Hindi,
    marks_Mathematics
];

// 3. Calculate total marks
function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total;
}

// 4. Calculate percentage (each subject is out of 100)
function calculatePercentage(marks) {
    let total = calculateTotal(marks);
    return (total / 500) * 100;
}

// 5. Find highest mark
function findHighest(marks) {
    return Math.max(...marks);
}

// 6. Find lowest mark
function findLowest(marks) {
    return Math.min(...marks);
}

// 7. Count subjects with marks greater than or equal to 40
function countPassed(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 40) {
            count++;
        }
    }

    return count;
}

// 8. Convert the student's name to uppercase and count characters
let uppercaseName = studentName.toUpperCase();
let characterCount = studentName.length;

// Bonus challenge: Return performance remark based on percentage
function performanceRemark(marks) {
    let percentage = calculatePercentage(marks);

    if (percentage >= 80) {
        return "Excellent";
    } else if (percentage >= 60) {
        return "Good";
    } else if (percentage >= 40) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}

// 9. Display the final student report
function displayReport(marks) {
    let total = calculateTotal(marks);
    let percentage = calculatePercentage(marks);

    console.log("========== STUDENT REPORT ==========");
    console.log("Name:", uppercaseName);
    console.log("Roll Number:", rollNumber);
    console.log("Department:", department);
    console.log("Total Marks =", total);
    console.log("Percentage =", percentage + "%");
    console.log("Highest Marks =", findHighest(marks));
    console.log("Lowest Marks =", findLowest(marks));
    console.log("Number of subjects passed =", countPassed(marks));
    console.log("Name character count =", characterCount);
    console.log("Performance =", performanceRemark(marks));
}

// Run the program
displayReport(marks);
