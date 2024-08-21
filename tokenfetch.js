const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=layer-1&order=market_cap_desc&per_page=20&page=1&price_change_percentage=24h&precision=4&x_cg_api_key=CG-TQyqBTuwxVzxaWkUoSx9UFKr';
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log();
    
    // Saving the received data in a JSON file
    fs.writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Data saved to data.json');
      }
    });
  })
  .catch(err => console.error('error:' + err));