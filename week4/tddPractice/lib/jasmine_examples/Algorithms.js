function suma(a, b) {
    return a + b;
}

function secondGreater(arr) {
    let newArr = [];
    if(arr.length >= 2) {
        newArr = arr.sort(function(a,b) {
            return a - b;
        });
        return newArr[newArr.length - 2];        
    } else {
        return null;
    }
}

function resta(a,b) {
    return a - b;
}

module.exports = {
    suma,
    secondGreater
}