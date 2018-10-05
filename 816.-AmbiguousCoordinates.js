/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function (S) {
  let source = S.slice(1, S.length - 1).split('').map(d => parseInt(d))
  let res = []
  for (let end = source.length - 2; end >= 0; end--) {
    const left = source.slice(0, end + 1)
    const right = source.slice(end + 1, source.length)
    const leftArr = toStringArr(left)
    const rightArr = toStringArr(right)
    leftArr.forEach(l => {
      rightArr.forEach(r => {
        res.push(`(${l}, ${r})`)
      })
    })
  }
  return res
  // console.log(res)
};

const toStringArr = source => {
  if (source.length === 0) return []
  if (source.length === 1) return [source[0].toString()]
  if (!source[0] && !source[source.length - 1]) return []
  if (!source[0]) return [`0.${source.slice(1, source.length).join('')}`]
  if (!source[source.length - 1]) return [source.join('')]
  const res = []
  for (let point = 0, length = source.length; point < length; point++) {
    const left = source.slice(0, point + 1)
    const right = source.slice(point + 1, length)
    res.push(right.length ? `${left.join('')}.${right.join('')}` : left.join(''))
  }
  return res
}

let s = '(100)'
ambiguousCoordinates(s)

/**
 * 字符串拼接，数组的分割，其他做法较为复杂，其实这题简单来做最直接
 */