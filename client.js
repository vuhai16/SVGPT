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

const audio = fs.createReadStream('./example.mp3');
const audioConfig = {
  encoding: 'MP3',
  sample_rate_hertz: 48000,
  language_code: 'en-US',
};

axios.post('https://api.openai.com/v1/speech/generate', audio, {headers: headers, params: audioConfig})
  .then(function (response) {
    console.log(response.data.audio_content);
  })
  .catch(function (error) {
    console.log(error);
  });

const image = fs.createReadStream('./example.jpg');
const imageConfig = {
  model: 'image-alpha-001',
  prompt: 'Create an artwork of a cat with a cityscape in the background.',
};

axios.post('https://api.openai.com/v1/images/generations', image, {headers: headers, params: imageConfig})
  .then(function (response) {
    console.log(response.data.data[0].url);
  })
  .catch(function (error) {
    console.log(error);
  });
