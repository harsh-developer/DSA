function nextGreaterElement(nums1, nums2) {
    let output = [];
    let map = new Map();
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], i);
    }
    for (let j = 0; j < nums1.length; j++) {
        if (map.has(nums1[j])) {
            console.log(nums1[j])
            if (nums2[map.get(nums1[j]) + 1] > nums1[j]) {
                output.push(nums2[map.get(nums1[j]) + 1]);
            } else {
                output.push(-1);
            }
        }
    }
    return output;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))