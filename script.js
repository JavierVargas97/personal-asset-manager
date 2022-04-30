// Global Variables
const modal = document.querySelector("#mymodal");
const assetBtn = document.querySelector("#assetbtn");
const span = document.querySelector('#close');
const selectAssetLabel = document.querySelector('#select-asset-label');

const step1 = document.querySelector('#step-1');
const step2 = document.querySelector('#step-2');
const step3 = document.querySelector('#step-3');

const cryptoBtn = document.querySelector("#cryptobtn");
const cryptoSearch = document.querySelector("#cryptoSearch");
const cryptoRows = document.querySelector('#cryptoRows');
const cryptoTableBody = document.querySelector('#cryptoTableBody');

const holdings = document.querySelector('#holdings');
const addHoldingsBtn = document.querySelector('#addHoldings');
const assetValueElement = document.querySelector('#assetValue');

let trElement;
let tdAssetNameElement;
let tdAssetPriceElement;
let tdAssetHoldingsElement;
let tdValueLCElement;
let currentFX;
let valueLC;
let portfolioValue = 0;

let category;
let symbol;
let price;
let priceText;
let assets = {};
let asset;


// btnSelection Event Listener
const btnSelection = (event) => {
    selectAssetLabel.style.cssText = 'display:none;'
    category = event.target.attributes[0].value;
    symbol = event.target.attributes[1].value;
    price = event.target.attributes[2].value;
    console.log(event)
    priceText = `$${Number(price).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    step2.style.cssText = 'display:none';
    step3.style.cssText= 'display:block';

    trElement = document.createElement('tr');
    tdAssetNameElement = document.createElement('td');
    tdAssetNameElement.classList.add ("p-2.5", "lg:text-3xl", "md:text-3x1", "sm:text-2x1");
    tdAssetPriceElement = document.createElement('td');
    tdAssetPriceElement.classList.add ("p-2.5", "lg:text-3xl", "md:text-3x1", "sm:text-2x1");
    tdAssetHoldingsElement = document.createElement('td');
    tdAssetHoldingsElement.classList.add ("p-2.5", "lg:text-3xl", "md:text-3x1", "sm:text-2x1");
    tdValueLCElement = document.createElement('td');
    tdValueLCElement.classList.add ("p-2.5", "lg:text-3xl", "md:text-3x1", "sm:text-2x1");

    tdAssetNameElement.innerHTML = symbol;
    tdAssetPriceElement.innerHTML = priceText;
};

// submitSelection Event Listener
const submitSelection = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // currentFX = 20; // CAMBIAR CUANDO SE TENGA EL API
    valueLC = (price * Number(holdings.value)) * currentFX;
    tdAssetHoldingsElement.innerHTML = Number(holdings.value).toFixed(8);
    tdValueLCElement.innerHTML = `$${((price * Number(holdings.value)) * currentFX).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    trElement.append(tdAssetNameElement);
    trElement.append(tdAssetPriceElement);
    trElement.append(tdAssetHoldingsElement);
    trElement.append(tdValueLCElement);
    cryptoTableBody.append(trElement);

    portfolioValue += valueLC;
    
    assetValueElement.innerHTML = `$${Number(portfolioValue).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    
    // Return to Crypto Selection
    step2.style.cssText = 'display:block;'
    step3.style.cssText = 'display:none;'

    // Add to localStorage
    if (!JSON.parse(localStorage.getItem('assets'))) {
        assets = {
            'name': category,
            'children': [
                {
                    'name': symbol,
                    'price': priceText,
                    'holdings': Number(holdings.value).toFixed(8),
                    'value': valueLC
                }
            ]
        }
        localStorage.setItem('assets', JSON.stringify(assets));
    } else {
        assets = JSON.parse(localStorage.getItem('assets'))
        asset = {
            'name': symbol,
            'price': priceText,
            'holdings': Number(holdings.value).toFixed(8),
            'value': valueLC
        }
        assets.children.push(asset);
        console.log(asset)
        console.log(assets)
        localStorage.setItem('assets', JSON.stringify(assets));
    }
    render(JSON.parse(localStorage.getItem('assets')));
};


// pageRefresh Function runs on every refresh, retreiving data from localStorage
const pageRefresh = () => {
    if (!JSON.parse(localStorage.getItem('assets'))) {
        return;
    } else {
        assets = JSON.parse(localStorage.getItem('assets'))
        assets.children.forEach(element => {
            console.log(element)

            trElement = document.createElement('tr');
            tdAssetNameElement = document.createElement('td');
            tdAssetPriceElement = document.createElement('td');
            tdAssetHoldingsElement = document.createElement('td');
            tdValueLCElement = document.createElement('td');
            
            tdAssetNameElement.innerHTML = element.name;
            tdAssetPriceElement.innerHTML = element.price;
            tdAssetHoldingsElement.innerHTML = element.holdings;
            tdValueLCElement.innerHTML = `$${element.value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            
            trElement.append(tdAssetNameElement);
            trElement.append(tdAssetPriceElement);
            trElement.append(tdAssetHoldingsElement);
            trElement.append(tdValueLCElement);
            cryptoTableBody.append(trElement);

            portfolioValue += element.value;
            assetValueElement.innerHTML = `$${Number(portfolioValue).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        })
        render(JSON.parse(localStorage.getItem('assets')));   
    }
}



const fiatAPI = "https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=mxn"
const api_url = "https://api.binance.com/api/v3/ticker/price?symbols=[%22ETHUSDT%22,%22BTCUSDT%22,%22XRPUSDT%22,%22DAIUSDT%22,%22LTCUSDT%22,%22BCHUSDT%22,%22AAVEUSDT%22,%22ADAUSDT%22,%22APEUSDT%22,%22AXSUSDT%22,%22BATUSDT%22,%22CHZUSDT%22,%22COMPUSDT%22,%22CRVUSDT%22,%22DYDXUSDT%22,%22ENJUSDT%22,%22FTMUSDT%22,%22GALAUSDT%22,%22GRTUSDT%22,%22LINKUSDT%22,%22LRCUSDT%22,%22MANAUSDT%22,%22MATICUSDT%22,%22MKRUSDT%22,%22OMGUSDT%22,%22QNTUSDT%22,%22SANDUSDT%22,%22SHIBUSDT%22,%22SNXUSDT%22,%22SOLUSDT%22,%22SUSHIUSDT%22,%22UNIUSDT%22,%22YFIUSDT%22]";

const getCrypto = async () => {
    step1.style.cssText = 'display:none;'
    step2.style.cssText = 'display:block;'
    const response = await fetch(api_url);
    const data = await response.json();

    data.forEach(item => {
        let cryptoBtnIndividual = document.createElement('button')
        let cryptoSymbolRaw = item.symbol;
        let cryptoSymbol = cryptoSymbolRaw.replace('USDT', '')
        let cryptoPriceRaw = item.price;
        let cryptoPrice = Number(cryptoPriceRaw).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        cryptoBtnIndividual.setAttribute('data-category', 'Crypto')
        cryptoBtnIndividual.setAttribute('data-symbol', cryptoSymbol)
        cryptoBtnIndividual.setAttribute('data-price', cryptoPriceRaw)
        cryptoBtnIndividual.classList.add("px-4", "py-1", "shrink", "text-center", "mx-auto", "flex", "justify-center", "block", "text-lg", "text-neutral-900", "rounded-full", "border", "border-amber-400", "hover:text-white", "hover:bg-amber-400", "hover:border-transparent", "focus:outline-none", "focus:ring-2", "focus:ring-purple-600", "focus:ring-offset-2");
        cryptoBtnIndividual.innerHTML = `${cryptoSymbol}: $${cryptoPrice}`
        cryptoBtnIndividual.addEventListener('click', btnSelection)
        step2.append(cryptoBtnIndividual)
    })

    // Calls getFOREX Async Function
    getFOREX();
} 

const getFOREX = async () => {
    const response = await fetch(fiatAPI);
    const data = await response.json();
    console.log(data)
    currentFX = data['usd-coin'].mxn;
};

  

  
 





// //search
// cryptoSearch.addEventListener("keyup", (event)=>{
//     let text = event.target.value
//     console.log(text)

//     let expression = new RegExp(text, "i")
//     console.log(expression)
//     for( let i = 0; i < cryptoTable.length; i++ ) {
//         let value = cryptoTable[i]
//         //console.log(value)
//         if(expression.test (value.innerText)){
//             value.classList.remove ("hide")

//         } 
        
//         else {
//             console.log(value)
//             value.classList.add("hide")

//         }
//     }

// })

// Event Listeners
// Add Event Listener to Window Object - Closes Modal on Click
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        // window.location.reload();
    }
});

// Add Event Listener to "X" Span on Modal
span.addEventListener('click', () => {
    modal.style.display = 'none';
})

// Add Event Listener to assetBtn
assetBtn.addEventListener('click', () => {
    modal.style.display = "block";
    step1.style.cssText = 'display:block;'
    step2.style.cssText = 'display:none;'
    step3.style.cssText = 'display:none;'
});

// Add Event Listener to cryptoBtn
cryptoBtn.addEventListener('click', getCrypto);

// Add Event Listener to addHoldingsBtn
addHoldingsBtn.addEventListener('click', submitSelection);

pageRefresh();