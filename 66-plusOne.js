/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let plus = 1
    digits.reverse()
    let res = digits.map(d =>{
        d += plus
        plus = d >= 10 ? 1 : 0
        d = d >= 10 ? d - 10 : d
        return d
    })
    if (plus === 1) res.push(1)
    res = res.reverse()
    return res
};
let digits = [9]
plusOne(digits)