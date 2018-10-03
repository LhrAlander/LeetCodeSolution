function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var getNumsFromLN = function (l) {
		let result = []
		let cur = l
		while (cur) {
			result.push(parseInt(cur.val))
			cur = cur.next
		}
		return result
	}
	var getLNfromNums = function (nums) {
		let cur = null
		let res = null
		nums.forEach(n => {
			if (cur == null) {
				cur = new ListNode(n)
				res = cur
			}
			else {
				cur.next = new ListNode(n)
				cur = cur.next
			}
		})
		return res
	}
	var first = Array.isArray(l1) ? l1 : getNumsFromLN(l1)
	var second = Array.isArray(l2) ? l2 :getNumsFromLN(l2)
	var next = 0
	var result = []
	for (let i = 0; i < first.length || i < second.length; i++) {
		var f = first[i] || 0
		var s = second[i] || 0
		var res = f + s + next
		result[i] = res % 10
		next = parseInt(res / 10)	
	}
	if (next) {
		result[result.length] = next
	}
	return Array.isArray(l1) ? result : getLNfromNums(result)
};
