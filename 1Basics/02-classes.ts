export class customer1{
    constructor(private firstName:string,private lastName:string){
        this.firstName=firstName
        this.lastName =lastName
    }

    public setFirstName(name:string){
        this.firstName=name
    }

    public setLastName(name:string){
        this.lastName=name
    }

    public getFirstName(){
        return this.firstName
    }

    public getLastName(){
        return this.lastName
    }
}

let c1 = new customer1("asis","v")
console.log(c1)
console.log(c1.getFirstName(),c1.getLastName());