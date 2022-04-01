'use strict'

let strings = document.querySelectorAll('p');
// strings.forEach (item => {
//     item.innerText.replace(/\s'/g, ' "');
//     item.innerText.replace(/'$/g, '" ');
//     console.log(item)
// })

for (let item of strings) {
    console.log ( item.textContent.replace(/\B'|'\B/g, '"'));
}