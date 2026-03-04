abstract class Emp {
    constructor(public name: string) {}

    abstract calcuSal(): number;
}

class FullTimeEmp extends Emp {
    constructor(name: string, private salary: number) {
        super(name);
    }

    calcuSal(): number {
        return this.salary;
    }
}

const fullTime = new FullTimeEmp("mani", 50000);
console.log(fullTime.calcuSal());