//dichiaro le mie costanti
const userName = prompt('Inserisci il tuo nome:');
const userSurname = prompt('Inserisci il tuo cognome:');
const userColor = prompt('Inserisci il tuo colore preferito:');

//utilities for debug
console.log(userName, userSurname, userColor);

//stampo in html le stringhe acquisite
document.getElementById('result').innerHTML += `
${userName}${userSurname}${userColor}22
`;

