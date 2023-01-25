function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function Conditions(list,add,info){
    this.list = list;
    this.add = add;
    this.info = info;
}
let showInfo = false;

function setButtonsHidden(){
    let plusButton = document.querySelector("#plusButton");
    let infoButton = document.querySelector("#infoButton")
    plusButton.style.display = "none";
    infoButton.style.display = "none";
}
function setButtonsActive(){
    let plusButton = document.querySelector("#plusButton");
    let infoButton = document.querySelector("#infoButton")
    plusButton.style.display = "block";
    infoButton.style.display = "block";
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

function createStatDiv(stat){
    let element = document.createElement("div");
    element.className = "stat";
    element.innerHTML = stat;
    return element;
}