
for (let i = 1; i <= 100; i++) {
    console.log(evaluateNumber(i));
}

function evaluateNumber(i) {
    let modifiers = [];
    if (i % 3 == 0) {
        modifiers.push("Fizz");
    }
    if (i % 5 == 0) {
        modifiers.push("Buzz");
    }
    if (i % 7 == 0) {
        modifiers.push("Bang");
    }
    if (i % 11 == 0) {
        modifiers = ["Bong"];
    }
    if (i % 13 == 0) {
        modifiers = insertFezz(modifiers);
    }
    if (i % 17 == 0) {
        modifiers.reverse();
    }
    if (modifiers.length == 0) {
        return i;
    } else {
        return modifiers.join(deliminator="");
    }
}

function insertFezz(modifiers) {
    for (let i = 0;; i++ ) {
        if (i >= modifiers.length || modifiers[i][0] == "B") {
            modifiers.splice(i, 0, "Fezz");
            return modifiers;
        }
    }
}