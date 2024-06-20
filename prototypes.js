class Test {
    constructor() {
        this.a = 1;
    }
    func_a() { }
}
class Test2 extends Test {
    constructor() {
        super();
        this.b = 2;
    }
    func_b() { }
}
let t = new Test();
console.log(t); // auf Konsole betrachten
let t2 = new Test2();
t2.b = 3;
t2.c = 3;
console.log(t);
console.log(t2);
console.log(`${t instanceof Test2}, ${t2 instanceof Test}`);