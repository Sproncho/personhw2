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


printStats(persons);
printPersons(persons);





function printPersons(persons) {
    let personList = document.querySelector(".personList");
   // let do
    persons.forEach( p => {
        let person = document.createElement("li");
        person.className = "person";
        person.innerHTML = `id:${p.id}, full name:${p.fullName()}, age:${p.age}`
        personList.append(person);
    });
}
//*
function printStats(persons) {
    //TODO print min age, max age, average age
    let minAge = persons.reduce((acc,cur)=> +cur.age < +acc  ? cur.age : +acc,99999999);
    let maxAge = persons.reduce((acc,cur)=> +cur.age > +acc  ? cur.age : +acc,0);
    let avg = persons.reduce((acc,cur)=> +acc + +cur.age,0) / persons.length;
    let personList = document.querySelector(".personList");

    let statistics = document.createElement("div");
    statistics.className = "statistics";

    let minStat = document.createElement("div");
    minStat.className = "stat";
    minStat.innerHTML = `min age:${minAge}`;

    let maxStat = document.createElement("div");
    maxStat.className = "stat";
    maxStat.innerHTML = `max age:${maxAge}`;

    let avgStat = document.createElement("div");
    avgStat.className = "stat";
    avgStat.innerHTML = `average:${avg}`;

    statistics.append(minStat,maxStat,avgStat);
    personList.append(statistics)
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