const d = new Date();
$("#bnbFooter").html(`
<a href="#user_panel">&#8679; Top</a>
<div>Binanace - &copy;${d.getFullYear()}</div>
<div></div>
`);

function selectWallet(wallet, coin, icon, addr, barcode) {
    let planz = JSON.parse(localStorage.getItem("planz"));
    let symbol;
    let percentages;

    // 

    if (planz.plan == "Bi-Flex") {
        percentages = "50%"
    }
    else if (planz.plan == "Bi-Flex Mini") {
        percentages = "75%"
    }
    else if (planz.plan == "Bi-Flex Max") {
        percentages = "100%"
    }
    else if (planz.plan == "Bi-Flex Pro") {
        percentages = "200%"
    }

    // 

    let promoCode = JSON.parse(localStorage.getItem("promoCode"));
    if (wallet == "btc") {
        coin = "Bitcoin (BTC)";
        icon = "icon/bitcoin.png";
        addr = btc_wallet;
        barcode = "barcode/btc.jpg"
    }
    else if (wallet == "bnb") {
        coin = "Binance (BNB)";
        icon = "icon/bnb.png";
        addr = bnb_wallet;
        barcode = "barcode/bnb.jpg"
    }
    else if (wallet == "eth") {
        coin = "Ethereum (ETH)";
        icon = "icon/ethereum.png";
        addr = eth_wallet;
        barcode = "barcode/eth.jpg"
    }
    else if (wallet == "usdt") {
        coin = "Tether (USDT)";
        icon = "icon/tether.png";
        addr = usdt_wallet;
        barcode = "barcode/usdt.jpg"
    }
    else if (wallet == "doge") {
        coin = "DOGECOIN (DOGE)";
        icon = "icon/doge.png";
        addr = doge_wallet;
        barcode = "barcode/doge.jpg"
    }

    for (let i = 0; i < fiat_currency.length; i++) {
        if (planz.currency == fiat_currency[i].id) {
            symbol = fiat_currency[i].symbol;
        }
    }

    const targetWallet = `
    <section>
    <button id="reset_investment_btn" onclick="resetInvestmentPanel()">Reset</button>

    <div id="wallet_selected">

    <section id="wallet_header">
    <img src="https://abouelghar12.github.io/${icon}"/>
    <span>${coin}</span>
    </section>

    <section id="wallet_approve">
        <div id="barcode_container">
        <h2>Proof of Payment</h2>
        <section class="wallet_side_note">
            <span>Copy or scan your Wallet Address and make desired payment to complete process.</span>
            <a href="#" onclick="amountToBuy(this)")>Buy &#128176;</a>
        </section>

        <section id="barcode_swift_code">
            <div>
            <img src="https://abouelghar12.github.io/${barcode}" alt="${coin}"/>
            <input type="hidden" value="${addr}" id="coin_addr" class="copy_addr"/>
            <button onclick="copyCoinAddress(this)">Copy Address</button>
            </div>

            <div>
            <h4>Transaction ID:</h4>
            <span>
            <input class="confirm_transactions" type="text" placeholder="Enter Transaction ID"/>
            <button onclick="submitTransaction(this)">Submit</button>
            </span>
            </div>
        </section>
    </div>

    <div id="wallet_balance">
        <h2>Investment Portfolio</h2>
        <section class="wallet_side_note">
        <span>This transaction is pending, account will not be credited unless verified.</span>
        </section>

        <section>
        <p><b>Promo ID: </b> <span>${promoCode.code}</span></p>
        <p><b>Plan: </b> <span>${planz.plan}</span></p>
        <p><b>Investment: </b> <span>${symbol}${planz.amount}</span></p>
        <p><b>Cryptocurrency: </b> <span>${planz.coin.toUpperCase()}</span></p>
        <p><b>ROI: </b> <span>+${planz.times} on T.A.B </span></p>
        </section>
    </div>

    </section>

    </div>

    </section>
    `;

    $("#wallet_table").hide();
    $("#bnbMainContainer").html(targetWallet)
}


