

const sumArray = (numArray) => {
    let sum = 0;
    for (let i =0; i < numArray.length; i++){
        sum += numArray[i];
    } return sum;
}
module.exports ={
    sumArray:sumArray
}