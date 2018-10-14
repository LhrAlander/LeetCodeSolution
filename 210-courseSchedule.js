11
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let map = new Map()
    let counts = new Map()
    let res = []
    for (let pre of prerequisites) {
        let first = pre[1]
        let second = pre[0]
        let val = []
        if (map.get(first) !== undefined) val = map.get(first)
        val.push(second)
        map.set(first, val)
        counts.set(second, (counts.get(second) || 0) + 1)
    }
    let queue = []
    for (let i = 0; i < numCourses; i++) {
        if (counts.get(i) === undefined) queue.push(i)
    }
    while (queue.length !== 0) {
        let cur = queue.shift()
        res.push(cur)
        let canTakes = (map.get(cur) || [])
        for (let course of canTakes) {
            counts.set(course, counts.get(course) - 1)
            if (counts.get(course) === 0) queue.push(course)
        }
    }
    return res.length == numCourses ? res : []
};