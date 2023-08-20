// major trading currency
const fiat_currency = [
    { "id": "USD", "rate": 1.00, "symbol": "$" },
    { "id": "AUD", "rate": 1.56, "symbol": "A$" },
    { "id": "EUR", "rate": 0.91, "symbol": "€" },
    { "id": "JPY", "rate": 143.24, "symbol": "¥" },
    { "id": "CAD", "rate": 1.36, "symbol": "C$" },
    { "id": "GBP", "rate": 0.79, "symbol": "£" },
    { "id": "BOB", "rate": 6.94, "symbol": "Bs" },
    { "id": "PLN", "rate": 4.11, "symbol": "zł" },
    { "id": "THB", "rate": 35.37, "symbol": "฿" },
    { "id": "BDT", "rate": 109.46, "symbol": "৳" },
    { "id": "BRL", "rate": 4.98, "symbol": "R$" },
    { "id": "CHF", "rate": 0.88, "symbol": "Fr" },
    { "id": "CZK", "rate": 22.11, "symbol": "Kč" },
    { "id": "DKK", "rate": 6.86, "symbol": "kr" },
    { "id": "GTQ", "rate": 7.86, "symbol": "Q" },
    { "id": "ILS", "rate": 3.80, "symbol": "₪" },
    { "id": "KES", "rate": 144.49, "symbol": "Ksh" },
    { "id": "NZD", "rate": 1.69, "symbol": "NZ$" },
    { "id": "RSD", "rate": 107.75, "symbol": "РСД" },
    { "id": "SEK", "rate": 10.98, "symbol": "kr" },
    { "id": "ZAR", "rate": 19.02, "symbol": "R" }
];

const crypto_currency = [
    {
        "id": "BTC",
        "rate": {
            "USD": "$29,799.24",
            "EUR": "€27,133.89",
            "KRW": "₩39,132,019.29",
            "JPY": "¥4,270,851.01"
        },
        "icon": "icon/bitcoin.png"
    },
    {
        "id": "ETH",
        "rate": {
            "USD": "$1,861.76",
            "EUR": "€1,695.81",
            "KRW": "₩2,445,675.67",
            "JPY": "¥266,733.71"
        },
        "icon": "icon/ethereum.png"
    },
    {
        "id": "USDT",
        "rate": {
            "USD": "$1.00",
            "EUR": "€0.91",
            "KRW": "₩1,313.34",
            "JPY": "¥143.26"
        },
        "icon": "icon/tether.png"
    },
    {
        "id": "BNB",
        "rate": {
            "USD": "$243.88",
            "EUR": "€222.14",
            "KRW": "₩320,433.60",
            "JPY": "¥34,956.60"
        },
        "icon": "icon/bnb.png"
    },
    {
        "id": "DOGE",
        "rate": {
            "USD": "$0.07",
            "EUR": "€0.07",
            "KRW": "₩99.31",
            "JPY": "¥10.79"
        },
        "icon": "icon/doge.png"
    }
];

const promoBonus = 1000;
let nitialDeposit;

if (localStorage.hasOwnProperty("planz")) {
    let deposit = JSON.parse(localStorage.getItem("planz"));
    nitialDeposit = `${deposit.amount}(${deposit.currency})`;
}
else {
    nitialDeposit = 0;
}

let walletBalance = 100;

let promo_balance;
let userBalance;
let available_balance;

if (localStorage.hasOwnProperty("cash")) {
    let mainBalance = JSON.parse(localStorage.getItem("cash"));
    let setBalance = mainBalance.cash.slice(1).replace(/,/g, "");
    available_balance = parseInt(promoBonus) + parseInt(setBalance);
    promo_balance = available_balance;

    let setCoins = JSON.parse(localStorage.getItem("planz"));

    $("#user_payment_coin").text(setCoins.coin.toUpperCase())
    $("#user_amount_row").text(setCoins.currency + setCoins.amount)
    $("#user_payment_details").text(`Invested in ${setCoins.plan}`)

} else {
    promo_balance = 0;
    userBalance = 0;
    available_balance = promoBonus;
}

// default

setTimeout(() => {
    const defaultCurrency = fiat_currency[0].rate * promoBonus
    $("#fx_balance").text(defaultCurrency.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }));
}, 2000);

