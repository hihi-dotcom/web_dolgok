let n = 37;
let s = "A kedvenc számom: " + n + "!";
let s2 = `A kedvenc számom: ${n * 2}!`;

console.log(s);
console.log(s2);

let o = {nev: "Béla", eletkor: 42, foglalkozas:"pék"};

console.log(o.nev);
console.log(o["foglalkozas"]);


function Osszead(a, b){
    return a + b;
};
console.log(Osszead);
console.log(Osszead(4, 8));

let osszead3 = function(v, f){
    return v + f;
}

let osszead5 = (a, g) => { return a +g;};

let negyzet2 = (o) => {return o*o};
let negyzet3 = n => n*n;

console.log(negyzet3(3));

function oldalhatter(param){
    document.body.style.backgroundColor = param;
}



document.getElementById("btn").addEventListener('click', () => {oldalhatter("red")});