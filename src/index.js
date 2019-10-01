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

  function decodeLetter(str) {
    let res = '';
    let pointer = str.indexOf('1');
    
    if (pointer === -1) return ' '; 

    for (let i=pointer; i<str.length-1; i += 2) {
      res += (str.substr(i, 2) === '10' ? '.' : '-');
    }
    
    return MORSE_TABLE[res];
  }


  let output = '';

  for (let j=0; j<expr.length-1; j += 10) {
    output += decodeLetter(expr.substr(j, 10));
  }

  return output;
}

module.exports = {
    decode
}