function passValues(){
    var recherche = document.getElementById("searchResult").value;
    localStorage.setItem("rechercheValeur", recherche)
    return false;
}

document.getElementById("pseudo").innerHTML=localStorage.getItem("rechercheValeur");