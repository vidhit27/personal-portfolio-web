// document.querySelector('.main').style.display='none';
document.querySelector('.cross').style.display='none';
document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.main').classList.toggle('navbargo');
    document.querySelector('.content').style.width='100vw';
    document.querySelector('.ham').style.display='inline';
})

// document.querySelector('.dark').addEventListener("click",()=>{
//     // about
//     document.querySelector('.box').classList.toggle('white');
//     document.querySelector('.dark').classList.toggle('dark1');
//     document.querySelector('.content').classList.toggle('black');
//     //contact
    
// })