// 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"

// 实现一个将字符串进行指定行数变换的函数:

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "PAYPALISHIRING", numRows = 3
// 输出: "PAHNAPLSIIGYIR"
// 示例 2:

// 输入: s = "PAYPALISHIRING", numRows = 4
// 输出: "PINALSIGYAHRPI"
// 解释:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const sLength = s.length;
    let queeRows = (numRows-1)*2; //每项个数
    const queeNum = Math.ceil(s.length/queeRows); //项数
    let str = '';
    if( numRows === 1 ){return s};
    for(var i = 0; i <= queeRows/2; i++){
        for(var j = 0; j <= queeNum-1; j++){
            if(i === 0){
                if(s[queeRows*j+i]){
                    str += s[queeRows*j+i];
                }
            }else if(i === queeRows/2){
                if(s[queeRows*(j+1)-i]){
                    str += (s[queeRows*(j+1)-i]);
                }
            }else if(s[queeRows*(j+1)-i] || s[queeRows*j+i]){
                str += s[queeRows*j+i];
                if(queeRows*(j+1)-i<sLength){
                    str += s[queeRows*(j+1)-i];
                }
            }
        }
    }
    return str;
};