
function shuffle(answars){
    // return an array with correct answare in first index
    // then shuffle the answares and stack them after the correct one
    let output=[];
    let choicesNumbers = answars.length;
    output.push(answars[0]);
    for(let i = 0; i < choicesNumbers; i++){
        x = Math.floor(Math.random() * answars.length)
        output.push(answars[x])
        answars.splice(x,1)
    }
    return output
}

function revision(correctAnswars, ansawrs) {
    let correction = [];
    for (let i = 0; i < ansawrs.length; i++) {
        correction.push(correctAnswars[i] === ansawrs[i]);
    }
    return correction
}
function results(correction){
    let x = correction.filter(Boolean).length;
    let y = correction.length;
    return x/y  
} 