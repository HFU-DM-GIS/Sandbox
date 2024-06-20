class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }

    print() {
        console.log(`Hallo ich bin ${this.name}`);
    }
}

let p = new Person('Anna', 23);

let pAsJson = JSON.stringify(p);
let pParsedBack = JSON.parse(pAsJson);

// funktioniert nicht:
//pParsedBack.print();

//let p2 = { name: 'Anna', alter: 23 };
// funktioniert auch nicht:
//p2.print();

// funktioniert:
let pAsObject = new Person(pParsedBack.name, pParsedBack.alter);
pAsObject.print();

console.log(pParsedBack);
console.log(pAsObject);