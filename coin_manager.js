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
            "USD": "$26,185.04",
            "EUR": "€24,039.31",
            "AUD": "$41,039.86",
            "JPY": "¥3,805,843.55",
            "CAD": "$35,511.27",
            "GBP": "£20,555.42",
            "BOB": "$180,442.21",
            "PLN": "ł107,414.37",
            "THB": "฿921,779.59",
            "BDT": "T2,858,727.08",
            "BRL": "$130,167.85",
            "CHF": "C23,099.97",
            "CZK": "č578,570.52",
            "DKK": "K179,499.85",
            "GTQ": "Q205,061.45",
            "ILS": "₪99,190.82",
            "KES": "S3,728,810.30",
            "NZD": "$44,235.65",
            "RSD": "Д2,820,378.04",
            "SEK": "k287,237.73",
            "ZAR": "R499,379.75"
        },
        "icon": "icon/bitcoin.png"
    },
    {
        "id": "ETH",
        "rate": {
            "USD": "$1,681.29",
            "EUR": "€1,543.94",
            "AUD": "$2,636.42",
            "JPY": "¥244,438.25",
            "CAD": "$2,280.99",
            "GBP": "£1,319.55",
            "BOB": "$11,579.77",
            "PLN": "ł6,891.68",
            "THB": "฿59,139.02",
            "BDT": "T183,411.60",
            "BRL": "$8,352.14",
            "CHF": "C1,481.98",
            "CZK": "č37,119.18",
            "DKK": "K11,515.12",
            "GTQ": "Q13,154.82",
            "ILS": "₪6,362.17",
            "KES": "S239,167.14",
            "NZD": "$2,837.12",
            "RSD": "Д180,877.45",
            "SEK": "k18,421.15",
            "ZAR": "R32,024.19"
        },
        "icon": "icon/ethereum.png"
    },
    {
        "id": "USDT",
        "rate": {
            "USD": "$1.00",
            "EUR": "€0.92",
            "AUD": "$1.57",
            "JPY": "¥145.68",
            "CAD": "$1.36",
            "GBP": "£0.79",
            "BOB": "$6.90",
            "PLN": "ł4.11",
            "THB": "฿35.26",
            "BDT": "T109.37",
            "BRL": "$4.98",
            "CHF": "C0.88",
            "CZK": "č22.13",
            "DKK": "K6.87",
            "GTQ": "Q7.84",
            "ILS": "₪3.79",
            "KES": "S142.61",
            "NZD": "$1.69",
            "RSD": "Д107.86",
            "SEK": "k10.98",
            "ZAR": "R19.10"
        },
        "icon": "icon/tether.png"
    },
    {
        "id": "BNB",
        "rate": {
            "USD": "$217.34",
            "EUR": "€199.59",
            "AUD": "$340.83",
            "JPY": "¥31,605.95",
            "CAD": "$294.83",
            "GBP": "£170.64",
            "BOB": "$1,498.03",
            "PLN": "ł891.65",
            "THB": "฿7,651.54",
            "BDT": "T7,651.54",
            "BRL": "$1,080.55",
            "CHF": "C191.82",
            "CZK": "č4,804.39",
            "DKK": "K1,490.46",
            "GTQ": "Q1,702.66",
            "ILS": "₪823.51",
            "KES": "S30,958.18",
            "NZD": "$367.22",
            "RSD": "Д23,413.24",
            "SEK": "k2,384.70",
            "ZAR": "R4,145.99"
        },
        "icon": "icon/bnb.png"
    },
    {
        "id": "DOGE",
        "rate": {
            "USD": "$0.06",
            "EUR": "€0.06",
            "AUD": "$0.10",
            "JPY": "¥9.30",
            "CAD": "$0.09",
            "GBP": "£0.05",
            "BOB": "$0.44",
            "PLN": "ł0.26",
            "THB": "฿2.25",
            "BDT": "T6.99",
            "BRL": "$0.32",
            "CHF": "C0.06",
            "CZK": "č1.41",
            "DKK": "K0.44",
            "GTQ": "Q0.50",
            "ILS": "₪0.24",
            "KES": "S9.12",
            "NZD": "$0.11",
            "RSD": "Д6.89",
            "SEK": "k0.70",
            "ZAR": "R1.22"
        },
        "icon": "icon/doge.png"
    }
];

let promoBonus = 1000;

if (localStorage.hasOwnProperty("appToken")) {
    let assignToken = JSON.parse(localStorage.getItem("appToken"));
    promoBonus = assignToken.reward
}

let initialDeposit = `$0`;

if (localStorage.hasOwnProperty("planz")) {
    let deposit = JSON.parse(localStorage.getItem("planz"));
    if (localStorage.hasOwnProperty("cash")) {
        initialDeposit = `${deposit.amount}(${deposit.currency})`;
    }
}

let walletBalance = 0;

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
let cashInTimer = "";
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
            cashInTimer = `<b style="color:red">${payOutStatus}</b> remaining`;
        }

        else if (timeSpent <= 0) {
            payOutStatus = "Approved";
            cashInTimer = `<b style="color: green">${payOutStatus}</b> remaining`;
        }
        else {
            payOutStatus = "In Progress";
            cashInTimer = `<b style="color: blue">${payOutStatus}</b> remaining`;
            if (months < 1) {
                cashInTimer = `${days} day(s)`;
            }
            else {
                cashInTimer = `${months} month(s) and ${days} day(s) remaining`
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
        cashInTimer = `No Active Plan`;
    }
}



setTimeout(() => {
    updateCash();
}, 2000);

