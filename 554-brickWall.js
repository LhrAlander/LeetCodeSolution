/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  wall = wall.map(row => {
    row = row.reduce((borders, brickWidth) => {
      let length = borders.length
      if (!length) {
        borders.push(brickWidth)
      } else {
        borders.push(brickWidth + borders[length - 1])
      }
      return borders
    }, [])
    return row
  })
  let rightBorder = wall[0][wall[0].length - 1]
  const borders = Array.from(new Set([].concat(...wall).sort((a, b) => a - b)))
  let ans = wall.length
  borders.forEach(border => {
    if (rightBorder !== border) {
      let tmp = 0
      wall.forEach(row => {
        if (!row.includes(border)) tmp++
      })
      if (ans >= tmp) ans = tmp 
    }
  })
  return ans
};

const wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]

leastBricks(wall)