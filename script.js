//
let modal = document.getElementById("mymodal")
let assetbtn = document.getElementById("assetbtn")
let span = document.getElementsByClassName("close");

assetbtn.onclick=function() {
    modal.style.display = "block";
}

span.onclick = function (event) {
    modal.style.display = "none;"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}




let cripto = "https://api.binance.com/api/v3/ticker/price";
fetch(cripto)
.then( respuesta =>respuesta.json())
.then( datos => mostrarData(datos))
.catch( error => console.log(error))

const mostrarData = (data) => {

}