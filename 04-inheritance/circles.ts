import { Shapes } from "./Shapes";

export class Circle extends Shapes{
    public calculateArea(): number {
        return 3.142*this.radius*this.radius
    }
    constructor(height1:number,width1:number,private radius:number) {
        super(height1,width1)
    }

    public getInfo(): string {
        return super.getInfo()+` radius is ${this.radius}`
    }
}