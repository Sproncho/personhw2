//id;firstName;lastName;age
const persons = [];
let inputData = prompt('Enter person data separate by ","');
while (inputData){
    //Create person from inputData
    //add only unique person to persons
    let data = inputData.split(',');
    let person = new Person(data[0],data[1],data[2],data[3],data[4]);
    if(!persons.find(p => p.id === person.id)){
        persons.push(person);
    }
    inputData = prompt('Enter person data separate by ","');
}
printPersons(persons);
printStats(persons);

function printPersons(persons) {
    persons.forEach( p => console.log(`id:${p.id}, fullname: ${p.fullName()}, age: ${p.age}` ));
}
//*
function printStats(persons) {
    //TODO print min age, max age, average age
    let minAge = persons.reduce((acc,cur)=> +cur.age < +acc  ? cur.age : +acc,99999999);
    let maxAge = persons.reduce((acc,cur)=> +cur.age > +acc  ? cur.age : +acc,0);
    let avg = persons.reduce((acc,cur)=> +acc + +cur.age,0) / persons.length;

    console.log(`minage: ${minAge}`);
    console.log(`maxAge: ${maxAge}`);
    console.log(`avg: ${avg}`);
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}