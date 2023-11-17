    // Name
const namePrompt=prompt("add your name")
const nameOFPerson=document.querySelector("#person_name")
nameOFPerson.innerText=namePrompt
    // elements
const personDiv=document.getElementById("personDiv")
const personImg=document.getElementById("person_img")
const personPosition=document.querySelector("#person_position")
const personScore=document.querySelector("#person_score")

const compImg=document.getElementById("compImg")
const compPosition=document.getElementById("compPosition")
const compScore=document.getElementById("compScore")

let personPoint=0
let compPoint=0
const answer=["r","p","s" ]

function draftfunction(personchoise,compchoise){
    if(personchoise=="p"){
        personImg.src= 'http://127.0.0.1:5500/img/paper.svg'
        compImg.src='http://127.0.0.1:5500/img/paper.svg'
        personPosition.innerText="draft"
        compPosition.innerText="draft"
    }else if(compchoise=="s"){
        personImg.src= 'http://127.0.0.1:5500/img/scissors.svg'
        compImg.src='http://127.0.0.1:5500/img/scissors.svg'
        personPosition.innerText="draft"
        compPosition.innerText="draft" 
    }else{
        personImg.src= 'http://127.0.0.1:5500/img/rock.svg'
        compImg.src='http://127.0.0.1:5500/img/rock.svg'
        personPosition.innerText="draft"
        compPosition.innerText="draft" 
    }
}
function fightfunction(personchoise,compchoise){
    if(personchoise=="r" && compchoise=="s" ){
        personImg.src= 'http://127.0.0.1:5500/img/rock.svg'
        compImg.src='http://127.0.0.1:5500/img/scissors.svg'
        personPosition.innerText="win"
        compPosition.innerText="lose"
        personPoint+=1
        personScore.innerText=personPoint

    }else if(personchoise=="p" && compchoise=="r" ){
        personImg.src= 'http://127.0.0.1:5500/img/paper.svg'
        compImg.src='http://127.0.0.1:5500/img/rock.svg'
        personPosition.innerText="win"
        compPosition.innerText="lose"
        personPoint+=1
        personScore.innerText=personPoint
       
    }else if(personchoise=="s" && compchoise=="p" ){
        personImg.src= 'http://127.0.0.1:5500/img/scissors.svg'
        compImg.src='http://127.0.0.1:5500/img/paper.svg'
        personPosition.innerText="win"
        compPosition.innerText="lose"
        personPoint+=1
        personScore.innerText=personPoint

    }else if(personchoise=="s" && compchoise=="r"){
        personImg.src= 'http://127.0.0.1:5500/img/scissors.svg'
        compImg.src='http://127.0.0.1:5500/img/rock.svg'
        personPosition.innerText="lose"
        compPosition.innerText="win"
        compPoint+=1
        compScore.innerText=compPoint
    }else if(personchoise=="r" && compchoise=="p"){
        personImg.src= 'http://127.0.0.1:5500/img/rock.svg'
        compImg.src='http://127.0.0.1:5500/img/paper.svg'
        personPosition.innerText="lose"
        compPosition.innerText="win"
        compPoint+=1
        compScore.innerText=compPoint

    }else if(personchoise=="p" && compchoise=="s"){
        personImg.src= 'http://127.0.0.1:5500/img/paper.svg'
        compImg.src='http://127.0.0.1:5500/img/scissors.svg'
        personPosition.innerText="lose"
        compPosition.innerText="win"
        compPoint+=1
        compScore.innerText=compPoint
    }else{
        draftfunction(personchoise,compchoise)
    }
}

function randomChoise(arrey){
    let randomNUmber=Math.floor(Math.random()*3)
    let randomChoise=arrey[randomNUmber]
    return randomChoise
}
window.addEventListener("keypress",function (e){
    let personchoise=e.key
    let compchoise=randomChoise(answer)

    
    if(answer.indexOf(personchoise)== -1){
        this.alert("hold down the key(R,P,S)")
    }
    else{
        
        fightfunction(personchoise,compchoise)

    }
} )