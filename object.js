//1) Take 3 numbers as input and print whether each number is positive or neg.
// Create an array with three numbers
let numbers = [5, -3, 8];

// Check if any number is positive or negative

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log(numbers[i],"This is positive number.");
  }else{
    console.log(numbers[i],"This negative number.");
  }
}

//2) Take 10 numbers as input and print whether each number is positive or neg.
var numbers1=[1,-2,0,6,9,45,23,-9,4,-2];

for(var i = 0; i<numbers1.length; i ++) {
    if (numbers1[i] < 0){
        console.log(numbers1[i],"This is the negative number");
    }else{
        console.log(numbers1[i],"This is the positive number");
    }
}



//3) Take n numbers as input and count how many are positive and negative.
var numbers1 = [1, -2, 0, 6, 9, 45, 23, -9, 4, -2];

var positiveCount = 0;
var negativeCount = 0;


for (var i = 0; i < numbers1.length; i++) {
    if (numbers1[i] < 0) {
        console.log(numbers1[i], "This is a negative number");
        negativeCount++;
    } else if (numbers1[i] > 0) {
        console.log(numbers1[i], "This is a positive number");
        positiveCount++;
    } else {
        console.log(numbers1[i], "This is zero");
    }
}

console.log("Total positive numbers: " + positiveCount);
console.log("Total negative numbers: " + negativeCount);

// 4) Take n numbers as input and count how many are positive and negative, 
//and print the percentages of pos. and neg

let array1=[1,2,3,4-6,0,10,8,9,5,3,2,-18,6,5,3];

var positiveCount1=0;
var negativeCount1=0;
var zeroCount1=0;
var Totalarray=array1.length;

//console.log("Total number in Array",array1++)


for(let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 ) {
        console.log(array1[i],"This is a positive number");
        positiveCount1++
    }else if(array1[i] < 0) {
        console.log(array1[i],"This is a negative number");
        negativeCount1++
    }else if(array1[i] == 0 ) {
        console.log(array1[i],"This number is zero");
        zeroCount1++
    }else{
        console.log(array1[i],"This number is not positive,neither negative nor zero");
    }
}

console.log("Total positive numbers:" + positiveCount1);
console.log("Total negative numbers:" + negativeCount1);
console.log("Total zero numbers:" + zeroCount1);
console.log("Total number of Array",Totalarray++)
console.log("Percentage of positive numbers:" + (positiveCount1/Totalarray)*100);
console.log("Percentage of positive numbers:" + (negativeCount1/Totalarray)*100);
console.log("Percentage of positive numbers:" + (zeroCount1/Totalarray)*100);



//5)  Printing integers from 1 to 2^10 (2 raised to the power of 10)
const exponent = 5;
const limit = Math.pow(2, exponent);

for (let i = 1; i <= limit; i++) {
    console.log(i);
}

// Printing integers from -1 to -2^5 negative numbers

const exponent1 = 5;
const limit1 = -Math.pow(2,exponent1);

for(let i = 0; i >= limit1; i--) {
    console.log(i);
}



//6)Print all positive integers from n to 1. (assume user enters a real value for n)
const exponent2 = 5;
const limit2 = Math.pow(2,exponent2);

for (let i=limit2;i>=1;i--){
    console.log(i);
}


//7)Print all positive integers from n to 1. (assume user enters a real value for n)
const exponent3 = 5;
const limit3 = Math.pow(2.5,exponent3);

for (let i=limit3;i>=1;i--){
    console.log(i);
}

//8) Find the sum of 1 to n positive integers (assume user enters a real value for n)
let array2 = [1,6,3,2,6,9,5,3,6,7,10];
let sum=0;

for (let i=0 ; i < array2.length; i++) {
    sum += array2[i];
}
console.log("sum:" + sum);

//9) Find the sum of 10 input numbers.
let numbers2 = [1,2,3,4,5,6,7,8,9,10];
let sum1=0;

for (let i=0; i < numbers2.length; i++) {
    sum += numbers2[i];
}
console.log("Total of 10 numbers is:"+ sum);


//10) Find the average(sum of numbers/total no) of n input numbers.
let number3=[10,20,30,40,50];
let sum2=0;
let number4=number3[i];
number4=0;

for (i=0;i<number3.length;i++) {
    sum2 += number3[i];
    number4++;
}
console.log("The average of five numbers is:" + sum2/number4);


//11) Find the largest of n input numbers.
let array3 = [-1,50,273,64,31,2,166,56,14];
let Maxnumber=Math.max(...array3);
console.log("The largest number in this array is:" + Maxnumber);



//12) Find the smallest of n input numbers.
let number5 = [1,45,100,336,45,67,-900];
let minNumber =Math.min(...number5);
console.log("The Smallest number in this array is:" + minNumber);

//13) Generate 1 to 12 multiples of n. (aka multiplication table of n)
let n=12;
for (i=1;i<=n;i++){
    for (j=1;j<=n;j++){
        console.log("The table from 1 to 12 is: " + i +" * " + j + " = " + i*j );

    }
}



//only table of 9
let n1=12;
let tableof1=9;
for (i=1; i<=n1;i++){
    console.log("The table of 9 is: " + tableof1 +  " * " + i  + " = " + (tableof1*i));
}
 

//14) Find out how many numbers from 1 to n completely divide n//explain this????????????/.
//Find out the total no. of factors of n.
let n2 = 12; // You can change this value to any positive integer
let divisorCount = 0;

for (let i = 1; i <= n2; i++) {
    if (n2 % i === 0) {
        divisorCount++;
    }
}

console.log("The number of divisors of " + n + " is: " + divisorCount);

//15) Find out how many numbers from 2 to n completely divide n.
let n3 = 12; // You can change this value to any positive integer
let divisorCount1 = 0;

for (let i = 2; i <= n2; i++) {
    if (n3 % i === 0) {
        divisorCount1++;
    }
}

console.log("The number of divisors of " + n + " is: " + divisorCount1);


//16) Find out whether n is prime.
let n4 = 15;
let primeNum=0;
for (i=0;i<=n4;i++ ) {
    if (n4 % i !=0) {
        primeNum++;
        console.log(primeNum + " =is prime number");
    }else{
        console.log(primeNum + " =is not a prime number");
    }
}
console.log("Total prime numbers are: " + primeNum);


//todays class work:-
const  array4=[20,50,5,0,8,45];
let sum3=0;
for (i=0;i<array4.length;i++) {
    sum3 += array4[i];
}
console.log("Total sum of array is: " + sum3);


//1st method of Reversing arrays.
let array5=[20,50,5,0,8,45];
console.log("The length of array is:" + array5.length)
for (i=array5.length-1;i>=0;i--){
    console.log(array5[i]);
}











