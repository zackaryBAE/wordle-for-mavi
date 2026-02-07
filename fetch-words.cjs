const fs = require('fs');
const https = require('https');

const url = 'https://darkermango.github.io/5-Letter-words/words.json';
const path = 'src/data/words.json';

if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data');
}

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync(path, data);
    console.log('Words downloaded to ' + path);
  });
}).on('error', (err) => {
  console.error('Error downloading words:', err);
});