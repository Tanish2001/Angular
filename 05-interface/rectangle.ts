import { shape } from "./shape";

export class Rectangle implements shape{

    constructor(private height:number,private width:number){
        this.height=height
        this.width=width
    }

    getInfo(): string {
        return `Height is ${this.height} and width is ${this.width}`
}
    
}