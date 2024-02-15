export class Animal {
    id: number;
    espece: string;
    poids: number;
    taille: number;

    constructor(id: number, espece: string, poids: number, taille: number) {
        this.id = id;
        this.espece = espece;
        this.poids = poids;
        this.taille = taille;
    }

    info() {
        console.log(`ID: ${this.id}, Espèce: ${this.espece}, Poids: ${this.poids}, Taille: ${this.taille}`);
        // return "ID : " + this.id + ", Espèce : " + this.espece + ", Poids : " + this.poids + ", Taille : " + this.taille;
    }
}

// Création d'un tableau de 4 animaux
export const animaux: Animal[] = [
    new Animal(1, "Chien", 10, 30),
    new Animal(2, "Chat", 5, 25),
    new Animal(3, "Oiseau", 0.5, 2.5),
    new Animal(4, "Poisson", 1, 5),
];

// Méthode pour afficher les infos de tous les animaux
export function displayAllAnimals(animaux: Animal[]) {
    animaux.forEach(animal => animal.info());
}

displayAllAnimals(animaux);
