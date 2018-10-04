/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  function findClosestDis(heaters, house) {
    var start = 0, end = heaters.length - 1
    while (start <= end) {
        var mid = Math.floor((start + end) / 2)
        var _pos = heaters[mid]
        
        if (_pos === house) {
            return 0
        } else if (_pos > house) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    var leftDis = end >= 0 ? house - heaters[end] : Number.MAX_VALUE
    var rightDis = start < heaters.length ? heaters[start] - house: Number.MAX_VALUE
    var min = Math.min(leftDis, rightDis)
    return min
  }
  heaters.sort((a, b) => a - b)
  return houses.reduce((maxDis, house) => Math.max(maxDis, findClosestDis(heaters, house)), -Number.MAX_VALUE)
}

let houses = [1, 2, 3]
let heaters = [2]

findRadius(houses, heaters)

/**
 * 二分查找左右边界值即可，较为简单
 */