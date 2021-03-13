class Release{
    constructor(name = "None", value = 0){
        this.name = name;
        this.value = value;
    }
}

class Cycle{
    constructor(month, year) {
        this.month = month;
        this.year = year;
        this.releases = []
    }

    addRelease(...releases){
        releases.forEach(l => this.releases.push(l))
    }

    sumary(){
        let values = 0
        this.releases.forEach(l => {
            values += l.value
        })
        return values
    }
}

const salary = new Release("Salary", 12000)
const eletrecityBill = new Release("Eletrecity", -200)
const cycle = new Cycle("March", 2021)

cycle.addRelease(salary)
cycle.addRelease(eletrecityBill)

console.log(cycle.sumary())