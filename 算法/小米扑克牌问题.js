// 一副从1到n的牌，每次从牌堆顶取一张放桌子上，再取一张放牌堆底，直到手机没牌，最后桌子上的牌是从1到n有序，设计程序，输入n，输出牌堆的顺序数组
// 思路 （2n-1）*2^x 
var cardSort = function(n){
    let i = 1;
    let k = 0;
    let arryS = [];
    let arryO = [];
    for(var j = 0; j <= n; j++){
        arryS[j] = j;
    }
    while(Math.ceil(i<=n)){
        let m = 1;
        while((2*m-1)*i<=n){
            arryO[(2*m-1)*i] = arryS[m+k];
            // console.log((2*m-1)*i,m+k);
            m++;
        }
        // console.log(2*i);
        k = m+k-1;
        i*=2;
    }
    return arryO;
};