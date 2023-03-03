const axios = require('axios');
const fs = require('fs');

const url = 'https://api.openai.com/v1/engine/<engine-id>/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <api-key>',
};

const prompt = 'Hello, ChatGPT!';

const data = {
  'prompt': prompt,
  'temperature': 0.7,
  'max_tokens': 60,
};

axios.post(url, data, {headers: headers})
  .then(function (response) {
    console.log(response.data.choices[0].text);
  })
  .catch(function (error) {
    console.log(error);
  });

const file = fs.createReadStream('./example.txt');
const formData = new FormData();
formData.append('file', file);

axios.post('https://api.openai.com/v1/files/upload', formData, {headers: headers})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

