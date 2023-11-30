import fs from 'node:fs';
import readLine from 'node:readline';

/**
 * @param {String} data 
 * @returns {bool}
 */
function isAlphanumeric(data) { return RegExp(/^[^_\W]+$/).test(data); }

/**
 * @param {String} data 
 * @returns {bool}
 */
function isEmail(data) { return RegExp(/^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/).test(data); }

/**
 * @param {String} data 
 * @returns {bool}
 */
function isInt(data) { return data == '' || RegExp(/^[0-9]+$/).test(data); }

/**
 * @param {String} data 
 * @returns {bool}
 */
function isWord(data) { return data == '' || RegExp(/^[A-Z a-z]*$/).test(data); }


/**
 * @param {Array<String>} data 
 * @returns {bool}
 */
function validateCSV(data) {
    if (data.length < 5) return false;
    if (!isAlphanumeric(data[0])) return false;
    if (!isAlphanumeric(data[1])) return false;
    if (!isEmail(data[2])) return false;
    if (!isInt(data[3])) return false;
    if (!isWord(data[4])) return false;
    return true;
}


let validUsernames = [];
const readStream = fs.createReadStream('challenge-05/data.txt');
const rl = readLine.createInterface({ input: readStream, crlfDelay: Infinity });

rl.on('line', (row) => {
    const data = row.split(',');
    if (!validateCSV(data)) validUsernames.push(data[1].charAt(0));
});

rl.on('close', () => {
    console.log(validUsernames.join(''));
});