setTimeout(() => {
    const defaultCoin = crypto_currency[0].rate.USD.slice(1).replace(/,/g, "");
    const defaultFiat = fiat_currency[0].rate * promoBonus;
    const defaultWorth = defaultFiat / defaultCoin;
    $("#coin_balance").text(defaultWorth.toFixed(2));
}, 2000);

// 

function setFiatCurrency(fiat) {
    let amount;
    for (let i = 0; i < fiat_currency.length; i++) {

        if (fiat_currency[i].id == fiat.value) {
            amount = fiat_currency[i].rate * promoBonus;
            $("#fx_balance").text(fiat_currency[i].symbol + amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            }).slice(1)
            );
        }
    }
}

function setCryptoCoin(crypto) {
    let coins;
    let exchange;
    let fx;
    for (let i = 0; i < crypto_currency.length; i++) {
        if (crypto_currency[i].id == crypto.value) {
            coins = crypto_currency[i].rate.USD.slice(1).replace(/,/g, "");
            exchange = fiat_currency[0].rate * promoBonus;
            fx = exchange / coins;
            $("#coin_balance").text(fx.toFixed(2));
        }
    }
};

// 

let cash;
let cashInTimer;
let payOutStatus = "None";
function updateCash() {
    if (localStorage.hasOwnProperty("cash")) {
        let cashApp = JSON.parse(localStorage.getItem("cash"));
        cash = cashApp.cash;

        const counter = new Date(cashApp.dates);
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;

        let tempDay = new Date(counter.getTime() + cashApp.days * 24 * 60 * 60 * 1000);
        const timeSpent = tempDay - counter;

        const months = Math.floor(timeSpent / month);
        const days = Math.floor(timeSpent / day);

        if (timeSpent <= -day) {
            payOutStatus = "Re-Invest";
            cashInTimer = `<b style="color:red">${payOutStatus}</b> `;
        }

        else if (timeSpent <= 0) {
            payOutStatus = "Approved";
            cashInTimer = `<b style="color: green">${payOutStatus}</b>`;
        }
        else {
            payOutStatus = "In Progress";
            cashInTimer = `<b style="color: blue">${payOutStatus}</b>`;
            if (months < 1) {
                cashInTimer = `${days} day(s)`;
            }
            else {
                cashInTimer = `${months} month(s) and ${days} day(s)`
            }
        }

        let setPlan = JSON.parse(localStorage.getItem("planz"));
        let investPeriod;
        let currencySymbol;

        if (setPlan.plan == "Bi-Flex") {
            investPeriod = "2 Weeks"
        }
        else if (setPlan.plan == "Bi-Flex Mini") {
            investPeriod = "4 Weeks"
        }
        else if (setPlan.plan == "Bi-Flex Max") {
            investPeriod = "1 Month"
        }
        else if (setPlan.plan == "Bi-Flex Pro") {
            investPeriod = "2 Months"
        }


        for (let i = 0; i < fiat_currency.length; i++) {
            if (setPlan.currency == fiat_currency[i].id) {
                currencySymbol = fiat_currency[i].symbol

                $("#bnbMainContainer").html(`
                <section>
                <h1>Active Investment Plan</h2>
                <div id="active_investment_container">
                <section>
                <p><b>Promo ID:</b> <span>-</span> <i>${setPlan.wallet}</i></p>
                <p><b>Invest Plan:</b> <span>-</span> <i>${setPlan.plan}</i></p>
                <p><b>Invest Period:</b> <span>-</span> <i> ${investPeriod}</i></p>
                <p><b>Initial Deposit:</b> <span>-</span> <i>${currencySymbol}${setPlan.amount}</i></p>
                <p><b>Waiting Period:</b> <span>-</span> <i>${cashInTimer}</i></p>
                <p><b>ROI: </b> <span>-</span> <i>${cash}</i></p>
                <p><b>Widthdrawal Status: </b> <span>-</span>  <i>${payOutStatus}</i></p>
                </section>
                </div>
                </section>`);
            }

        }

    } else {
        cash = "$0.00";
        cashInTimer = "";
    }
}



setTimeout(() => {
    updateCash();
}, 2000);

