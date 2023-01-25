class Company{
    constructor() {
        this._employees = []
    }
    get employees(){
        console.log(this._employees)
        return [...this._employees];
    }
    addEmployee(employee){
        const index = this._employees.findIndex((e)=> employee.id === e.id);
        if(index < 0){
            this._employees.push(employee)
        }
        return index < 0;
    }

    removeEmployee(employee){
        const index = this._employees.findIndex((e)=> employee.id === e.id);
        if(index >= 0){
            this._employees.splice(index,1);
        }
        return index >= 0;

    }
   get statistics(){
        let stats = {
             minAge : this._employees.reduce((acc,cur)=> +cur.age < +acc  ? cur.age : +acc,99999999),
             maxAge : this._employees.reduce((acc,cur)=> +cur.age > +acc  ? cur.age : +acc,0),
             avgAge :this._employees.reduce((acc,cur)=> +acc + +cur.age,0) / this._employees.length,
             totalSalary :this._employees.reduce((acc,cur) => +acc + +cur.salary,0)
        }
        return stats;
    }
}