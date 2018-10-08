/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  let res = 0
  words.forEach(w => {
    if (isValid(S, w)) res++
  })
  console.log(res)
  return res
};

var isValid = (resource, target) => {
  const tLen = target.length
  let last = -1
  let j = 0
  let flag = true
  while (j < tLen && j >= 0) {
    let tCh = target[j]
    j++
    let index = resource.indexOf(tCh, last + 1)
    if (index === -1) {
      flag = false
      break
    }
    last = index
  }
  return flag
}

const s = 'abcde'
const words = ['a', 'bb', 'acd', 'ace']
numMatchingSubseq(s, words)
