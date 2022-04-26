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
document.getElementById("btc").style.display = "none"
document.getElementById("eth").style.display = "none"
document.getElementById("ltc").style.display = "none"
document.getElementById("ada").style.display = "none"
document.getElementById("xrp").style.display = "none"
document.getElementById("link").style.display = "none"
document.getElementById("bat").style.display = "none"
document.getElementById("omg").style.display = "none"
document.getElementById("enj").style.display = "none"
document.getElementById("matic").style.display = "none"
document.getElementById("ftm").style.display = "none"
document.getElementById("chz").style.display = "none"
document.getElementById("bch").style.display = "none"
document.getElementById("sol").style.display = "none"
document.getElementById("lrc").style.display = "none"
document.getElementById("comp").style.display = "none"
document.getElementById("snx").style.display = "none"
document.getElementById("mkr").style.display = "none"
document.getElementById("dai").style.display = "none"
document.getElementById("mana").style.display = "none"
document.getElementById("yfi").style.display = "none"
document.getElementById("crv").style.display = "none"
document.getElementById("sand").style.display = "none"
document.getElementById("sushi").style.display = "none"
document.getElementById("uni").style.display = "none"
document.getElementById("aave").style.display = "none"
document.getElementById("axs").style.display = "none"
document.getElementById("grt").style.display = "none"
document.getElementById("shib").style.display = "none"
document.getElementById("qnt").style.display = "none"
document.getElementById("dydx").style.display = "none"
document.getElementById("gala").style.display = "none"
document.getElementById("ape").style.display = "none"

//Este codigo esconde el Search bar que va a buscar los cryptos en el modal. La idea es hacerlo aparecer cuando el botton de crypto sea seleccionado
document.getElementById("cryptobtn").onclick = function () {
    document.getElementById("stockbtn").style.display = "none"
    document.getElementById("currencybtn").style.display = "none"
    document.getElementById("cryptobtn").style.display = "none"
    document.getElementById("cryptoSearch").style.display = "block"
    document.querySelector(".cryptoTable").style.display = "block"

    document.getElementById("btc").style.display = "block"
    document.getElementById("eth").style.display = "block"
    document.getElementById("ltc").style.display = "block"
    document.getElementById("ada").style.display = "block"
    document.getElementById("xrp").style.display = "block"
    document.getElementById("link").style.display = "block"
    document.getElementById("bat").style.display = "block"
    document.getElementById("omg").style.display = "block"
    document.getElementById("enj").style.display = "block"
    document.getElementById("matic").style.display = "block"
    document.getElementById("ftm").style.display = "block"
    document.getElementById("chz").style.display = "block"
    document.getElementById("bch").style.display = "block"
    document.getElementById("sol").style.display = "block"
    document.getElementById("lrc").style.display = "block"
    document.getElementById("comp").style.display = "block"
    document.getElementById("snx").style.display = "block"
    document.getElementById("mkr").style.display = "block"
    document.getElementById("dai").style.display = "block"
    document.getElementById("mana").style.display = "block"
    document.getElementById("yfi").style.display = "block"
    document.getElementById("crv").style.display = "block"
    document.getElementById("sand").style.display = "block"
    document.getElementById("sushi").style.display = "block"
    document.getElementById("uni").style.display = "block"
    document.getElementById("aave").style.display = "block"
    document.getElementById("axs").style.display = "block"
    document.getElementById("grt").style.display = "block"
    document.getElementById("shib").style.display = "block"
    document.getElementById("qnt").style.display = "block"
    document.getElementById("dydx").style.display = "block"
    document.getElementById("gala").style.display = "block"
    document.getElementById("ape").style.display = "block"

}
document.getElementById("")



//Constantes establecidas ignore*
const cryptoSearch = document.getElementById("cryptoSearch")
const cryptoRows = document.getElementsByTagName("span")


