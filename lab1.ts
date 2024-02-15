console.log("hello, world")

var x = 20;
console.log(x);

// cf. let vs var
function display() {
    let i = 0;
    for (i = 0; i < 10; i++) {
        console.log("i = " + i);
    }
    console.log("Final i : " + i);
}

display();

// JavaScript n'a pas de class
// TypeScript est un language orienté objet
class Etudiant{
    // nom : string;
    // age : number;

    // constructor(nom:string, age:number)
    // {
    //     this.nom = nom;
    //     this.age = age;
    // }

    // Paramètres optionnels
    constructor(private nom?:string, private age?:number)  // declration d'attributs d'instance + plusieurs constructeurs
    {
    }

    info()
    {
        console.log("Nom : "+this.nom+"\nÂge : "+this.age);
    }
}

var e : Etudiant = new Etudiant("Einstein",20);  // constructeur avec paramètres
e.info();
var e1 : Etudiant = new Etudiant("Feynman");
e1.info();
var e2 : Etudiant = new Etudiant(); // constructeur par défaut
e2.info();

// Expression lambda de Java -> Arrow function
function somme(x:number, y:number)
{
    return x+y;
}

console.log(somme(10,2));

let res = (x:number, y:number) => x+y; // arrow function
console.log(res(10,20));
