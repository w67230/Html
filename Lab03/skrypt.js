var d = document;

//1 zadanie
function dodawanie(){
    var a = parseInt(d.querySelector("#a").value);
    var b = parseInt(d.querySelector("#b").value);
    d.querySelector("#wynik").innerHTML = a + b;
    console.log(a + b);
}

function odejmowanie(){
    var a = parseInt(d.querySelector("#a").value);
    var b = parseInt(d.querySelector("#b").value);
    d.querySelector("#wynik").innerHTML = a - b;
    console.log(a - b);
}

function mnozenie(){
    var a = parseInt(d.querySelector("#a").value);
    var b = parseInt(d.querySelector("#b").value);
    d.querySelector("#wynik").innerHTML = a * b;
    console.log(a * b);
}

function dzielenie(){
    var a = parseFloat(d.querySelector("#a").value);
    var b = parseFloat(d.querySelector("#b").value);
    d.querySelector("#wynik").innerHTML = a / b;
    console.log(a / b);
}


d.querySelector("#dodawanie").addEventListener("click", dodawanie);
d.querySelector("#odejmij").addEventListener("click", odejmowanie);
d.querySelector("#mnoz").addEventListener("click", mnozenie);
d.querySelector("#dziel").addEventListener("click", dzielenie);


//2 zadanie
function pitagoras(){
    var a = parseInt(d.querySelector("#ta").value);
    var b = parseInt(d.querySelector("#tb").value);
    var c = parseInt(d.querySelector("#tc").value);
    d.querySelector("#wynikTrojkat").innerHTML = 0.5 * (a + b + c);
    console.log(0.5 * (a + b + c));
}

d.querySelector("#liczTrojkat").addEventListener("click", pitagoras);

//3 zadanie
function zgadywanka(){
    var a = parseInt(Math.ceil(Math.random() * 10));
    var b = parseInt(prompt("Zgadnij wylosowana liczbe (od 1 do 10"));
    if(a == b){
        d.querySelector("#wynikZgadywanki").innerHTML = "Zgadles!";
        console.log("Zgadles!");
    }
    else{
        d.querySelector("#wynikZgadywanki").innerHTML = "Nie zgadles. Wylosowana liczba to: " + a;
        console.log("Nie zgadles. Wylosowana liczba to: " + a);
    }
    
}

d.querySelector("#zgadywanka").addEventListener("click", zgadywanka);

//4 zadanie
function max(){
    var a = parseFloat(prompt("Podaj pierwsza liczbe"));
    var b = parseFloat(prompt("Podaj druga liczbe"));
    var c = parseFloat(prompt("Podaj trzecia liczbe"));
    var max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    d.querySelector("#wynikMax").innerHTML = "Najwieksza liczba: " + max;
    console.log("Najwieksza liczba: " + max);
    
}

d.querySelector("#max").addEventListener("click", max);

// 5 zadanie
function nwd(){
    var a = parseInt(prompt("Podaj pierwsza liczbe"));
    var b = parseInt(prompt("Podaj druga liczbe"));

    while(a != b){
        if(a > b) a = a-b;
        else b = b-a;
    }

    alert("NWD wynosi: " + a);
    console.log("NWD wynosi: " + a);
    
}

d.querySelector("#nwd").addEventListener("click", nwd);

//6 zadanie
var fStudent = {};
fStudent.imie = "Ktos";
fStudent.nazwisko = "Taki";
fStudent.wiek = 21;

console.log(fStudent.imie);
console.log(fStudent.nazwisko);
console.log(fStudent.wiek);

var sStudent = {};
fStudent.imie = "Łoś";
fStudent.nazwisko = "Śmaki";
fStudent.wiek = 13;

console.log(sStudent.imie);
console.log(sStudent.nazwisko);
console.log(sStudent.wiek);

var tStudent = {};
fStudent.imie = "Ukasz";
fStudent.nazwisko = "Fryc";
fStudent.wiek = 549;

console.log(tStudent.imie);
console.log(tStudent.nazwisko);
console.log(tStudent.wiek);

//7 zadanie
function obiekcik(){
    var a = prompt("Podaj imie");
    var b = prompt("Podaj nazwisko");
    var c = parseInt(prompt("Podaj wiek"));

    var studenciak = {};
    studenciak.imie = a;
    studenciak.nazwisko = b;
    studenciak.wiek = c;

    d.querySelector("#wynikObiekt").innerHTML = studenciak.imie + " " + studenciak.nazwisko + " " + studenciak.wiek;
    
}

d.querySelector("#obiekt").addEventListener("click", obiekcik);

//8 zadanie


function showTime(){
    data = new Date();
    d.querySelector("#zegarek").innerHTML = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
}

window.setInterval(showTime, 1000);

