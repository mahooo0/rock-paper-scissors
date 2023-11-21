    // Name
const namePrompt=prompt("add your name")
const nameOFPerson=document.querySelector("#person_name")
nameOFPerson.innerText=namePrompt
    // elements
const personDiv=document.getElementById("personDiv")
const personImg=document.getElementById("person_img")
const personPosition=document.querySelector("#person_position")
const personScore=document.querySelector("#person_score")
const img_divP=document.querySelector("#img_divP")
const img_divC=document.querySelector("#img_divC")

const compImg=document.getElementById("compImg")
const compPosition=document.getElementById("compPosition")
const compScore=document.getElementById("compScore")

let personPoint=0
let compPoint=0
const answer=["r","p","s" ]
const objeckt={
    r: ` <svg enable-background="new 0 0 488.3 589" viewBox="0 0 488.3 589" xmlns="http://www.w3.org/2000/svg"><path d="m70.8 128.1c1.8-3 3.1-5.2 3.3-5.7 13.2-22.8 21.6-35.6 21.6-35.6 6-9.2 9.5-14 11.1-16 4-5.2 8.2-10.2 11-13.3 2.3-2.5 12.4-12.6 33.8-24.2 12.6-6.8 22.4-10 42.1-16.3 13.9-4.5 29.5-9.4 50.8-13.1 11-1.9 22.9-3.9 38.9-3.9 12.5 0 22.6 0 33.8 3.5 13.7 4.3 22.9 11.9 36.9 25.4 26.7 25.7 45.3 48.3 51.6 56 21.5 26.2 42.9 54.8 42.9 54.8 1.1 2.8 2.2 5.8 3.2 8.7 3.2 9.2 9 27.7 12.3 51.6 0 .1.1.4.1.4s-17.7-10.4-32.7-19.4c-16.1-9.7-28.6-15.7-42.5-22.2-3.7-1.8-20.8-9.8-44.1-18.7-22.5-8.5-28.8-9.5-32.6-9.9-3.7-.4-17.7-1.8-35.3 2.4-2.3.5-5.8 1.5-17.1 5.6-17.6 6.4-24.1 9.7-41.3 16.7-27.5 11.1-35.5 12.5-38.9 13.1-5.6.9-14.7 2.3-26.2 1.2-3.9-.4-6.5-1-40.5-14.3h-.1c-17.2-9.1-25.8-11.8-43-21-.3-.2-1-.5-1.9-1 .8-1.3 1.7-2.9 2.8-4.8z" fill="#d2d3d4"/><path d="m488.3 336.5c-.6-26.1-4.6-46.5-8.3-65-1-5.1-1.3-6.3-3-13.7-.5-2.4-2.1-9.4-5.2-23.5-1.9-8.5-4.5-20.3-7.6-34.7-.1-.3-.2-.7-.3-1-3.4-2-8.5-4.9-14.6-8.5-27.6-15.9-36.4-20.6-40.1-22.5-24.6-13.3-41.6-19.9-75.6-33.2-7.1-2.8-18.7-7.2-34-6.7-4.3.1-9.3.7-17.9 2.7-16.8 4-27 8.8-43 15.4-14 5.9-30.9 12.5-50.9 18.4-10.2 3-19 5.2-30.3 4.4-7.7-.5-12.9-2.2-21.5-5-11.9-3.9-20-7.9-47.2-21.7-5.4-2.8-12.2-6.2-20-10.2-.2.4-.6 1.1-1.1 1.8-.3.5-.5.8-.9 1.3-.5.7-.9 1.3-1.2 1.6-.6.8-.6.9-.9 1.2-.7.9-1.1 1.6-1.7 2.5-.1.2-1 1.5-1.6 2.5-1 1.7-1.7 2.8-3.1 6-.7 1.6-1.5 3.1-2.3 4.7-2.4 5.1-3.6 7.7-4.5 9.6-1.5 3.2-3.9 8.2-6.8 14.6-3.3 7.2-3.1 6.1-8.3 17-5.1 10.8-11.4 24.4-18.4 40.5 0 0 1.7 4.4 9.6 14.3 14 17.6 21 26.4 32.8 38.5 11.2 11.6 16.9 17.4 23.4 20.9 11.2 6 21.3 7 29.7 7.7 38.3 3.3 61.7 3 61.7 3s43.1-.4 80.1 3c5.5.5 16.7 1.7 27 9.4 4.5 3.4 7.2 6.8 11.8 12.7s8.3 11.5 16.5 25.9c8.9 15.6 10.9 20.2 17.6 30 6.3 9.2 9.8 13 14.9 16 5 3 10.2 3.9 17.9 5.2 4.1.7 17.1 2.7 50.4-4.1 11.9-2.4 20.7-4.8 29.2-7.2 16-4.4 29.2-8.6 38.5-11.8 0 0 5.5-13.1 7.4-27.8 2.1-17.5 1.8-31 1.8-34.2z" fill="#bdbec0"/><path d="m432.7 412.2c-17.6 5.2-30.9 6.7-42.2 8-1.2.1-13.2 1.4-28.7.3-6.6-.5-9.5-1.1-12.4-2.2-6.6-2.5-11.5-6.8-17.6-14.3-5.9-7.2-8.8-12.3-17.4-27.3-11.6-20.3-13.3-23-16.3-27.3-7.9-11.4-11.8-17.2-18.7-21.5-6.1-3.7-12.5-5.6-28.4-7.4-19.2-2.2-34.2-2.2-38.9-2.2-22.2.1-51 .4-80.5-.8-6.4-.3-14.7-.7-25.4-3.3-5.4-1.3-17.9-4.6-30.3-12.7-9.1-5.9-15.3-13.6-27.3-28.7-15.2-19.1-25.9-32.6-30.7-38.6-.1.2-.2.5-.3.7-1.2 6.4-2.4 12.8-3.6 19.2 0 .1-.1.7-.1.8-4.1 22.1-4.5 23.9-5 27-2.9 18.6-5.6 35.4-7.4 58.1-1 11.8-1.2 21.7-1.7 41.6-.3 12.3-.3 19.1 1.7 27.8 1.5 6.7 3.8 13.4 9.1 24 3.2 6.4 10.6 20.2 32.5 48.8 12.5 16.2 22.3 27.6 24.8 30.6 11.8 13.7 22.6 25.1 31.4 33.9 0 0 11.6 5.7 27 10.7 49.4 16.4 55 21 82.7 27 20 4.4 29.1 4.6 32.8 4.6 15 .1 26.3-2.7 41.9-7.1 23.9-6.8 61.5-17.6 98.9-36.1 14-6.9 22.7-12.3 31.7-17.9 11.6-7.3 14.9-10.1 16.8-11.8 7.2-6.7 12.6-14.6 18.7-27.8 7.4-16 10.2-27.6 14.6-43.3 3.2-11.6 8.2-28.4 15.2-49 .3-.1-15.2 6.8-46.9 16.2z" fill="#a8a9ac"/></svg>`,
    p:`<svg enable-background="new 0 0 490 669" viewBox="0 0 490 669" xmlns="http://www.w3.org/2000/svg"><path d="m269 0h221v669h-490v-400z" fill="#f1a64a"/><g fill="#fff"><path d="m48.2 566.5h393v21h-393z"/><path d="m48.2 476h393v21h-393z"/><path d="m48.2 295.8h393v21h-393z"/><path d="m48.2 385.5h393v21h-393z"/><path d="m268.5 225.3h172.8v-21h-172.8"/><path d="m268.5 135.2h172.8v-20.9h-172.8"/></g><path d="m269 0-269 269h269z" fill="#d2d3d4"/></svg>`,
    s:`<svg viewBox="0 0 424.43 661.33" xmlns="http://www.w3.org/2000/svg"><path d="m369 0s-7.16 11.34-19.05 33.93c-4.35 8.48-12.6 24.55-23 43.08-3.62 6.47-4.83 8.47-9 16-5.4 9.81-7.26 13.5-15 27.91-1.14 2.13-.42.79-13 24.05-12.1 22.42-11.94 22.13-14 26-7.45 13.72-7.95 14.47-12 22-5.28 9.93-5.6 10.83-10 18.92-4.66 8.64-4.91 8.73-11.07 19.94-1.23 2.23-6.43 11.71-12.94 24-3.7 7-4.6 8.82-9 17.1-3.23 6.08-5.84 10.93-8 15-10.38 19.24-27.65 50.85-39 71.92-15.58 28.85-14.46 27.63-30.92 58.11-12.16 22.66-29.02 52.97-29.02 52.97a5.07 5.07 0 0 1 -1.07 2 78.82 78.82 0 0 0 -10-2 82.74 82.74 0 0 0 -30.82 2 89.15 89.15 0 0 0 -20.11 8.07 91.65 91.65 0 0 0 -18 11.95 92.49 92.49 0 0 0 -14 15 101.21 101.21 0 0 0 -10 15.87 94.55 94.55 0 0 0 -9.95 38.83 95.63 95.63 0 0 0 4.95 33.29 97.61 97.61 0 0 0 33.92 47 92.87 92.87 0 0 0 24.1 13 92.11 92.11 0 0 0 25.89 5.06 93.94 93.94 0 0 0 33.09-3 94.28 94.28 0 0 0 29-14.1 97.86 97.86 0 0 0 26-28 93.72 93.72 0 0 0 13-66.08 112.37 112.37 0 0 0 -9.17-27.82 63.23 63.23 0 0 0 -11-16.09l-.88-.88c3.08-4.67 7.71-11.9 13-21.12.92-1.6 1-1.68 5-9 10-18 11.34-20.23 15-26.92s6.24-11.67 9-17c17.77-34 27.35-54.24 45.13-89.09 1.75-3.43 4.87-9.54 8.92-17.94 1.74-3.61 4.25-8.89 12-26 6.18-13.69 9.28-20.53 13-29 3.6-8.24 3.25-7.62 12-28 8.51-19.87 8.63-20 11.09-26 4-9.83 6.81-17.17 10.93-28 3.93-10.35 6.56-17.27 10-27 3.35-9.52 5.68-16.67 9-27 3.43-10.5 5.14-15.76 7-22 3.43-11.61 5.64-20.55 7-26 1.42-5.76 3.66-14.9 6-27 1.92-9.75 3.19-17.67 3.89-22.23.4-2.6.67-4.34 1-6.83a175.45 175.45 0 0 0 1.58-22.07c.04-6.5-.49-6.83-.49-6.83zm-273.39 626.51a60.76 60.76 0 1 1 60.76-60.76 60.76 60.76 0 0 1 -60.76 60.76z" fill="#e3683c"/><path d="m423 549a84.62 84.62 0 0 0 -6.07-21 90.38 90.38 0 0 0 -7.93-14.08 106.4 106.4 0 0 0 -10.09-13 94.67 94.67 0 0 0 -26.01-19.92 92.81 92.81 0 0 0 -23-8c-6.88-1.54-16.14-3.54-28-2.07a69.27 69.27 0 0 0 -10 2l-1-2s-.51-1-1-2c-7.07-13.15-11-20-11-20-5.16-9.06-8.6-16-22-41-6.18-11.5-7.67-14.17-19-35-28.55-52.61-27.87-51.85-47.06-87-10-18.4-14.58-26.59-23.92-44-6.55-12.2-8.41-15.8-15-28-8.85-16.33-10-18.18-18-33-1.14-2.1-6.12-11.45-16.05-30.06-10.39-19.47-12.33-23.12-16-29.93-4.9-9.14-8.31-15.5-13-24-8-14.76-8.89-16.16-18-33-6.23-11.45-9.34-17.17-13-24-4.62-8.66-9.54-17.17-14-25.93-6.01-10.86-7.87-14.01-7.87-14.01a129.9 129.9 0 0 0 0 21.91c.22 2.47.32 4.43 1 8.12 1.44 8.37 2.23 15.1 3.05 19.73.47 2.62 2.11 11.7 4.93 24 .89 3.91 4.34 18.77 10.1 38.12 2.13 7.15 3.92 12.7 5.95 19 3.71 11.54 6.75 20.39 8 24 1.37 4 6.45 18.6 13.93 38 1.58 4.11 7.86 20.36 17 42 6.54 15.48 11.61 26.73 18 40.94 7.15 15.89 12.77 28 17 37 5.53 11.89 10.73 23 17 36.06 17.57 36.38 33.22 65.6 42 82.05 3 5.56 2.66 4.89 14 25.85 10.37 19.27 13.04 24.22 18.04 33.12 2.4 4.28 9 16 9 16s-8.84 11.1-13 20.1a86.89 86.89 0 0 0 -7.09 25.22 101.27 101.27 0 0 0 1 34.71 97.34 97.34 0 0 0 11 28.93 93.56 93.56 0 0 0 25.07 28 97.33 97.33 0 0 0 90.9 12.14 94.9 94.9 0 0 0 61.12-80.08 99.22 99.22 0 0 0 -1-25.92zm-93.42 77.56a60.78 60.78 0 1 1 60.78-60.78 60.78 60.78 0 0 1 -60.79 60.78z" fill="#e3683c"/><g fill="#fff"><circle cx="212.09" cy="353.86" r="24.57"/></g><circle cx="212.18" cy="353.62" fill="#e3683c" r="16.55"/></svg>`
}


