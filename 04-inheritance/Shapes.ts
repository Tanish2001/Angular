export abstract class Shapes{
    constructor(private height:number,private width:number){
        // this.height=height
        // this.width=width
    }

    public getInfo(){
        return `height= ${this.height} and width = ${this.width}`
    }

    public abstract calculateArea():number;
}