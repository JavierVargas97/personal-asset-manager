//Esto hace que el Modal sirva.
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

document.getElementById("cryptoSearch"). style.display = "none";
document.querySelector(".cryptoTable").style.display = "none";

//Este codigo esconde el Search bar que va a buscar los cryptos en el modal. La idea es hacerlo aparecer cuando el botton de crypto sea seleccionado
document.getElementById("cryptobtn").onclick = function () {
    document.getElementById("stockbtn").style.display = "none"
    document.getElementById("currencybtn").style.display = "none"
    document.getElementById("cryptobtn").style.display = "none"
    document.getElementById("cryptoSearch").style.display = "block"
    document.querySelector(".cryptoTable").style.display = "block"
}
document.getElementById("")



//Constantes establecidas
const cryptoSearch = document.getElementById("cryptoSearch")
const cryptoRows = document.getElementsByTagName("td")

//Trae toda la informacion de cryptos
let endpoint = "https://api.binance.com/api/v3/ticker/price?symbols=[%22ETHUSDT%22,%22BTCUSDT%22,%22XRPUSDT%22,%22DAIUSDT%22,%22LTCUSDT%22,%22BCHUSDT%22,%22AAVEUSDT%22,%22ADAUSDT%22,%22APEUSDT%22,%22AXSUSDT%22,%22BATUSDT%22,%22CHZUSDT%22,%22COMPUSDT%22,%22CRVUSDT%22,%22DYDXUSDT%22,%22ENJUSDT%22,%22FTMUSDT%22,%22GALAUSDT%22,%22GRTUSDT%22,%22LINKUSDT%22,%22LRCUSDT%22,%22MANAUSDT%22,%22MATICUSDT%22,%22MKRUSDT%22,%22OMGUSDT%22,%22QNTUSDT%22,%22SANDUSDT%22,%22SHIBUSDT%22,%22SNXUSDT%22,%22SOLUSDT%22,%22SUSHIUSDT%22,%22UNIUSDT%22,%22YFIUSDT%22]";
fetch(endpoint)
.then( response =>response.json())
.then( info => showInfo(info))
.catch( error => console.log(error))

//Enseña toda la informacion de cryptos en el modal como una tabla
const showInfo = (info) => {
    document.getElementById("data").innerHTML = info
    console.log(info) //AQUI TENGO QUE VER UNA MANERA DE FILTRAR PARA QUE HAGA ESTO UNICAMENTE PARA LAS QUE CONTIENEN USDT
    
    document.getElementById("data").innerHTML = info
    let body = " "
    for (let i = 0; i < info.length; i++) {
        body += `<tr><td>${info[i].symbol}<td> <td>${info[i].price}<td></tr>`
    }

    document.getElementById("data").innerHTML = body

}

//search
cryptoSearch.addEventListener("keyup", (e)=>{
    let text = e.target.value
    //console.log(text)

    let expression = new RegExp(text, "i")
    for( let i = 0; i < cryptoRows.length; i++ ) {
        let value = cryptoRows[i]
        //console.log(value)
        if(expression.test (value.innerText)){
            value.classList.remove ("hide")

        } 
        
        else {
            console.log(value)
            value.classList.add("hide")

        }
    }

})








