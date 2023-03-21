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