const api_url = "https://api.binance.com/api/v3/ticker/price?symbols=[%22ETHUSDT%22,%22BTCUSDT%22,%22XRPUSDT%22,%22DAIUSDT%22,%22LTCUSDT%22,%22BCHUSDT%22,%22AAVEUSDT%22,%22ADAUSDT%22,%22APEUSDT%22,%22AXSUSDT%22,%22BATUSDT%22,%22CHZUSDT%22,%22COMPUSDT%22,%22CRVUSDT%22,%22DYDXUSDT%22,%22ENJUSDT%22,%22FTMUSDT%22,%22GALAUSDT%22,%22GRTUSDT%22,%22LINKUSDT%22,%22LRCUSDT%22,%22MANAUSDT%22,%22MATICUSDT%22,%22MKRUSDT%22,%22OMGUSDT%22,%22QNTUSDT%22,%22SANDUSDT%22,%22SHIBUSDT%22,%22SNXUSDT%22,%22SOLUSDT%22,%22SUSHIUSDT%22,%22UNIUSDT%22,%22YFIUSDT%22]";
async function getCrypto() {
    const response = await fetch(api_url);
    const data = await response. json ();
    const {symbol, price} = data;

    //document.getElementById("symbol").textContent=symbol;

    console.log(data);
    console.log(data[1].price);
    document.getElementById("btc").innerHTML = data[0].symbol +"   "+ data[0].price;//btc
    document.getElementById("eth").innerHTML = data[1].symbol +"   "+ data[1].price;//eth
    document.getElementById("ltc").innerHTML = data[2].symbol +"   "+ data[2].price;//ltc
    document.getElementById("ada").innerHTML = data[3].symbol +"   "+ data[3].price;//ada
    document.getElementById("xrp").innerHTML = data[4].symbol +"   "+ data[4].price;//xrp
    document.getElementById("link").innerHTML = data[5].symbol +"   "+ data[5].price;//link
    document.getElementById("bat").innerHTML = data[6].symbol +"   "+ data[6].price;//bat
    document.getElementById("omg").innerHTML = data[7].symbol +"   "+ data[7].price;//omg
    document.getElementById("enj").innerHTML = data[8].symbol +"   "+ data[8].price;//enj
    document.getElementById("matic").innerHTML = data[9].symbol +"   "+ data[9].price;//matic
    document.getElementById("ftm").innerHTML = data[10].symbol +"   "+ data[10].price;//ftm
    document.getElementById("chz").innerHTML = data[11].symbol +"   "+ data[11].price;//shz
    document.getElementById("bch").innerHTML = data[12].symbol +"   "+ data[12].price;//bch
    document.getElementById("sol").innerHTML = data[13].symbol +"   "+ data[13].price;//sol
    document.getElementById("lrc").innerHTML = data[14].symbol +"   "+ data[14].price;//lrc
    document.getElementById("comp").innerHTML = data[15].symbol +"   "+ data[15].price;//comp
    document.getElementById("snx").innerHTML = data[16].symbol +"   "+ data[16].price;//snx
    document.getElementById("mkr").innerHTML = data[17].symbol +"   "+ data[17].price;//mkr
    document.getElementById("dai").innerHTML = data[18].symbol +"   "+ data[18].price;//dai
    document.getElementById("mana").innerHTML = data[19].symbol +"   "+ data[19].price;//mana
    document.getElementById("yfi").innerHTML = data[20].symbol +"   "+ data[20].price;//yfi
    document.getElementById("crv").innerHTML = data[21].symbol +"   "+ data[21].price;//crv
    document.getElementById("sand").innerHTML = data[22].symbol +"   "+ data[22].price;//sand
    document.getElementById("sushi").innerHTML = data[23].symbol +"   "+ data[23].price;//sushi
    document.getElementById("uni").innerHTML = data[24].symbol +"   "+ data[24].price;//uni
    document.getElementById("aave").innerHTML = data[25].symbol +"   "+ data[25].price;//aave
    document.getElementById("axs").innerHTML = data[26].symbol +"   "+ data[26].price;//axs
    document.getElementById("grt").innerHTML = data[27].symbol +"   "+ data[27].price;//grt
    document.getElementById("shib").innerHTML = data[28].symbol +"   "+ data[28].price;//shib
    document.getElementById("qnt").innerHTML = data[29].symbol +"   "+ data[29].price;//qnt
    document.getElementById("dydx").innerHTML = data[30].symbol +"   "+ data[30].price;//dydx
    document.getElementById("gala").innerHTML = data[31].symbol +"   "+ data[31].price;//gala
    document.getElementById("ape").innerHTML = data[32].symbol +"   "+ data[32].price;//ape

    console.log(data[0].symbol)

    function createTask (){
        const cryptoAsset = document.getElementById("cryptoAsset");

        const task = document.createElement("tr");
        task.className = "task"
        cryptoAsset.appendChild(task);

        const assetName = document.createElement("td");


        
        document.getElementById("btc").onclick = function () {

            document.getElementById("assetName").innerHTML.value. data[0].symbol;
             //-uinnerText. document.querySelector("assetName"). data[0].symbol;
        //assetName.innertext = document.querySelector("#assetName").value;
        task.appendChild(assetName);
        }   

        const assetPrice = document.createElement("td");
        details.innerText = document.querySelector("#assetPrice").value;
        task.appendChild(assetPrice);

        const assetHoldings = document.createElement("td");
        assetHoldings.innerText = document.querySelector("#assetHoldings").value;
        task.appendChild(assetHoldings);

        const valueMXN = document.createElement("td");
        valueMXN.innerText = document.querySelector("#valueMXN").value;
        task.appendChild(valueMXN);
    }

    
} 

getCrypto();




//search
cryptoSearch.addEventListener("keyup", (e)=>{
    let text = e.target.value
    //console.log(text)

    let expression = new RegExp(text, "i")
    for( let i = 0; i < cryptoTable.length; i++ ) {
        let value = cryptoTable[i]
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








//showInfo = (info) => {
  
    //console.log(info)

//const eth = info.find((info) =>{
    //return info.symbol === "ETHUSDT" })

    //const btc = info.find((info) =>{
    //return info.symbol === "BTCUSDT"})

    



//console.log(eth)
//console.log(btc)

//}