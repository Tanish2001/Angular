import { Circle } from "./circles";
import { Rectangle } from "./rectangle";

let r1 = new Rectangle(1,2,3,4)
console.log(r1.getInfo());
console.log("Area is "+r1.calculateArea());

let c1 = new Circle(6,9,99)
console.log(c1.getInfo());
console.log("Area is "+c1.calculateArea());