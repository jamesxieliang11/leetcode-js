
// 给定一个字符串，找出不含有重复字符的最长子串的长度。

// 示例：

// 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

// 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

// 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = []; 
    let answer = s.length&&1||0; //设定初始值
    for(var i = 0; i < s.length; i++) {
        let item = s[i];
        let index = i;
        result.some((m,n)=>{if(item === m){
            result = result.slice(n+1,result.length);//截取非重复字符串
            return true;
        }})
        result.push(item);
        answer = Math.max(result.length, answer);
    }
    return answer;
};