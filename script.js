const url = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=religious,political&type=twopart";
const button = document.getElementById('new-joke');

var setup = document.getElementById('jokes-text-1');
var delivery = document.getElementById('jokes-text-2');

button.addEventListener('click', () => {
    fetch(url).then(res => res.json())
    .then(data => {
        setup.innerHTML = data.setup;
        delivery.innerHTML = data.delivery;
    })
    .catch(e => {
        setup.innerHTML = e;
        delivery.innerHTML = "TRY AGAIN LATER 🥲";
    });
});