function draftfunction(personchoise,compchoise){
    if(personchoise=="p"){
        // personImg.src= 'http://127.0.0.1:5500/img/paper.svg'
        img_divP.innerHTML=objeckt.p
        // compImg.src='http://127.0.0.1:5500/img/paper.svg'
        img_divC.innerHTML=objeckt.p

        personPosition.innerText="draft"
        compPosition.innerText="draft"
    }else if(compchoise=="s"){
        // personImg.src= 'http://127.0.0.1:5500/img/scissors.svg'
        // compImg.src='http://127.0.0.1:5500/img/scissors.svg'
        img_divC.innerHTML=objeckt.s
        img_divP.innerHTML=objeckt.s
        personPosition.innerText="draft"
        compPosition.innerText="draft" 
    }else{
        // personImg.src= 'http://127.0.0.1:5500/img/rock.svg'
        // compImg.src='http://127.0.0.1:5500/img/rock.svg'
        img_divP.innerHTML=objeckt.r
        img_divC.innerHTML=objeckt.r
        personPosition.innerText="draft"
        compPosition.innerText="draft" 
    }
}
function fightfunction(personchoise,compchoise){
    if(personchoise=="r" && compchoise=="s" ){

        // personImg.src= 'http://127.0.0.1:5500/img/rock.svg'
        img_divP.innerHTML=objeckt.r
        // compImg.src='http://127.0.0.1:5500/img/scissors.svg'
        img_divC.innerHTML=objeckt.s
        personPosition.innerText="win"
        compPosition.innerText="lose"
        personPoint+=1
        personScore.innerText=personPoint

    }else if(personchoise=="p" && compchoise=="r" ){
        // personImg.src= 'http://127.0.0.1:5500/img/paper.svg'
        img_divP.innerHTML=objeckt.p
        // compImg.src='http://127.0.0.1:5500/img/rock.svg'
        img_divC.innerHTML=objeckt.r
        personPosition.innerText="win"
        compPosition.innerText="lose"
        personPoint+=1
        personScore.innerText=personPoint
       
    }else if(personchoise=="s" && compchoise=="p" ){
        // personImg.src= 'http://127.0.0.1:5500/img/scissors.svg'
        img_divP.innerHTML=objeckt.s
        // compImg.src='http://127.0.0.1:5500/img/paper.svg'
        img_divC.innerHTML=objeckt.p
        personPosition.innerText="win"
        compPosition.innerText="lose"
        personPoint+=1
        personScore.innerText=personPoint

    }else if(personchoise=="s" && compchoise=="r"){
        // personImg.src= 'http://127.0.0.1:5500/img/scissors.svg'
        img_divP.innerHTML=objeckt.s
        // compImg.src='http://127.0.0.1:5500/img/rock.svg'
        img_divC.innerHTML=objeckt.r
        personPosition.innerText="lose"
        compPosition.innerText="win"
        compPoint+=1
        compScore.innerText=compPoint
    }else if(personchoise=="r" && compchoise=="p"){
        // personImg.src= 'http://127.0.0.1:5500/img/rock.svg'
        img_divP.innerHTML=objeckt.r
        // compImg.src='http://127.0.0.1:5500/img/paper.svg'
        img_divC.innerHTML=objeckt.p
        personPosition.innerText="lose"
        compPosition.innerText="win"
        compPoint+=1
        compScore.innerText=compPoint

    }else if(personchoise=="p" && compchoise=="s"){
        // personImg.src= 'http://127.0.0.1:5500/img/paper.svg'
        img_divP.innerHTML=objeckt.p
        // compImg.src='http://127.0.0.1:5500/img/scissors.svg'
        img_divC.innerHTML=objeckt.s
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