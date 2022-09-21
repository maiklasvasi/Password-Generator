//DOM
let passOn = document.getElementById("passOne")
let passTw = document.getElementById("passTwo")
let passThr = document.getElementById("passThree")
let passFo = document.getElementById("passFour")
let paLength = document.getElementById("passLength")

// array that holds all character 

let charSet = [];

// generate all characters - consoled
for (let i = 32; i < 127; i++) {
charSet.push(String.fromCharCode(i)) 
}

document.getElementById("generate-Btn").addEventListener("click", generate)

function generate() {
passOn.textContent = generatePassword() 
passTw.textContent = generatePassword() 
passThree.textContent = generatePassword() 
passFour.textContent = generatePassword()     
}

// generate random password 
function generatePassword() {
let password = " "
let length = document.getElementById("input-Length").value
for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length)
    password += charSet[randomIndex]
}         
return password
    }

