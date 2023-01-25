//id;firstName;lastName;age

 let company = new Company();

changeConditions(new Conditions(true,false,false));
printPersons();

let plusButton = document.querySelector("#plusButton");
plusButton.onclick = (e)=>{
    changeConditions(new Conditions(false,true,false));
    setButtonsHidden();
}

let addButton = document.querySelector("#addButton");
addButton.onclick = (e) =>{
    let employee = new Employee(idInput.value,firstNameInput.value,secondNameInput.value,ageInput.value,salaryInput.value);
    company.addEmployee(employee)
    let inputs = Array.from( document.querySelector(".inputs").children);
    inputs.forEach(i => i.value = "");
    changeConditions(new Conditions(true,false,false));
    printPersons();
    setButtonsActive()
    showInfo = false;

}

let infoButton = document.querySelector("#infoButton");
infoButton.onclick = (e) =>{
    if (showInfo === true){
        printPersons();
    }
    if(showInfo === false){
        printStats();
    }
    showInfo = !showInfo;
}


function printPersons() {
    let personList = document.querySelector(".personList");
    removeAllChildNodes(personList)

    company.employees.forEach( p => {
        let person = document.createElement("li");
        person.className = "person";
        person.innerHTML = `id:${p.id}, full name:${p.fullName()}, age:${p.age}, salary:${p.salary}`
        let deleteBtn = document.createElement("div");
        deleteBtn.className = "button";
        deleteBtn.id = "deleteButton";
        deleteBtn.innerText = "x";
        deleteBtn.onclick = (e) => {
            company.removeEmployee(p);
            e.target.parentElement.remove();
        }
        person.append(deleteBtn)
        personList.append(person);
    });
}

function printStats() {
    let stats = company.statistics;
    let personList = document.querySelector(".personList");
    removeAllChildNodes(personList);
    let statistics = document.createElement("div");
    statistics.className = "statistics";
    let minStat = createStatDiv(`min age:${stats.minAge}`);
    let maxStat =  createStatDiv(`max age:${stats.maxAge}`);
    let avgStat =createStatDiv(`average:${stats.avgAge}`);
    let salaryStat =createStatDiv(`total salary:${stats.totalSalary}`);
    statistics.append(minStat,maxStat,avgStat,salaryStat);
    personList.append(statistics);
}

