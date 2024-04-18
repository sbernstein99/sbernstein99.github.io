/* 

CIS166AA: Introduction to JavaScript
Project 4

Author: Sammy Bernstein
Date:   April 18, 2024 

*/

function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    // Begin Calculator Functions
    if (op == "add") {
        calculate = a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    }

    // Calculator Output
    document.querySelector("#result").innerHTML = calculate;
}