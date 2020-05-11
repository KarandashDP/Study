
const div = document.querySelector('div');

const req = new XMLHttpRequest();

req.open('GET', "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3");
// req.responseType = 'json';
req.onload = function () {
        div.textContent = req.response;
}

req.send();