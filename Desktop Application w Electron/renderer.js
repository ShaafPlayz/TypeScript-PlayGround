"use strict";
window.addEventListener('DOMContentLoaded', function () {
    var output = document.getElementById('count');
    setInterval(function () {
        var date = new Date().toLocaleTimeString();
        output.textContent = date;
    }, 1000);
});
