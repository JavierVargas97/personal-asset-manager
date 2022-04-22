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

//document.getElementById("search"). style.display = "none";




let endpoint = "https://api.binance.com/api/v3/ticker/price";
fetch(endpoint)
.then( response =>response.json())
.then( info => showInfo(info))
.catch( error => console.log(error))

const showInfo = (info) => {
    console.log(data)
let body = ""
for (let i = 0; i < data.length; i++) {
    body += "<tr><td>${data[i].symbol}<td></tr> <tr><td>${data[i].price}<td></tr>"
}

document.getElementById("data").innerHTML = body

}
