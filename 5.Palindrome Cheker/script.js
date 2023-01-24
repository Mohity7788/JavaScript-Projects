const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


btn.addEventListener('click',padlindrome);

function padlindrome(){
    const word = document.querySelector(".input-text").value;
    let len = word.length;
    
    const start = word.slice(0,Math.floor(len/2)).toLowerCase();
    const end = word.slice(len - Math.floor(len/2)).toLowerCase();
    const flip = end.split('').reverse().join('');

    if(start===flip){
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    }else{
        result.innerHTML = `${word.toUpperCase()} is not a palindrome`;
    }
}
