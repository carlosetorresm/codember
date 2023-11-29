import fs from 'node:fs';

let response = '';
fs.readFile('challenge-02/data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('archivo inexistente');
        return;
    }
    var prev = 0;
    data.split('').forEach((word) => {
        switch (word) {
            case '#':
                return prev += 1;
            case '@':
                return prev -= 1;
            case '*':
                return prev *= prev;
            case '&':
                response += prev.toString();
        }
    });
    console.log(response);
});