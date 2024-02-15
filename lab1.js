console.log("hello, world");
var x = 20;
console.log(x);
// cf. let vs var
function display() {
    var i = 0;
    for (i = 0; i < 10; i++) {
        console.log("i = " + i);
    }
    console.log("Final i : " + i);
}
display();
// JavaScript n'a pas de class
// TypeScript est un language orienté objet
var Etudiant = /** @class */ (function () {
    // nom : string;
    // age : number;
    // constructor(nom:string, age:number)
    // {
    //     this.nom = nom;
    //     this.age = age;
    // }
    // Paramètres optionnels
    function Etudiant(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    Etudiant.prototype.info = function () {
        console.log("Nom : " + this.nom + "\nÂge : " + this.age);
    };
    return Etudiant;
}());
var e = new Etudiant("Einstein", 20); // constructeur avec paramètres
e.info();
var e1 = new Etudiant("Feynman");
e1.info();
var e2 = new Etudiant(); // constructeur par défaut
e2.info();
// Expression lambda de Java -> Arrow function
function somme(x, y) {
    return x + y;
}
console.log(somme(10, 2));
var res = function (x, y) { return x + y; }; // arrow function
console.log(res(10, 20));
