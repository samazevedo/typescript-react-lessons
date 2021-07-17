var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    return ClassA;
}());
var aa = new ClassA();
console.log(ClassA.typeName);
