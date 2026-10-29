// 1. Reverse a string without using reverse().
function reverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    console.log("1. Reversed string:", newStr);
}
reverse("Rahul");
// 2. Check whether a string is a palindrome.
function palindrome_check(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }

    if (str === newStr) {
        console.log("2.", str, "is a palindrome.");
    } else {
        console.log("2.", str, "is not a palindrome.");
    }
}
palindrome_check("madam");
palindrome_check("rahul");
// 3. Count vowels and consonants in a string.
function count(str) {
    let vowel = 0;
    let consonant = 0;
    const text = str.toLowerCase();

    for (let char of text) {
        if (char >= "a" && char <= "z") {
            if ("aeiou".includes(char)) {
                vowel++;
            } else {
                consonant++;
            }
        }
    }

    console.log("3. Vowels:", vowel);
    console.log("   Consonants:", consonant);
}
count("elephant");
// 4. Find the second-largest distinct number in an array.
function second_largest(array) {
    let uniqueArray = [...new Set(array)];
    uniqueArray.sort((a, b) => a - b);

    if (uniqueArray.length < 2) {
        console.log("4. There is no second-largest distinct number.");
    } else {
        console.log("4. Second-largest distinct number:", uniqueArray[uniqueArray.length - 2]);
    }
}
second_largest([2, 8, 9, 11, 4, 2, 8, 11, 60, 90, 75, 60]);
// 5. Remove duplicate elements without using Set.
function remove_duplicacy(array) {
    let res = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < res.length; j++) {
            if (array[i] === res[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            res.push(array[i]);
        }
    }

    console.log("5. Array without duplicates:", res);
}
remove_duplicacy([2, 8, 9, 11, 4, 2, 8, 11, 60, 90, 75, 60]);
// 6. Find the sum of all even numbers in an array.
function sum_of_even(array) {
    let evenSum = 0;

    for (let number of array) {
        if (number % 2 === 0) {
            evenSum = evenSum + number;
        }
    }

    console.log("6. Sum of even numbers:", evenSum);
}
sum_of_even([5, 7, 9, 12, 15, 81, 20, 1]);
// 7. Find the frequency of a given element in an array.
function frequency(array, target) {
    let frequencyOfElement = 0;

    for (let number of array) {
        if (number === target) {
            frequencyOfElement++;
        }
    }

    console.log("7. Frequency of", target + ":", frequencyOfElement);
}
frequency([2, 4, 4, 7, 9, 0, 1, 4, 6, 4, 4], 4);

// 8. Check whether two strings are anagrams.
function check_Anagram(str1, str2) {
    const first = str1.toLowerCase().split("").sort().join("");
    const second = str2.toLowerCase().split("").sort().join("");

    if (str1.length === str2.length && first === second) {
        console.log("8.", str1, "and", str2, "are anagrams.");
    } else {
        console.log("8.", str1, "and", str2, "are not anagrams.");
    }
}
check_Anagram("silent", "listen");
check_Anagram("hello", "world");
check_Anagram("heart", "earth");
// 9. Move all zeros to the end while keeping non-zero elements in order.
function moveZerosToEnd(arr) {
    let newArr = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        } else {
            zeroCount++;
        }
    }

    for (let j = 0; j < zeroCount; j++) {
        newArr.push(0);
    }

    console.log("9. Zeros moved to the end:", newArr);
}
moveZerosToEnd([0, 1, 0, 3, 12, 0, 36, 78, 0]);
