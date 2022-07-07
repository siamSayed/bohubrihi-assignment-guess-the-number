const numInput=document.querySelector("#numberInput")
const subInput=document.querySelector("#submit")
const form=document.querySelector(".main-form")
const indivcator=document.querySelector(".indicator")
//making of random numbers

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}
let randomNum=getRandomNum(10)




form.addEventListener("submit",e=>{
    
    let numberValue=e.target[0].value
    if (randomNum < numberValue){
        indivcator.innerHTML="Choose a lower number"
        indivcator.style.padding="20px 100px"
    }
    if(randomNum > numberValue){
        indivcator.innerHTML="Choose a bigger number"
        indivcator.style.padding="20px 100px"
    }
    if(randomNum == numberValue){
        indivcator.innerHTML="that's it number ("+ randomNum +") is the right answer"
        indivcator.style.padding="20px 100px"
    }
    
})