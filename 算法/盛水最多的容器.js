// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let number = 0, len = height.length;
    for(var index = 0; index < len; index++){
        let item = height[index];
        if(!height[index-1] || item > height[index-1]){
            for(var i = len - 1; i > index; i--){
                if(height[i] > item){
                    number = Math.max(item * (i - index), number); 
                    i = index;
                }else{
                    number = Math.max(height[i] * (i - index), number); 
                } 
            }
        }
    }
    return number;
};