// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript

function findSum(n) {
    let arr = []
    for(i=1; i<=n; i++){
      if(i % 3 == 0 || i % 5 == 0){
        arr.push(i)
      }
    }
    let sum = 0
    for(i=0; i<=arr.length-1; i++){
        sum += arr[i]
    }
    console.log(`[${arr.join(' + ')}] = ${sum}`)
}
findSum(5)
console.log('========')
findSum(10)
console.log('========')
findSum(25)