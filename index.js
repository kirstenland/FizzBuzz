for (let i = 1; i <= 100; i++) {
    console.log(evaluateNumber(i));
}

function evaluateNumber(i) {
    let words = [];
    const rules = [{number: 3, rule: (words) => addToWords("Fizz", words)},
                   {number: 5, rule: (words) => addToWords("Buzz", words)},
                   {number:7, rule: (words) => addToWords("Bang", words)},
                   {number:11, rule: processBong},
                   {number:13, rule: processFezz},
                   {number:17, rule: processReverse}];
    for(let j = 0; j < rules.length; j++) {
        let nextRule = rules[j];
        if (i % nextRule.number == 0) {
            words = nextRule.rule(words);
        }
    }
    if (words.length == 0) {
        return i;
    } else {
        return words.join(deliminator="");
    }
}

function addToWords(word, words) {
    words.push(word);
    return words;
}

function processBong(words) {
    return ["Bong"];
}

function processFezz(words) {
    for (let i = 0;; i++ ) {
        if (i >= words.length || words[i][0] == "B") {
            words.splice(i, 0, "Fezz");
            return words;
        }
    }
}

function processReverse(words) {
    words.reverse();
    return words;
}