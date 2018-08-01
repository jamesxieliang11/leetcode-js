// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba"也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // let result = s.split('').reverse().join('');
    let result = '';
    let answer = '';
    for (var i = 0; i <= s.length-1; i++ ){
        result += s[s.length-i-1] + '';
    }
    for (var i = 0; i <= result.length-1; i++ ){
        for (var j = 0; j <= result.length - i-1; j++ ){
            let cache = s.substr(j,result.length-i-j);
            let cache1 = result.substr(i,result.length-j-i);
            if (cache == cache1 && cache.length > answer.length){
                answer = cache;
            } 
        }       
    }
    return answer;
};