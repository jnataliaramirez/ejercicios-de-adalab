'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];


const sayHi = users.filter(
    users => users.isPremium === true);

console.log(sayHi)

