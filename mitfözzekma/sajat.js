let prevIndex = -1

function Randomkaja() {
    let nev = document.getElementById("Név")
    let kep = document.getElementById("Kép")
    let kaloria = document.getElementById("Kalória")
    let elkeszetes = document.getElementById("Elkészítés")

    

    let rIndex = Math.floor(Math.random() * 10)
    while (rIndex == prevIndex) {
        rIndex = Math.floor(Math.random() * 10)
    }

    prevIndex = rIndex
    let kaja = kajak[rIndex]

    nev.innerHTML = kaja.Név
    kep.src = kaja.Kép
    kaloria.innerHTML = kaja.Kalória
    elkeszetes.innerHTML = kaja.Elkészítés
}



let kajak = [
    {"Név":"Milanói Makaroni","Kép":"képek/1.jpg","Elkészítés":"60 (perc)","Kalória":"400kcal"},
    {"Név":"Brassói","Kép":"képek/2.jpg","Elkészítés":"120 (perc)","Kalória":"852kcal"},
    {"Név":"Gombás borjútokány","Kép":"képek/3.jpg","Elkészítés":"50 (perc)","Kalória":"359kcal"},
    {"Név":"Rakott krumpli","Kép":"képek/4.jpg","Elkészítés":"60 (perc)","Kalória":"153kcal"},
    {"Név":"Carbonara","Kép":"képek/5.jpg","Elkészítés":"40 (perc)","Kalória":"400kcal"},
    {"Név":"Birkapőrkölt","Kép":"képek/6.jpg","Elkészítés":"160 (perc)","Kalória":"492kcal"},
    {"Név":"Zöldborsós pörkölt","Kép":"képek/7.jpg","Elkészítés":"100 (perc)","Kalória":"521kcal"},
    {"Név":"Gyümölcs leves","Kép":"képek/8.jpg","Elkészítés":"45 (perc)","Kalória":"230kcal"},
    {"Név":"Sültpaprikás tarhonyai","Kép":"képek/9.jpg","Elkészítés":"55 (perc)","Kalória":"442kcal"},
    {"Név":"Olaszos brokkolileves","Kép":"képek/10.jpg","Elkészítés":"30 (perc)","Kalória":"559kcal"}
]