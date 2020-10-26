/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;


/**
 * Byrja forrit.
 */
function start() {
  alert('Halló!')
}

function makeArray(n) {
  let array =[];
  for (let i=1; i<n; i++) {
    array.push(i);
  }
  return array;
}

function allowedOrNot(x, allowed) {
  let notallowed = [];
  for (let a of x) {
    if (allowed.includes(a)) {
      continue;
    }
    else {
      notallowed.push(a);
    }
  }
  let l = notallowed.length;
  if (l === 0) {
    return true;
  }
  else {
    return notallowed;
  }
}

function question1(input) {
  if (input === `kóða`) {
    let action = input;
    let n = Number(prompt(`Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]`));
    if (number.includes(n)) {
      input = prompt(`Gefðu upp strenginn sem á að ${action} með hliðrun ${n}`);
      if (input === ``) {
        confirm (`Þú gafst ekki upp streng. Reyndu aftur.`)
        input = prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`);
        question1(input);
      } else {
        input = input.toUpperCase();
        let invalid = allowedOrNot(input, LETTERS);
        if (invalid === true) {
          result = encode(input, n);
          confirm(result);
        }
        else {
          confirm(`Þú gafst upp stafi sem ekki er hægt að ${action}: ${invalid.join(', ')}. Reyndu aftur.`);
          input = prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`);
          question1(input);
        }
      }
    }
    else {
      confirm(`${n} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`)
      input= (prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`));
      question1(input);
    }
  } else if (input===`afkóða`) {
    let action = input;
    let n = Number(prompt(`Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]`));
    if (number.includes(n)) {
      input = prompt(`Gefðu upp strenginn sem á að ${action} með hliðrun ${n}`);
      if (input === ``) {
        confirm(`Þú gafst ekki upp streng. Reyndu aftur.`)
        input = prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`);
        question1(input);
      } else {
        input = input.toUpperCase();
        let invalid = allowedOrNot(input, LETTERS);
        if (invalid === true) {
          result = decode(input, n);
          confirm(result);
        }
        else {
          confirm(`Þú gafst upp stafi sem ekki er hægt að ${action}: ${invalid.join(', ')}. Reyndu aftur.`);
          input = prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`);
          question1(input);
        }
      }
    }
    else {
      confirm(`${n} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`)
      input= prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`);
      question1(input);
    }
  } else {
    confirm(`Veit ekki hvaða aðgerð „${input}“ er. Reyndu aftur.`)
    input = prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`);
    question1(input);
  }
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();
let number = makeArray(32);
let a = prompt(`Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“`);
question1(a);

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
  for (let i=0; i < str.length; i++) {
    let le = str[0];
    let j = LETTERS.indexOf(le)+n;
    if (j>31) {
      j=j-32;
    }
    str = str.slice(1);
    str = str + (LETTERS[j]);
  }
  return str;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  str = str.toLocaleUpperCase();
  for (let i=0; i < str.length; i++) {
    let le = str[0];
    let j = LETTERS.indexOf(le)-n;
    if (j<0) {
      j=j+32;
    }
    str = str.slice(1);
    str = str + (LETTERS[j]);
  }  return str;
}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
