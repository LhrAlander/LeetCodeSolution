let ts = [[1,4,5],[1,3,4],[2,6]]
let res = ts.reduce((nows, array) => nows.concat(array).sort((a, b) => a - b), [])
console.log(res)