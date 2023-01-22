//id;firstName;lastName;age
function Conditions(list,add,info){
    this.list = list;
    this.add = add;
    this.info = info;
}

let showInfo = false;
function Person(id,firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${firstName} ${lastName}`;
}

function changeConditions(conditions){
    let props = []
    let cond = Object.values(conditions);
    props[0] = document.querySelector(".personList");
    props[1] = document.querySelector("#addPerson");
    props.forEach((p,i)=>{
        if(cond[i] === true)
            p.style.display = 'block';
        else
            p.style.display = 'none';
    })
}
let persons = [];





changeConditions(new Conditions(true,false,false));

printPersons();
let plusButton = document.querySelector("#plusButton");
plusButton.onclick = (e)=>{
    changeConditions(new Conditions(false,true,false));
    plusButton.style.display = "none";
    infoButton.style.display = "none";

}

let addButton = document.querySelector("#addButton");
addButton.onclick = (e) =>{
    let person = new Person(idInput.value,firstNameInput.value,secondNameInput.value,ageInput.value);
    persons.push(person);
    let inputs = Array.from( document.querySelector(".inputs").children);
    inputs.forEach(i => i.value = "");
    changeConditions(new Conditions(true,false,false));
    printPersons(persons);
    infoButton.style.display = "block";
    plusButton.style.display = "block";
    showInfo = false;

}

let infoButton = document.querySelector("#infoButton")
infoButton.onclick = (e) =>{
    if (showInfo === true){
        printPersons(persons)
    }
    if(showInfo === false){
        printStats(persons)
    }
    showInfo = !showInfo;
}


function printPersons() {
    let personList = document.querySelector(".personList");
    removeAllChildNodes(personList)
    console.log(persons)
   // let do
    persons.forEach( p => {
        let person = document.createElement("li");
        person.className = "person";
        person.innerHTML = `id:${p.id}, full name:${p.fullName()}, age:${p.age}`
        let deleteBtn = document.createElement("div");
        deleteBtn.className = "button";
        deleteBtn.id = id="deleteButton";
        deleteBtn.innerText = "x"
        deleteBtn.onclick = (e) => {
            persons = persons.filter((pers) => pers.id != p.id );
            e.target.parentElement.remove();
            console.log(persons);
        }
        person.append(deleteBtn)
        personList.append(person);
    });
}




//
function printStats() {
    //TODO print min age, max age, average age
    let minAge = persons.reduce((acc,cur)=> +cur.age < +acc  ? cur.age : +acc,99999999);
    let maxAge = persons.reduce((acc,cur)=> +cur.age > +acc  ? cur.age : +acc,0);
    let avg = persons.reduce((acc,cur)=> +acc + +cur.age,0) / persons.length;
    let personList = document.querySelector(".personList");
    removeAllChildNodes(personList);
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
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}