module.exports = function reverse(n) {
    let str = "";
    n < 0 ? str = "" + n * -1 : str = "" + n;
    return str.split("").reverse().join("");
}
