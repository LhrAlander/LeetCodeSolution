var lengthOfLongestSubstring = function (s) {
	var max = 0;
	var i = 0;
	var j = 0;
	var n = s.length;
	var map = {};

	while (i < n && j < n) {
			if (map[s[j]] === undefined) {
					map[s[j]] = 1;
					j++;
					max = Math.max(max, j - i);
			} else {
					delete map[s[i]];
					i++;
			}

	}

	return max;
}
console.log(lengthOfLongestSubstring('bbbbb'))