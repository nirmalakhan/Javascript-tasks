class Animals {
    constructor(small, big) {
        this.smallanimal = small;
        this.biganimal = big;
    }

    Place() {
        return this.smallanimal + " is a pet animal."
    }

    Type() {
        return this.biganimal + " is a wild animal."
    }
}

let myAnimals = new Animals("Cat", "Elephant");
let myAnimals2 = new Animals("Dog", "Tiger");

console.log(myAnimals.Place());
console.log(myAnimals.Type());
console.log(myAnimals2.Place());
console.log(myAnimals2.Type());


class Vegi {
    constructor(root, leafy) {
        this.root = root;
        this.leaf = leafy;
    }
}

class Sour extends Vegi {
    constructor(root, leafy, seed) {
        super(root, leafy);
        this.seeds = seed;

    }

    show() {
        return this.root + " is a root vegitable."
    }

    find() {
        return this.leaf + " is a leafy vegitable. It do not have " + this.seeds + "."
    }
}

let myVegi = new Sour("Potato", "Coriander", "seed");
console.log(myVegi.show());
console.log(myVegi.find());