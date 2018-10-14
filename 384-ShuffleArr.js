/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums || []
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  var a = []
  this.nums.forEach((val, key) => a[key] = val)
  for (let i = 0; i < a.length; i++) {
      let rand = Math.floor(Math.random() * (a.length - i)) + i
      let tmp = a[i]
      a[i] = a[rand]
      a[rand] = tmp
  }
  return a;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = Object.create(Solution).createNew(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/