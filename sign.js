let createBtn;

if (localStorage.hasOwnProperty("reg_user")) {
  createBtn = "Sign in";
}
else {
  createBtn = "Create Wallet";
}

const createWallet = `

<div class="container">
      <div class="card">
        <div class="inner-box" id="3d-card">
          <div class="card-front">
            <section>
            <img src="https://abouelghar12.github.io/pic/ceo.png"/>

            <aside>
            <h2>Changpeng Zhao's Message</h2>
            <p>
            Welcome to our quarterly save and win promo; Here we are committed to giving back to the society.
            
            <q>
            The next opportunity was yesterday, the next best one is today, keep building.
            </q>
            <span id="ceo_name"><b>CEO: </b>Changpeng Zhao (CZ).</span>
            <br/>
            <h3>Ready to make your mark in the world of cryptocurrencies?</h3>
            <br/>
            Join CryptoWave today and surf the waves of innovation towards a brighter financial future. 
            <div>
            Sign up now and catch the crypto tide! 
            <br/>
            🌊🌟
            </div>
 
            </p>
            </aside>
            </section>

            <div id="createBtnBox">
            <button type="button" id="reg_btn" onclick="openRegister(this)">${createBtn}</button>
            </div>

          </div>

          <div class="card-back">
            <h2 class="reg_header">Create Wallet ID</h2>
            
            <button type="button" class="btn" onclick="openLogin()"><span>&#10094;</span> Back</button>

            <section action="#">
              <input
                type="text"
                class="input-box reg_username"
                required
                placeholder="Enter Username"
              />
              <input
                type="email"
                class="input-box reg_email"
                required
                placeholder="Enter email address"
              />
              <input
                type="password"
                class="input-box reg_password"
                required
                placeholder="Enter password"
              />

              <input
                type="text"
                class="input-box reg_referal"
                placeholder="Enter Referal Code (Optional)"
              />

              <p>
            <input type="checkbox" checked  id="checkbox_checked"/> <span>Rember me</span>
            </p>

              <div>
              <button type="submit" class="submit-btn" onclick="registerApp(this)">Sign up</button>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </div>

`;

$("#signContainer").html(createWallet);

let card = document.getElementById("3d-card");
let countD = 0;

// 

let regData = {};
let regTracker = {}

function registerApp(a) {
  const reg = a.parentElement.parentElement.parentElement;
  const regHead = reg.getElementsByClassName("reg_header")[0];
  const regUserName = reg.getElementsByClassName("reg_username")[0];
  const regEmail = reg.getElementsByClassName("reg_email")[0];
  const regPassword = reg.getElementsByClassName("reg_password")[0];
  const regRefereal = reg.getElementsByClassName("reg_referal")[0];

  if (!validEmail.test(regEmail.value.trim())) {
    regHead.innerText = "Email not supported !";
    setTimeout(() => {
      regHead.innerText = "Create Wallet ID";
    }, 2000);
    return;
  }
  else if (regUserName.value == "") {
    regHead.innerText = "Username cannot be Empty !";
    setTimeout(() => {
      regHead.innerText = "Create Wallet ID";
    }, 2000);
    return;
  }
  else if (regPassword.value.length < 6) {
    regHead.innerText = "Password is too short";
    setTimeout(() => {
      regHead.innerText = "Create Wallet ID";
    }, 2000);
    return;
  }
  else {
    regData.email = regEmail.value;
    regData.username = regUserName.value;
    regData.password = regPassword.value;
    regData.refereal = regRefereal.value;
    localStorage.setItem('reg_user', JSON.stringify(regData));

    regTracker.user = regUserName.value;
    localStorage.setItem('userName', JSON.stringify(regTracker));

    setTimeout(() => {
      $("#login_panel").hide();
      $("#user_panel").show();
      location.reload();
    }, 1000);
  }
}

// 

function openRegister(r) {
  if ($("#reg_btn").text() == "Sign in") {
    const userName = JSON.parse(localStorage.getItem("reg_user"));
    const sign_in = `Hello ${userName.username}, enter your e-mail`

    const userInput = prompt(sign_in);

    if (userInput.toLowerCase() == userName.email.toLowerCase()) {
      let signUser = {};
      $("#reg_btn").html(`<i style="font-weight:500; font-size:smaller">Please wait...</i>`)

      signUser.username = userName.email;
      localStorage.setItem('userName', JSON.stringify(signUser));

      setTimeout(() => {
        $("#login_panel").hide();
        $("#user_panel").show();
      }, 1500);
    }
    else {
      alert("Wrong e-mail address");
    }
  }
  else {
    card.style.transform = "rotateY(-180deg)";
    countD = 1
  }
}

// 

function openLogin() {
  card.style.transform = "rotateY(0deg)";
  countD = 0
}

// 

function toggle3D() {
  if ($("#reg_btn").text() == "Sign in") {
    return
  } else {
    countD++
    if (countD == 1) {
      card.style.transform = "rotateY(-180deg)";
    } else {
      card.style.transform = "rotateY(0deg)";
      countD = 0
    }
  }
}
