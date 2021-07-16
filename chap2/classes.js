// class Someone {
//     constructor() { }
//     msg: string;
//     speak() {
//         console.log(this.msg);
//     }
// }
// const tom = new Someone();
// tom.msg = "hello";
// tom.speak();
var Someone = /** @class */ (function () {
    function Someone(msg) {
        this.msg = msg;
    }
    Someone.prototype.speak = function () {
        console.log(this.msg);
    };
    return Someone;
}());
var tom = new Someone('hello');
// tom.msg = 'hello';
tom.speak();
