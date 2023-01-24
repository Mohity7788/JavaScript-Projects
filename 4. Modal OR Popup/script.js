const modal = document.querySelector('.modal');
const openMod = document.querySelector('.btn');
const close = document.querySelector('.close');

openMod.addEventListener("click",openModal)
modal.addEventListener("click",closeModal);

function openModal(e){
    console.log('success');
    e.preventDefault();
    modal.style.display ='block';
}

function closeModal(e){
    console.log('success');
    e.preventDefault();
    modal.style.display ='none';
}