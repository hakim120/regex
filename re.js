function hadSpaces(str) {
    let patt = /\s/
    if (patt.test(str)) {
        return true
    } else
        return false
}
console.log(hadSpaces("hello world"))
function countVowels(str) {
    let patt = /['a', 'e', 'i', 'o', 'u', 'y']/gi
    return str.match(patt).length

}
function countVowels(str) {
    let patt = /['a', 'e', 'i', 'o', 'u', 'y']/gi
    return str.match(patt).length

}
console.log(countVowels('sdndUdbncy'))
function replaceVowels(str, c) {
    let patt = /['a', 'e', 'i', 'o', 'u', 'y']/gi
    return str.replace(patt, c)
}
console.log(replaceVowels('hakimhizi', '?'))
