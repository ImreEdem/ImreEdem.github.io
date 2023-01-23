var tomb = 
[
    "Mi az a speciális eszköz amivel átlátsz a betonfalon? ? Ablak",
    "Miaz? Feldobod zöld, leesik ugat? Mindegy, csak kutyára essen!",
    "Mivel nyitja ki a kanibál az ajtót? Kulcscsontal!",
    "Miért megy fel a szőke nő a villany póznára? Hogy megb*ssza az áram",
    "Hogyan rak tüzet a pap? Keresztbe"
]
var kepek =
[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.png"
]

vicc()

function vicc()
{
    //alert(tomb[veletlen])
    var veletlen = Math.floor(Math.random() * tomb.length);
    console.log(veletlen)
    document.getElementById("vicchelye").innerHTML = tomb[veletlen]
    document.getElementById("vicckepe").src=kepek[veletlen]

}

