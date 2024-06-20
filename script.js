console.log("huhu 1");
let hallo = document.createElement('p');
hallo.textContent = 'Hallo';
document.body.appendChild(hallo);
let hallo2 = hallo.cloneNode();
hallo2.textContent = 'Hallo2';
hallo2.style.color = 'green'; // style meist besser über class ändern
document.body.insertBefore(hallo2, hallo);

document.body.removeChild(document.getElementsByTagName('div')[0]);

console.log("huhu 2");