function keres1(){
    //alert("hello")
    let benev = document.getElementById("benev").value
    fetch("https://api.nevnapok.eu/nev/"+benev)
.then(x => x.json())
.then(y => {
    console.log(y)
    let sz = ""
    sz+="<ul>"
    for (const elem of y[benev]) {
        console.log(elem)
        sz+=`
        <li>
        ${elem}
        </li>
        `

    }
    sz+= "</ul>"
    document.getElementById("uli").innerHTML=sz
});
}
function keres2(){
    //alert("hello22323")
    let bedatum = document.getElementById("bedatum").value
    fetch("https://api.nevnapok.eu/nap/"+bedatum)
.then(x => x.json())
.then(y => {
    console.log(y)
    let sz = ""
    sz+="<ul>"
    for (const elem of y[bedatum]) {
        console.log(elem)
        sz+=`
        <li>
        ${elem}
        </li>
        `

    }
    sz+= "</ul>"
    document.getElementById("uli2").innerHTML=sz
});
}

const today = new Date();


const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();


const url = `https://api.naplo.net/name-day/${year}-${month}-${day}`;


fetch(url)
  .then(x => x.json()) 
  .then(y => {
    
    const nameDays = y.names;
    
    
    const message = `Ma ${month}.${day}. van. A mai névnapok: ${nameDays.join(', ')}`;
    
    
    document.getElementById("maidatum").innerHTML = message
  })
  .catch(error => console.error(error));