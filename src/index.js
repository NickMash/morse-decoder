const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    let array = expr.split('');
    let letters = chunk(array, 10);
    let morseArray = [];

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].includes('*')){
            morseArray.push(' ');

        }
        let morseSymbols = chunk(letters[i], 2);
        for (let j = 0; j < morseSymbols.length; j++){
            if (morseSymbols[j].join('') === "10") {
                morseArray.push('.');
            }
            if (morseSymbols[j].join('') === "11") {
                morseArray.push('-');
            }
        }
        morseArray.push(' ')
    }
    let sss = morseArray.join('');
    return decodeMorse(sss);
}


function chunk(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}

function decodeMorse(decode){
    let words = decode.split('  ');
    let letters = words.map((w) => w.split(' '));
    let decoded = [];

    for(let i = 0; i < letters.length; i++){
        decoded[i] = [];
        for(let x = 0; x < letters[i].length; x++){
            if(MORSE_TABLE[letters[i][x]]){
                decoded[i].push( MORSE_TABLE[letters[i][x]] );
            }
        }
    }
    return decoded.map(arr => arr.join('')).join(' ');
}

    module.exports = {
        decode
    }