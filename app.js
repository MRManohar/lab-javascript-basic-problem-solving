// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
var i = 0,
    j = 0,
    k = 0;
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
document.write("<--- Progression 1 --->");
document.write("<br>");
var driverName = "LakshmiManohar";
document.write("Drivers Name:-");
document.write("<br>");
document.write(driverName);
document.write("<br>");

// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
document.write("Navigators Name:-");
var navigatorName = "Lakshmi";
document.write(navigatorName);
document.write("<br>");
document.write("<br>");
// Progression 2: Control Statements - 1
document.write("<--- Progression 2 --->");
document.write("<br>");

// 2.1. Depending on which name is longer, print:
document.write("Progression 2.1 --->");
document.write("<br>");

if (driverName.length > navigatorName.length)
    document.write("Driver name - " + driverName + "<br>" + "Charecters length - " + driverName.length + "<br>");
else if (driverName.length < navigatorName.length)
    document.write("Navigator name - " + navigatorName + "<br>" + "Charecters length - " + navigatorName.length + "<br>");
else
    document.write("Charecters length - " + navigatorName.length + "<br>");
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
document.write("Progression 2.2 --->");
document.write("<br>");
document.write("For Driver Name - " + driverName + "<br>");
for (i = 0; i < driverName.length; i++) {
    if (driverName[i] == 'A' || driverName[i] == 'E' || driverName[i] == 'I' || driverName[i] == 'O' || driverName[i] == 'U' || driverName[i] == 'a' || driverName[i] == 'e' || driverName[i] == 'i' || driverName[i] == 'o' || driverName[i] == 'u')
        document.write("Vowel - " + driverName[i] + " & " + "Index - " + i + "<br>");
}
document.write("For Navigator Name - " + navigatorName + "<br>");
for (i = 0; i < navigatorName.length; i++) {
    if (navigatorName[i] == 'A' || navigatorName[i] == 'E' || navigatorName[i] == 'I' || navigatorName[i] == 'O' || navigatorName[i] == 'U' || navigatorName[i] == 'a' || navigatorName[i] == 'e' || navigatorName[i] == 'i' || navigatorName[i] == 'o' || navigatorName[i] == 'u')
        document.write("Vowel - " + navigatorName[i] + " & " + "Index - " + i + "<br>");
}
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
var u = 0,
    l = 0,
    oth = 0;

// 2.3. Check if the string contains uppercase and lowercase characters Xx
document.write("Progression 2.3 --->");
document.write("<br>");

document.write("For Driver Name - " + driverName + "<br>");
for (i = 0; i < driverName.length; i++) {
    if (isUpperCase(driverName[i])) {
        u++;
    }
    if (isLowerCase(driverName[i])) {
        l++;
    } else
        oth++;
}
document.write("In Driver Name -" + "<br>" + "No of Upper Case - " + u + "<br>" + "No of Lower Case - " + l);
document.write("<br>");
l = 0;
u = 0;
document.write("For Navigator Name - " + navigatorName + "<br>");
for (i = 0; i < navigatorName.length; i++) {
    if (isUpperCase(navigatorName[i])) {
        u++;
    }
    if (isLowerCase(navigatorName[i])) {
        l++;
    } else
        oth++;
}
document.write("In Navigator Name -" + "<br>" + "No of Upper Case - " + u + "<br>" + "No of Lower Case - " + l);

function isUpperCase(character) {
    if (character == character.toUpperCase()) return true;
    else return false;
}

function isLowerCase(character) {
    if (character == character.toLowerCase()) return true;
    else return false;
}
// - Print the number of upper case characters
// - Print the number of lower case characters


// Progression 3: Control Statements - 2
document.write("<br>");
document.write("<br>");
document.write("<--- Progression 3 --->");
document.write("<br>");

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
document.write("Progression 3.1 --->");
document.write("<br>");
name1 = driverName.toUpperCase();
for (i = 0; i < name1.length; i++) {
    document.write(name1[i] + " ");
}
document.write("<br>");
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
document.write("Progression 3.2 --->");
document.write("<br>");
for (i = navigatorName.length - 1; i >= 0; i--)
    document.write(navigatorName[i]);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
document.write("<br>");
document.write("Progression 3.3 --->");
document.write("<br>");

name2 = driverName + " " + navigatorName;
document.write(name2);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 