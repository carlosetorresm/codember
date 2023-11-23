import fs from 'node:fs';
import readLine from 'node:readline';

var failedPasswords = [];
const readStream = fs.createReadStream('challenge-03/data.txt');
const rl = readLine.createInterface({ input: readStream, crlfDelay: Infinity });

rl.on('line', (row) => {
    const info = row.split(' ');
    const range = info[0].split('-');
    const searchVal = info[1].slice(0, -1);
    const password = info[2];

    const regexString = searchVal + '{' + range[0] + ',' + range[1] + '}';
    if (!RegExp(regexString).test(password)) {
        failedPasswords.push(password);
    }
});
rl.on('close', () => {
    console.log(failedPasswords[41]);
});