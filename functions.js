let n = 37;//Stringes kiíratások
let s = "A kedvenc számom: " + n + "!";
let s2 = `A kedvenc számom: ${n * 2}!`;

console.log(s);
console.log(s2);

let o = {nev: "Béla", eletkor: 42, foglalkozas:"pék"};//o objektum deklarálása

console.log(o.nev);//kiírjuk a nev propertyjét az o objektumnak
console.log(o["foglalkozas"]);//Így is kitudjuk iratni az objektum propertyjeit(mintha indexelnénk)


function Osszead(a, b){//sima összead függvény
    return a + b;
};
console.log(Osszead);//Összead függvény és az eredményének kiíratása, ha nem adunk neki értéket az egész függvényt visszaadja
console.log(Osszead(4, 8));

let osszead3 = function(v, f){//ismét egy összead függvény csak most egy változóban eltárolva
    return v + f;
}

let osszead5 = (a, g) => { return a +g;};//Összead függvény nyíl függvénnyel és egy változóval megoldva

let negyzet2 = (o) => {return o*o};//ugyanaz mint az előbbi, csak ez most egy szorzás
let negyzet3 = n => n*n;//Ismét egy változóban lévő nyíl függvény, csak most a zárójelekt elhagytuk(négyzetre emelés)

console.log(negyzet3(3));//a negyzetre emelő függvény meghívása hárommal és az eredményének kiíratása

function oldalhatter(param){//Az oldal hátterét állító függvény, arra a stringre állítja a html háttérszínét amit megadunk paraméterben
    document.body.style.backgroundColor = param;
}



document.getElementById("btn").addEventListener('click', () => {oldalhatter("red")});//meghívjuk a gombunkat és arra egy addEventListenert hívunk amiben meghívjuk a háttérszínt változtató függvényt, a click esemény keretén belül