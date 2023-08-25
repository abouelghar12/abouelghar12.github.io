if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("https://abouelghar12.github.io/service-worker.js").then(registration => {
        console.log("SW Registered!");
    }).catch(error => {
        console.log("SW Registration Failed");
    });
} else {
    console.log("Not supported");
}

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    $("#installBtn").text("Install").show();
    deferredPrompt = e;
});

function installNow() {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
    }
}
