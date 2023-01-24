const count = document.querySelector('.count');
const randomNumb = document.querySelector('.btn1');


// Method 1
// randomNumb.addEventListener("click",()=>{
//     const randNum = Math.trunc(Math.random()*10 ) +1;
// console.log(randNum)

//     count.textContent = randNum;

// });

// Method 2

const generateNumber = ()=>{
    const randNum = Math.trunc(Math.random()*10 ) +1;
    count.textContent = randNum;
}

randomNumb.addEventListener("click",generateNumber);