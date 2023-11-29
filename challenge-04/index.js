import fs from 'node:fs';
import readLine from 'node:readline';

let realFiles = [];
const readStream = fs.createReadStream('challenge-04/data.txt');
const rl = readLine.createInterface({ input: readStream, crlfDelay: Infinity });

rl.on('line', (row) => {
    const info = row.split('-');
    const chars = new Map();

    info[0].split('').forEach((e) => {
        chars.has(e) ? chars.set(e, chars.get(e) + 1) : chars.set(e, 1);
    });

    let validation = '';
    for (let [key, value] of chars) {
        validation += value == 1 ? key : '';
    }
    if (validation == info[1]) realFiles.push(info[1]);


});
rl.on('close', () => {
    console.log(realFiles[32]);
});