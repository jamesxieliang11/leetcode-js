// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

// 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 中位数是 (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sum = [];
    let i = 0;
    let anwser = 0;
    nums1.some((item, index) => {
        while(nums2[i] != undefined && nums2[i] <= item){
            sum.push(nums2[i]);
            i++;
        }
        sum.push(item);
    })
    if(i<=nums2.length-1){
        while(nums2[i] != undefined) {
            sum.push(nums2[i]);
            i++;
        }
    }
    anwser = sum.length % 2 ? sum[~~(sum.length/2)] : (sum[~~(sum.length/2)] + sum[~~(sum.length/2)-1])/2;
    return anwser;
};
