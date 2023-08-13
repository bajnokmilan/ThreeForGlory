function arakLekerdezese()
{
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4 && this.status===200) 
    {
        var valasz=JSON.parse(this.responseText);
        var arak=document.querySelectorAll('.card-price')
        arak[0].innerText=valasz.kiloar;
        arak[1].innerText=valasz.edzoterv;
        arak[2].innerText=valasz.tankonyv;

        var kedvezmenyListaElem=document.getElementaryById("kedvezmenyListaElem")
        kedvezmenyListaElem.textContent=valasz.kedvezmeny+"%-os kedvezmeny a terem belépő árából.";

        console.log(this.responseText);
    }
    });

    xhr.open("GET", "http://localhost:8080/api/arak");

    xhr.send();
}

window.onload=function(){
arakLekerdezese()
}

function gyakorlatGeneralas()
{
    var gyakorlatok=["Swing","Magasra húzás","Serleg guggolás","Szélmalom","Török felállás"];
    var ismetlesszam=Math.floor(Math.random()*30)+1;
    var gyakorlatIndex=Math.floor(Math.random()*gyakorlatok.length);

    document.getElementById("generaltGyakorlat").innerHTML=ismetlesszam+"darab "+gyakorlatok[gyakorlatIndex];
}