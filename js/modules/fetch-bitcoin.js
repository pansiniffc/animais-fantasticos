export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

// async function fetchBitcoin(url) {
//   const responseBtc = await fetch(url);
//   const btcJSON = await responseBtc.json();
//   console.log(btcJSON);
// }

// fetchBitcoin('https://blockchain.info/ticker');
