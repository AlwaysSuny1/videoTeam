const htmlStuff = [
    document.getElementById("password"),
    document.getElementById("enterPassword"),
    document.getElementById("loginErrorMessage"),
    document.getElementById("Login"),
    document.getElementById("body"),
    document.getElementById("mainPage")
]

let password = `<<<<>>>>>1{/'//gGjKl;:e|q<><><><><><><>ggggssss!@33@@1@56576&&%w3$5$3`
let userPassword = ""
let userEncodedPassword = ""
let isLoggedIn = "false"

isLoggedIn = localStorage.getItem("loginStorage")

if (isLoggedIn === "true") {
    htmlStuff[3].innerHTML = ""
    htmlStuff[3].remove()
    htmlStuff[4].style.background = "orange"
    htmlStuff[5].innerHTML = `
        <div id="topLine">
            <button class="floatRight" id="logOut">Wyloguj się</button>
            <img class="floatLeft" id="sunyImage" src="sunyLogo.png"></img>
        </div>
        <div id="textContainer">
            <h1>Witam na stronie Ekipy Filmowej</h1>
            <h2>Na tej stronie będą zdjęcia i filmy</h2>
            <h2>Które były zrobione/nagrane przez</h2>
            <h2 id="marginDownH2">Ekipę Filmową</h2>
        </div>
        <h1 id="white">Jak Narazie nic tu nie ma:(</h1>
        `
    allowLogOut = "true"
}

function errorMessageRender() {
    htmlStuff[2].innerHTML = ""
    htmlStuff[2].innerHTML = `
    <div id="errorMessageFrame">
        <p>Nieprawidłowe Hasło</p>
    </div>
    `
}

htmlStuff[1].addEventListener("click", function() {
    password = `<<<<>>>>>1{/'//gGjKl;:e|q<><><><><><><>ggggssss!@33@@1@56576&&%w3$5$3`
    userPassword = htmlStuff[0].value
    userEncodedPassword = ""
    encode()
    htmlStuff[0].value = ""
    if (userEncodedPassword === password) {
        isLoggedIn = "true"
    } else {
        errorMessageRender()
    }
    if (isLoggedIn === "true") {
        location.reload()
    }
    localStorage.setItem("loginStorage", isLoggedIn)
})

const logOut = document.getElementById("logOut")
logOut.addEventListener("click", function() {
    isLoggedIn = "false"
    localStorage.setItem("loginStorage", isLoggedIn)
    location.reload()
})

function encode() {
    for (i in userPassword) {
        switch (userPassword[i]) {
            case "1":
                userEncodedPassword += "3"
                break
            case "2":
                userEncodedPassword += "$"
                break
            case "3":
                userEncodedPassword += "5"
                break
            case "4":
                userEncodedPassword += "%"
                break
            case "5":
                userEncodedPassword += "6"
                break
            case "6":
                userEncodedPassword += "//"
                break
            case "7":
                userEncodedPassword += "7"
                break
            case "8":
                userEncodedPassword += "&"
                break
            case "9":
                userEncodedPassword += "."
                break
            case "0":
                userEncodedPassword += "*"
                break
            case "q":
                userEncodedPassword += "/"
                break
            case "w":
                userEncodedPassword += "("
                break
            case "e":
                userEncodedPassword += "0"
                break
            case "r":
                userEncodedPassword += ")"
                break
            case "t":
                userEncodedPassword += "-"
                break
            case "y":
                userEncodedPassword += "_"
                break
            case "u":
                userEncodedPassword += "="
                break
            case "i":
                userEncodedPassword += "+"
                break
            case "o":
                userEncodedPassword += "q"
                break
            case "p":
                userEncodedPassword += "Q"
                break
            case "a":
                userEncodedPassword += "w"
                break
            case "s":
                userEncodedPassword += "<<<<>>>>>1{/'//gGjKl;:"
                break
            case "d":
                userEncodedPassword += "e"
                break
            case "f":
                userEncodedPassword += "E"
                break
            case "g":
                userEncodedPassword += "{"
                break
            case "h":
                userEncodedPassword += "]"
                break
            case "j":
                userEncodedPassword += "'"
                break
            case "k":
                userEncodedPassword += "|"
                break
            case "l":
                userEncodedPassword += "<><><><><><><>ggggssss!@33@@1@56576&&%"
                break
            case "z":
                userEncodedPassword += "e"
                break
            case "x":
                userEncodedPassword += "s"
                break
            case "c":
                userEncodedPassword += "B"
                break
            case "v":
                userEncodedPassword += "C"
                break
            case "b":
                userEncodedPassword += "ć"
                break
            case "n":
                userEncodedPassword += "ź"
                break
            case "m":
                userEncodedPassword += "`"
                break
        }
    }
}