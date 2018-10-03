/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
var twoSum = function(nums, target) {
		var map = {}
		var result = []
		for (var i = 0; i < nums.length; i++) {
			var num = nums[i]
			if (map[target - num] != undefined) {
				result = [i, map[target - num]]
				break
			}
			else {
				map[num] = i
			}
		}
		return result.sort()
}
console.log(twoSum([3, 2, 4], 6))