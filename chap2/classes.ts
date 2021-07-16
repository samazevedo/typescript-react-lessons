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

class Someone {
    constructor(private msg: string) { }

    speak() {
        this.msg = "speak " + this.msg;
        console.log(this.msg);
    }
}
const tom = new Someone('hello');
//tom.msg = 'hello';
tom.speak();



