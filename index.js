for (let i = 1; i <= 100; i++) {
    var modifiers = new Array();
    if (i % 3 == 0) {
        modifiers.push("Fizz");
    }
    if (i % 5 == 0) {
        modifiers.push("Buzz");
    }
    if (i % 7 == 0) {
        modifiers.push("Bang");
    }
    if (modifiers.length == 0) {
        console.log(i);
    } else {
        console.log(modifiers.join(deliminator=""));
    }
}