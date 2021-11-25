const nums = [1,2,3,4,5,6,7,8,9,0]

const aveOdd = (array) => {
    let odd = 0;
    for( let i = 0; i < array; i++) {
    if (i%2!=0){
    odd += array[i]
    }else {
    return -1}
    }
}