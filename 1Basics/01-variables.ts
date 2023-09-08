let Players:string[]=["Vedang"]

for(let player of Players){
    console.log(player);
}

class customer{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
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

let c1 = new customer("asis","v")
console.log(c1)
console.log(c1.getFirstName(),c1.getLastName());