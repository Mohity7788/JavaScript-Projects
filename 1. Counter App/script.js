const count = document.querySelector('.count');
const add = document.querySelector('.btn3');
const resetCount = document.querySelector('.btn2');
const sub = document.querySelector('.btn1');
const buttons = document.querySelector('.btns');

// Method 3

// buttons.addEventListener("click",(e)=>{
//     console.log(e.target.className);

//     if(e.target.className === 'btn3'){
//         count.textContent++;

//     }
//     if(e.target.className === 'btn1'){
//         count.textContent--;
//     }
//     if(e.target.className === 'btn2'){
//         count.textContent = 0;
//     }




// });





// Method -2
// buttons.addEventListener("click",(e)=>{
    
      
//      let yourButton = e.target.className.replace('btn', "").trim()
//       console.log("my button " , yourButton);
       
//       if(yourButton=='btn1'){
//         count.textContent--;   
//       }

//       if(yourButton=='btn2'){
//         count.textContent=0;   
//       }

//       if(yourButton=='btn3'){
//         count.textContent++;   
//       }


    // if(e.target.classList.contains = "btn1"){
    //     count.textContent--;
    // }
    // if(e.target.classList.contains = 'btn3'){
    //     count.textContent++;
    // }
    // if(e.target.classList.contains = "btn3"){
    //     count.textContent++;
    // }
    // if(e.target.classList.contains = "btn2"){
    //     count.textContent = 0;
    // }
   
// });

//Method 1
add.addEventListener('click',()=>{

    count.textContent++;
    setColor(count.textContent);

});

sub.addEventListener('click',()=>{

    count.textContent--;
    setColor(count.textContent);
 
});

resetCount.addEventListener('click',()=>{

    count.textContent=0;
    setColor(count.textContent);


});

function setColor(){
    if(count.textContent < 0){
        count.style.color ="Red";
    }else if(count.textContent == 0){
        count.style.color ="White";
    }else if(count.textContent > 0){
        count.style.color = "Greenyellow";
    }
}