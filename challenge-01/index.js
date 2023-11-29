import fs from 'node:fs';

const map = {};
let response = '';
fs.readFile('challenge-01/data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('archivo inexistente');
        return;
    }
    data.split(' ').forEach((word) => {
        map[word] != null ? map[word] += 1 : map[word] = 1;
    });
    response = Object.keys(map).reduce((prev, key) => {
        return prev + key + map[key];
    }, '');
    console.log(response);
});