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
    let morse = {'00': '',
                 '10': '.',
                 '11': '-'}; 
    let size = 10;
    let str = "";
    let decoder = "";
    for (let i = 0; i < expr.length/size; i++) {
        str = expr.slice((i*size), (i*size) + size);
        if (str == "**********") {
            decoder += " ";
        } else {
            let item = "";
            let item2 = "";
            for (let j = 0; j < str.length; j += 2) {
                item2 = str.slice(j, j + 2);
                for (let key in morse){
                    if (key == item2 ) {
                        item += morse[key]
                    }
                }
            }
            decoder += MORSE_TABLE[item];
        }
      }
    return decoder;
}
      


console.log(decode('000000111100000000100000000011'))

module.exports = {
    decode
}