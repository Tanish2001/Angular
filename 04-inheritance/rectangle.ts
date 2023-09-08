import { Shapes } from "./Shapes";

export class Rectangle extends Shapes{
    public calculateArea(): number {
        return this._height*this._width
    }
    constructor(private _height:number,private _width:number,x:number,y:number){
        super(x,y)
    }

    public getInfo(): string {
        return super.getInfo()+`height:${this._height} width:${this._width}`
    }
}