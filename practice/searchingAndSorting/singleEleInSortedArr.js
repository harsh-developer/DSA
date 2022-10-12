function singleNonDuplicate(nums) {
    for(let i = 1; i<nums.length; i++){
        if(nums[i] != nums[i-1]){
            return nums[i]
        }
    }
};
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))