window.onload = function (){
// Your code here
//grabbing items to manipulate
let poster = document.querySelector('#poster')
let title = document.querySelector('.title')
let runTime =document.querySelector("#runtime")
let description = document.querySelector('#film-info')
let showTime = document.querySelector('#showtime')
let remainingTickets = document.querySelector('#ticket-num')
let BuyButton = document.querySelector('#buy-ticket')
let unLists =document.querySelector('#films')


//fetch data from the server using fetch()

fetch('http://localhost:3000/films')
.then((res)=>res.json())
.then(data=>{

//----interpolating data from the server to the DOM

poster.src=`${data[0].poster}`
title.innerHTML=`${data[0].title}`
runTime.innerHTML=`${data[0].runtime}`
description.innerHTML=`${data[0].description}`
showTime.innerHTML=`${data[0].showtime}`
let capacity = `${data[0].capacity}`
let ticketsSold = `${data[0].tickets_sold}`
let ticketsTosale = (+capacity -+ticketsSold)
remainingTickets.innerHTML=ticketsTosale

//deliverable 2
//--menu of all movies on the left side of the screen loop through object---
//----loop through data.title adding title to side menu-------
fetch('http://localhost:3000/films')
.then(res=>res.json())
.then(showTitle)

function showTitle (films){
    films.forEach(renderLists)
}

function renderLists(films){
let lizt = document.createElement('li')
unLists.appendChild(lizt)
lizt.innerHTML= `${films.title}`
}

//deliverable 3
//-----Adding event listener to button----


 BuyButton.addEventListener('click',(e)=>{
    BuyButton.style.backgroundColor = 'red';
    let newButton = document.createElement('button')
    let text = document.createTextNode('SOLD OUT')
    newButton.appendChild(text)
    if (ticketsTosale>0)
    { ticketsTosale-=1 
    remainingTickets.innerText=ticketsTosale}
    else {
       BuyButton.replaceWith(newButton)
    }

}
)

    console.log(data)
})


}




