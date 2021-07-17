class ClassA {
    static typeName: string;
    constructor() { }

    static getFullName() {
        return "ClassA " + ClassA.typeName;
    }
}
const aa = new ClassA();
console.log(ClassA.typeName);