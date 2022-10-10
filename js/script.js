const userName = prompt('Inserisci il tuo nome:');
const userSurname = prompt('Inserisci il tuo cognome:');
const userColor = prompt('Inserisci il tuo colore preferito:');

console.log(userName, userSurname, userColor);

document.getElementById('result').innerHTML += `
${userName}${userSurname}${userColor}22
`;

