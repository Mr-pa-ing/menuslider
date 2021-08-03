// UI
const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');
// console.log(openbtn);
const modal = document.getElementById('modal');
const closebtn  = document.getElementById('close');

// Event Listener
togglebtn.addEventListener('click',()=>{
    // console.log('hay');
    document.body.classList.toggle('shownav');

})

// Show Modal
openbtn.addEventListener('click',()=>{
    // console.log('hay');
    modal.classList.add('showmodal');
});

// Close Modal
closebtn.addEventListener('click',()=>{
    modal.classList.remove('showmodal');
});

// Hide Modal on outside click
// window.addEventListener('click',(e)=>{
//     // console.log(e.target);
//
//     if(e.target === modal){
//         modal.classList.remove('showmodal');
//     }
// });

window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') : false);