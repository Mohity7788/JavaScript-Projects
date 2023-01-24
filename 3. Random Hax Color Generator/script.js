const color = document.querySelector('.count');
const showColor = document.querySelector('.container')
const randomColor = document.querySelector('.btn1');

// method 1
// randomColor.addEventListener("click",()=>{
//     const randNum = Math.random().toString(16).substring(2,8);
//     console.log(randNum);
//     color.textContent = '#'+randNum;
//     showColor.style.backgroundColor = '#'+randNum;
// });


//Method 2
function generateColor()  {
    const randNum = Math.random().toString(16).substring(2,8);
    console.log(generateColor)
    showColor.style.background = '#'+randNum;
    color.textContent = '#'+randNum;
}

randomColor.addEventListener("click",generateColor);
