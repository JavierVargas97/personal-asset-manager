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
        window.location.reload();
    }

}

document.getElementById("cryptoSearch"). style.display = "none";
document.querySelector(".cryptoTable").style.display = "none";
document.getElementById("holdingsHeader").style.display = "none";
document.getElementById("holdings").style.display = "none";
document.getElementById("addHoldings").style.display = "none";
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
    


        document.getElementById("btc").onclick = function (){
            console.log(data[0].symbol)
            const btcSymbol = document.createElement("tr");
            const btcPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            btcSymbol.innerHTML = data[0].symbol;
            btcPrice.innerHTML= data[0].price;

            btcPrice.toString()

            localStorage.setItem("Folder1", btcPrice + btcSymbol);
            localStorage.getItem("Folder1");

            assetName.appendChild(btcSymbol);
            assetPrice.appendChild(btcPrice);
            document.getElementById("holdingsHeader").style.display = "block";
            document.getElementById("holdings").style.display = "block";
            document.getElementById("addHoldings").style.display = "block";
            document.getElementById("cryptoSearch"). style.display = "none";//Search Bar
            document.getElementById("eth").style.display = "none"
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
            document.getElementById("ltc").style.display = "none"
            document.getElementById("btc").style.display = "none"
        }

        document.getElementById("eth").onclick = function (){
            console.log(data[1].symbol)
            const ethSymbol = document.createElement("tr");
            const ethPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            ethSymbol.innerHTML = data[1].symbol;
            ethPrice.innerHTML= data[1].price;

            assetName.appendChild(ethSymbol);
            assetPrice.appendChild(ethPrice);

            localStorage.setItem("Folder1", ethPrice + ethSymbol);
            localStorage.getItem("Folder1");

            assetName.appendChild(btcSymbol);
            assetPrice.appendChild(btcPrice);
            document.getElementById("holdingsHeader").style.display = "block";
            document.getElementById("holdings").style.display = "block";
            document.getElementById("addHoldings").style.display = "block";
            document.getElementById("cryptoSearch"). style.display = "none";//Search Bar
            document.getElementById("eth").style.display = "none"
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
            document.getElementById("ltc").style.display = "none"
            document.getElementById("btc").style.display = "none"
        }

        document.getElementById("ltc").onclick = function (){
            console.log(data[2].symbol)
            const ltcSymbol = document.createElement("tr");
            const ltcPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            ltcSymbol.innerHTML = data[2].symbol;
            ltcPrice.innerHTML= data[2].price;

            assetName.appendChild(ltcSymbol);
            assetPrice.appendChild(ltcPrice);
        }

        document.getElementById("ada").onclick = function (){
            console.log(data[3].symbol)
            const adaSymbol = document.createElement("tr");
            const adaPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            adaSymbol.innerHTML = data[3].symbol;
            adaPrice.innerHTML= data[3].price;

            assetName.appendChild(adaSymbol);
            assetPrice.appendChild(adaPrice);
        }

        document.getElementById("xrp").onclick = function (){
            console.log(data[0].symbol)
            const xrpSymbol = document.createElement("tr");
            const xrpPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            xrpSymbol.innerHTML = data[4].symbol;
            xrpPrice.innerHTML= data[4].price;

            assetName.appendChild(xrpSymbol);
            assetPrice.appendChild(xrpPrice);
        }

        document.getElementById("link").onclick = function (){
            console.log(data[5].symbol)
            const linkSymbol = document.createElement("tr");
            const linkPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            linkSymbol.innerHTML = data[5].symbol;
            linkPrice.innerHTML= data[5].price;

            assetName.appendChild(linkSymbol);
            assetPrice.appendChild(linkPrice);
        }

        document.getElementById("bat").onclick = function (){
            console.log(data[6].symbol)
            const batSymbol = document.createElement("tr");
            const batPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            batSymbol.innerHTML = data[6].symbol;
            batPrice.innerHTML= data[6].price;

            assetName.appendChild(batSymbol);
            assetPrice.appendChild(batPrice);
        }

        document.getElementById("omg").onclick = function (){
            console.log(data[7].symbol)
            const omgSymbol = document.createElement("tr");
            const omgPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            omgSymbol.innerHTML = data[7].symbol;
            omgPrice.innerHTML= data[7].price;

            assetName.appendChild(omgSymbol);
            assetPrice.appendChild(omgPrice);
        }

        document.getElementById("enj").onclick = function (){
            console.log(data[8].symbol)
            const enjSymbol = document.createElement("tr");
            const enjPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            enjSymbol.innerHTML = data[8].symbol;
            enjPrice.innerHTML= data[8].price;

            assetName.appendChild(enjSymbol);
            assetPrice.appendChild(enjPrice);
        }

        document.getElementById("matic").onclick = function (){
            console.log(data[9].symbol)
            const maticSymbol = document.createElement("tr");
            const maticPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            maticSymbol.innerHTML = data[9].symbol;
            maticPrice.innerHTML= data[9].price;

            assetName.appendChild(maticSymbol);
            assetPrice.appendChild(maticPrice);
        }

        document.getElementById("ftm").onclick = function (){
            console.log(data[10].symbol)
            const ftmSymbol = document.createElement("tr");
            const ftmPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            ftmSymbol.innerHTML = data[10].symbol;
            ftmPrice.innerHTML= data[10].price;

            assetName.appendChild(ftmSymbol);
            assetPrice.appendChild(ftmPrice);
        }

        document.getElementById("chz").onclick = function (){
            console.log(data[11].symbol)
            const chzSymbol = document.createElement("tr");
            const chzPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            chzSymbol.innerHTML = data[11].symbol;
            chzPrice.innerHTML= data[11].price;

            assetName.appendChild(chzSymbol);
            assetPrice.appendChild(chzPrice);
        }

        document.getElementById("bch").onclick = function (){
            console.log(data[12].symbol)
            const bchSymbol = document.createElement("tr");
            const bchPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            bchSymbol.innerHTML = data[12].symbol;
            bchPrice.innerHTML= data[12].price;

            assetName.appendChild(bchSymbol);
            assetPrice.appendChild(bchPrice);
        }

        document.getElementById("sol").onclick = function (){
            console.log(data[13].symbol)
            const solSymbol = document.createElement("tr");
            const solPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            solSymbol.innerHTML = data[13].symbol;
            solPrice.innerHTML= data[13].price;

            assetName.appendChild(solSymbol);
            assetPrice.appendChild(solPrice);
        }

        document.getElementById("lrc").onclick = function (){
            console.log(data[14].symbol)
            const lrcSymbol = document.createElement("tr");
            const lrcPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            lrcSymbol.innerHTML = data[14].symbol;
            lrcPrice.innerHTML= data[14].price;

            assetName.appendChild(lrcSymbol);
            assetPrice.appendChild(lrcPrice);
        }

        document.getElementById("comp").onclick = function (){
            console.log(data[15].symbol)
            const compSymbol = document.createElement("tr");
            const compPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            compSymbol.innerHTML = data[15].symbol;
            compPrice.innerHTML= data[15].price;

            assetName.appendChild(compSymbol);
            assetPrice.appendChild(compPrice);
        }

        document.getElementById("snx").onclick = function (){
            console.log(data[16].symbol)
            const snxSymbol = document.createElement("tr");
            const snxPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            snxSymbol.innerHTML = data[16].symbol;
            snxPrice.innerHTML= data[16].price;

            assetName.appendChild(snxSymbol);
            assetPrice.appendChild(snxPrice);
        }

        document.getElementById("mkr").onclick = function (){
            console.log(data[17].symbol)
            const mkrSymbol = document.createElement("tr");
            const mkrPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            mkrSymbol.innerHTML = data[17].symbol;
            mkrPrice.innerHTML= data[17].price;

            assetName.appendChild(mkrSymbol);
            assetPrice.appendChild(mkrPrice);
        }

        document.getElementById("dai").onclick = function (){
            console.log(data[18].symbol)
            const daiSymbol = document.createElement("tr");
            const daiPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            daiSymbol.innerHTML = data[18].symbol;
            daiPrice.innerHTML= data[18].price;

            assetName.appendChild(daiSymbol);
            assetPrice.appendChild(daiPrice);
        }

        document.getElementById("mana").onclick = function (){
            console.log(data[19].symbol)
            const manaSymbol = document.createElement("tr");
            const manaPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            manaSymbol.innerHTML = data[19].symbol;
            manaPrice.innerHTML= data[19].price;

            assetName.appendChild(manaSymbol);
            assetPrice.appendChild(manaPrice);
        }

        document.getElementById("yfi").onclick = function (){
            console.log(data[20].symbol)
            const yfiSymbol = document.createElement("tr");
            const yfiPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            yfiSymbol.innerHTML = data[20].symbol;
            yfiPrice.innerHTML= data[20].price;

            assetName.appendChild(yfiSymbol);
            assetPrice.appendChild(yfiPrice);
        }

        document.getElementById("crv").onclick = function (){
            console.log(data[21].symbol)
            const crvSymbol = document.createElement("tr");
            const crvPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            crvSymbol.innerHTML = data[21].symbol;
            crvPrice.innerHTML= data[21].price;

            assetName.appendChild(crvSymbol);
            assetPrice.appendChild(crvPrice);
        }

        document.getElementById("sand").onclick = function (){
            console.log(data[22].symbol)
            const sandSymbol = document.createElement("tr");
            const sandPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            sandSymbol.innerHTML = data[22].symbol;
            sandPrice.innerHTML= data[22].price;

            assetName.appendChild(sandSymbol);
            assetPrice.appendChild(sandPrice);
        }

        document.getElementById("sushi").onclick = function (){
            console.log(data[23].symbol)
            const sushiSymbol = document.createElement("tr");
            const sushiPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            sushiSymbol.innerHTML = data[23].symbol;
            sushiPrice.innerHTML= data[23].price;

            assetName.appendChild(sushiSymbol);
            assetPrice.appendChild(sushiPrice);
        }

        document.getElementById("uni").onclick = function (){
            console.log(data[24].symbol)
            const uniSymbol = document.createElement("tr");
            const uniPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            uniSymbol.innerHTML = data[24].symbol;
            uniPrice.innerHTML= data[24].price;

            assetName.appendChild(uniSymbol);
            assetPrice.appendChild(uniPrice);
        }

        document.getElementById("aave").onclick = function (){
            console.log(data[25].symbol)
            const aaveSymbol = document.createElement("tr");
            const aavePrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            aaveSymbol.innerHTML = data[25].symbol;
            aavePrice.innerHTML= data[25].price;

            assetName.appendChild(aaveSymbol);
            assetPrice.appendChild(aavePrice);
        }

        document.getElementById("axs").onclick = function (){
            console.log(data[26].symbol)
            const axsSymbol = document.createElement("tr");
            const axsPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            axsSymbol.innerHTML = data[26].symbol;
            axsPrice.innerHTML= data[26].price;

            assetName.appendChild(axsSymbol);
            assetPrice.appendChild(axsPrice);
        }

        document.getElementById("grt").onclick = function (){
            console.log(data[27].symbol)
            const grtSymbol = document.createElement("tr");
            const grtPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            grtSymbol.innerHTML = data[27].symbol;
            grtPrice.innerHTML= data[27].price;

            assetName.appendChild(grtSymbol);
            assetPrice.appendChild(grtPrice);
        }

        document.getElementById("shib").onclick = function (){
            console.log(data[28].symbol)
            const shibSymbol = document.createElement("tr");
            const shibPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            shibSymbol.innerHTML = data[28].symbol;
            shibPrice.innerHTML= data[28].price;

            assetName.appendChild(shibSymbol);
            assetPrice.appendChild(shibPrice);
        }

        document.getElementById("qnt").onclick = function (){
            console.log(data[29].symbol)
            const qntSymbol = document.createElement("tr");
            const qntPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            qntSymbol.innerHTML = data[29].symbol;
            qntPrice.innerHTML= data[29].price;

            assetName.appendChild(qntSymbol);
            assetPrice.appendChild(qntPrice);
        }

        document.getElementById("dydx").onclick = function (){
            console.log(data[30].symbol)
            const dydxSymbol = document.createElement("tr");
            const dydxPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            dydxSymbol.innerHTML = data[30].symbol;
            dydxPrice.innerHTML= data[30].price;

            assetName.appendChild(dydxSymbol);
            assetPrice.appendChild(dydxPrice);
        }

        document.getElementById("gala").onclick = function (){
            console.log(data[31].symbol)
            const galaSymbol = document.createElement("tr");
            const galaPrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            galaSymbol.innerHTML = data[31].symbol;
            galaPrice.innerHTML= data[31].price;

            assetName.appendChild(galaSymbol);
            assetPrice.appendChild(galaPrice);
        }

        document.getElementById("ape").onclick = function (){
            console.log(data[32].symbol)
            const apeSymbol = document.createElement("tr");
            const apePrice = document.createElement("tr");

            const assetName = document.getElementById("assetName");
            const assetPrice = document.getElementById("assetPrice")

            apeSymbol.innerHTML = data[32].symbol;
            apePrice.innerHTML= data[32].price;

            assetName.appendChild(apeSymbol);
            assetPrice.appendChild(apePrice);
        }

    

        //const assetPrice = document.createElement("td");
        //details.innerText = document.querySelector("#assetPrice").value;
        //task.appendChild(assetPrice);

        //const assetHoldings = document.createElement("td");
        //assetHoldings.innerText = document.querySelector("#assetHoldings").value;
        //task.appendChild(assetHoldings);

        //const valueMXN = document.createElement("td");
        //valueMXN.innerText = document.querySelector("#valueMXN").value;
        //task.appendChild(valueMXN);
    

    
} 

getCrypto();

function retrieve() {
if (localStorage.getItem("Folder1") === null) alert("No Assets have been Added");
    else {
      document.getElementById("Folder1", btcPrice + btcSymbol).innerHTML = localStorage.getItem(
        "Folder1"
      );
    }
}      

  
 





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