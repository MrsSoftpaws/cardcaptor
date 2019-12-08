window.onload = function () {
    'use strict';

    setTimeout(function () {
        let username = prompt("What is your name?");
        alert(`Welcome to CardCaptor, ${username}!`);
        document.querySelector("h5").textContent = username;
    }, 2000);

};