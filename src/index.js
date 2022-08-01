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
    const arr = expr.match(/.{10}/g);
    const morseArr = arr.map(elem => elem.replace(/10/g,'.').replace(/11/g,'-').replace(/0/g,''));

    for (let i = 0; i < morseArr.length; i++) {
        if (MORSE_TABLE[morseArr[i]]) {
            morseArr[i] = MORSE_TABLE[morseArr[i]]
        } else {
            morseArr[i] = ' '
        }
    }
    return morseArr.join('');
}

module.exports = {
    decode
}