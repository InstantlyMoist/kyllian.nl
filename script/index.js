let possible = ['a Software Engineer', 'an App Developer', 'a Student', '18 years old', 'a Bot Developer', 'a Plugin Developer'];
let current = 0;
let removalLength = 0;
let flash = true;

function updateMessage() {
    let finalMessage = `I'm ${possible[current].substring(0, possible[current].length - removalLength)} ${flash ? "|" : ""}`;
    document.getElementById("description").innerHTML = finalMessage;
}

function addChar() {
    removalLength--;
    flash = true;
    updateMessage();
    if (removalLength != 0) setTimeout(() => addChar(), 100);
    else setTimeout(() => removeChar(), 2000);
}

function removeChar() {
    removalLength++;
    flash = true;
    updateMessage();
    if (removalLength >= possible[current].length) {
        current++
        if (current > possible.length - 1) current = 0;
        removalLength = possible[current].length;
        setTimeout(() => addChar(), 500);
    } else setTimeout(() => removeChar(), 100);
}

setInterval(() => {
    flash = !flash;
    updateMessage();
}, 400)

setTimeout(() => removeChar(), 2000);
     