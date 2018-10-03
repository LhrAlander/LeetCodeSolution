/**
 * 
 * Given an array nums of n integers and an integer target, 
 * find three integers in nums such that the sum is closest to target.
 *  Return the sum of the three integers. 
 * You may assume that each input would have exactly one solution.
 * Example:
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let res = null
  for (let i = 0, length = nums.length; i < length; i++) {
    let cur = nums[i]
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      let tmp = nums[j] + nums[k] + cur
      tmp > target ? k-- : j++
      if (!res && res !== 0) {
        res = tmp
      } else {
        res = Math.abs(res - target) > Math.abs(tmp - target) ? tmp : res
      }
    }
  }
  return res
};
let nums = [-3, 2, 1, 0]
let target = 1
threeSumClosest(nums, target)

/**
 * Solution：先排序，遍历数组的每一个数，下标为 i 当作第一个数
 * 剩下的数组[i + 1, ..., nums.length - 1]
 * 两个指针 j, k分别从剩下数组的头和尾开始遍历
 * i, j, k三个数加起来和目前的结果作比较如果更近则采用结果
 * 同时如果 i, j, k 三个数加起来比 target 大了，则将 k--，否则 i++以逼近target
 */