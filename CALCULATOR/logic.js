let one= document.querySelector("#one");
let two= document.querySelector("#two");
let three= document.querySelector("#three");
let four= document.querySelector("#four");
let five= document.querySelector("#five");
let six= document.querySelector("#six");
let seven= document.querySelector("#seven");
let eight= document.querySelector("#eight");
let nine= document.querySelector("#nine");
let zero= document.querySelector("#zero");
let zero_zero= document.querySelector("#zero_zero");
let addition= document.querySelector("#addition");
let minus= document.querySelector("#minus");
let divide= document.querySelector("#divide");
let multiply= document.querySelector("#multiply");
let AC= document.querySelector("#AC");
let arrow= document.querySelector("#arrow");
let equal= document.querySelector("#equal");
let dot= document.querySelector("#dot");
let percent= document.querySelector("#percent");

let mini_box=document.querySelector("#mini-box");

function updateDisplay(value) {
    mini_box.innerText = value;
    mini_box.scrollLeft = mini_box.scrollWidth;
}

function addValue(value) {
    if (mini_box.innerText === "0") {
        updateDisplay(value);
    } else {
        updateDisplay(mini_box.innerText + value);
    }
};
one.addEventListener("click",() => addValue("1"));
two.addEventListener("click",()=> addValue("2"));
three.addEventListener("click",() => addValue("3"));
four.addEventListener("click",() => addValue("4"));
five.addEventListener("click",() =>addValue("5"));
six.addEventListener("click",()=>addValue("6"));
seven.addEventListener("click",() =>addValue("7"));
eight.addEventListener("click",() => addValue("8"));
nine.addEventListener("click",() =>addValue("9"));
zero.addEventListener("click",()=> addValue("0"));
zero_zero.addEventListener("click",()=> addValue("00"));

addition.addEventListener("click",()=>{
    mini_box.innerText+="+";
});minus.addEventListener("click",()=>{
    mini_box.innerText+="-";
});divide.addEventListener("click",()=>{
    mini_box.innerText+="/";
});multiply.addEventListener("click",()=>{
    mini_box.innerText+="*";
});percent.addEventListener("click",()=>{
    mini_box.innerText+="%";
});dot.addEventListener("click",()=>{
    mini_box.innerText+=".";
});equal.addEventListener("click", () => {
    try {
        let expression = mini_box.innerText.replace(/%/g, "/100");
        mini_box.innerText = eval(expression);
    } catch {
        mini_box.innerText = "Error";
    }
});AC.addEventListener("click",()=>{
    mini_box.innerText="0";
});arrow.addEventListener("click",()=>{
    mini_box.innerText=mini_box.innerText.slice(0, -1);
});