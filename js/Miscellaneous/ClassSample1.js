class Grandpa{
    constructor(supername){
        this.supername = supername
    }
}

class Father extends Grandpa{
    constructor(supername){
        super(supername)
    }
}

const man = new Father("Summers")

console.log(man)