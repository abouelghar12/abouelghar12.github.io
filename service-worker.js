// use a cacheName for cache versioning
let cacheName = 'v1:static';

// during the install phase you usually want to cache static assets
self.addEventListener('install', function (e) {
    // once the SW is installed, go ahead and fetch the resources to make this work offline
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
                'https://abouelghar12.github.io/barcode/bnb.jpg',
                'https://abouelghar12.github.io/barcode/btc.jpg',
                'https://abouelghar12.github.io/barcode/doge.jpg',
                'https://abouelghar12.github.io/barcode/eth.jpg',
                'https://abouelghar12.github.io/barcode/usdt.jpg',
                'https://abouelghar12.github.io/icon/bitcoin.png',
                'https://abouelghar12.github.io/icon/bitcoin.png',
                'https://abouelghar12.github.io/icon/bnb.png',
                'https://abouelghar12.github.io/icon/Chat.svg',
                'https://abouelghar12.github.io/icon/doge.png',
                'https://abouelghar12.github.io/icon/ethereum.png',
                'https://abouelghar12.github.io/icon/favicon.png',
                'https://abouelghar12.github.io/icon/icon1.png',
                'https://abouelghar12.github.io/icon/icon2.png',
                'https://abouelghar12.github.io/icon/load.jpg',
                'https://abouelghar12.github.io/icon/logo.png',
                'https://abouelghar12.github.io/icon/logo1.png',
                'https://abouelghar12.github.io/icon/logo2.svg',
                'https://abouelghar12.github.io/icon/logo3.png',
                'https://abouelghar12.github.io/icon/mailbox.png',
                'https://abouelghar12.github.io/icon/mailbox.webp',
                'https://abouelghar12.github.io/icon/padlock.svg',
                'https://abouelghar12.github.io/icon/tether.png',
                'https://abouelghar12.github.io/icon/whatsapp.svg',
                'https://abouelghar12.github.io/pic/bg1.png',
                'https://abouelghar12.github.io/pic/bg2.webp',
                'https://abouelghar12.github.io/pic/ceo.png',
                'https://abouelghar12.github.io/pic/cr7.png',
                'https://abouelghar12.github.io/pic/loader.png',
                'https://abouelghar12.github.io/pic/main_bg.avif',
                'https://abouelghar12.github.io/pic/main_bg.jpg',
                'https://abouelghar12.github.io/pic/nav_bg.jpg',
                'https://abouelghar12.github.io/pic/promo.png',
                'https://abouelghar12.github.io/pic/sttings_bg.png',
                'https://abouelghar12.github.io/pic/sign_up.jpg',
                'https://abouelghar12.github.io/coin_manager.js',
                'https://abouelghar12.github.io/control.js',
                'https://abouelghar12.github.io/crypto_converter.js',
                'https://abouelghar12.github.io/currency_data.js',
                'https://abouelghar12.github.io/data.js',
                'https://abouelghar12.github.io/fiat_converter.js',
                'https://abouelghar12.github.io/jquery.3.7.0.js',
                'https://abouelghar12.github.io/login.css',
                'https://abouelghar12.github.io/login.js',
                'https://abouelghar12.github.io/style.css',
                'https://abouelghar12.github.io/sign.css',
                'https://abouelghar12.github.io/sign.js',
                'https://abouelghar12.github.io/nav_control.css',
                'https://abouelghar12.github.io/static_data.js',
                'https://abouelghar12.github.io/script.js'
            ]).then(function () {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a url
self.addEventListener('fetch', function (event) {
    // either respond with the cached object or go ahead and fetch the actual url
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});