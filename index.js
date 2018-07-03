for (let i = 1; i <= 100; i++) {
    console.log(evaluateNumber(i));
}

function evaluateNumber(i) {
    let modifiers = [];
    const rules = [{number: 3, rule: adderToModifiers("Fizz")},
                   {number: 5, rule: adderToModifiers("Buzz")},
                   {number:7, rule: adderToModifiers("Bang")},
                   {number:11, rule: processBong},
                   {number:13, rule: processFezz},
                   {number:17, rule: processReverse}];
    for(let j = 0; j < rules.length; j++) {
        let nextRule = rules[j];
        if (i % nextRule.number == 0) {
            modifiers = nextRule.rule(modifiers);
        }
    }
    if (modifiers.length == 0) {
        return i;
    } else {
        return modifiers.join(deliminator="");
    }
}

function adderToModifiers(word) {
    function addToModifiers(modifiers) {
        modifiers.push(word);
        return modifiers;
    }
    return addToModifiers;
}

function processBong(modifiers) {
    return ["Bong"];
}

function processFezz(modifiers) {
    for (let i = 0;; i++ ) {
        if (i >= modifiers.length || modifiers[i][0] == "B") {
            modifiers.splice(i, 0, "Fezz");
            return modifiers;
        }
    }
}

function processReverse(modifiers) {
    modifiers.reverse();
    return modifiers;
}