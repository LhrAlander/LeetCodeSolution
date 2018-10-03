/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
		var result = []
		if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
			return 0
		}
		var i = nums1.length - 1
		var j = nums2.length - 1
		var index = 0
		var result = 0
		var max = Math.floor((i + j + 2) / 2) 
		var min = Math.floor((i + j + 1) / 2)
		console.log(min ,max)
		while (true) {
			if (i < 0 && j < 0) {
				break
			}
			else if (i < 0) {
				tmp = nums2[j--]
			}
			else if (j < 0) {
				tmp = nums1[i--]
			}
			else if (nums1[i] > nums2 [j]) {
				tmp = nums1[i]
				i--
			}
			else {
				tmp = nums2[j]
				j--
			}

			if (index == min || index == max) {
				console.log(tmp)
				result += tmp
			}
			index++
			if (index > max) {
				break
			}
		}
		return result / (min == max ? 1 : 2)
};

console.log(findMedianSortedArrays([1, 2], [2]))