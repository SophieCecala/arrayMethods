//task 1

let arr = ['1', '2', '3'];
arr.push('4', '5', '6');

console.log('arr', arr);

//task 2

let arr1 = ['1', '2', '3'];
arr1.unshift('4', '5', '6');

console.log('arr1', arr1);

// task 3

let arr2 = ['js', 'css', 'jq'];
 arr2.shift();

console.log('arr2', arr2);

//task 4

let arr3 = ['js', 'css', 'jq'];
arr3.pop();

console.log('arr3', arr3);

//task 5

let arr4 = ['1', '2', '3', '4', '5'];
let slice = arr4.slice(0, 3);

console.log('arr4', slice);

//task 6

let arr5 = ['1', '2', '3', '4', '5'];
let slice1 = arr5.slice(-2);

console.log('arr5', slice1);

//task7
let arr6 = ['1', '2', '3', '4', '5'];
arr6.splice(1, 2);

console.log('arr6', arr6);

//task 8

let arr7 = ['1', '2', '3', '4', '5'];
arr7.splice(0, 1);
arr7.splice(3, 1);

console.log('arr7', arr7);

//task 9

let arr8 = ['1', '2', '3', '4', '5'];
arr8.splice(3, 0, 'a', 'b', 'c');

console.log('arr8', arr8);

//task 10

let arr9 = ['1', '2', '3', '4', '5'];
arr9.splice(1, 0, 'a', 'b');
arr9.splice(6, 0, 'c');
arr9.splice(8, 0, 'e');

console.log('arr9', arr9);

//task 11

let arr10 = [6, 6, 3];
const indexOfThree = arr10.indexOf(3);
if (indexOfThree){
 console.log('arr10','yes');
}else{
 console.log((arr10),'no')
}

