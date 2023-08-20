$("#currency_form").on("submit", function (e) {
      e.preventDefault();
})

const convert = document.getElementById("convert");
const result = document.getElementById("exchangeResult");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
convert.addEventListener("click", function () {
      let fromCurrency = from.value;
      let toCurrency = to.value;
      let amt = amount.value;

      if (fromCurrency == "" || toCurrency == "" || amt == "") {
            return;
      }

      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(response => {
                  return response.json();
            })
            .then(data => {

                  let rate = data.rates[toCurrency];
                  let total = rate * amt;
                  result.innerHTML = `
                  <b>Result: </b> <span> ${total.toFixed(2)} (${toCurrency})</span>
            `;
            });
});