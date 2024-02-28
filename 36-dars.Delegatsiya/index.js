' use strict '

const wrapper = document.querySelector('.btn-block'),
btns = document.querySelectorAll('button');

// btn-block classli elemnt bosilgnda hodisa qo'shish
// wrapper.addEventListener('click',()=>{
//     console.log('click');
// })

// faqat aniq element bosilganda hodisa qo'shish
// wrapper.addEventListener('click',(e)=>{
//     console.log(e.target);
//     console.log(e.dir);
// })

// ma'lum bir element bosilganda ma'lum bir hodisa qo'shish

// wrapper.addEventListener('click',(e)=>{
//     if(e.target && e.target.tagName == 'BUTTON'){ // element bosilsa va bosilgan element button tegiga teng bo'lsa
//         console.log('btn clicked');
//     }
// })

// tanlangan element ichida ma'lum bir bir klassli element bo'lsa hodisa qo'shish 

// wrapper.addEventListener('click',(e)=>{
//     if(e.target && e.target.classList.contains('blue')){ // if(e.target && e.target.contains('blue')) --- bunaqa kod yozilsa xatolik bo'lishi mumkin .chunki contins classList bilan keladi.
//         console.log('blue klass clicked');
//     }
// })

// har bir elementga yoppasiga hodisa qo'shish
// btns.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         console.log('click');
//     })
// })

// Element bosilganda boshqa elementga still berish

// Bosilgandagi klass va qo'shilgan klass bir xil bo'lgani uchun ularga berilgan vazifa ham bir bo'ladi


btns[0].addEventListener('click',()=>{
    btns[1].classList.toggle('red');
})

// wrapper.addEventListener('click', (e)=>{
//     if(e.target && e.target.classList.contains('red')){
//         console.log('clicked');
//     }
// })

// matches metodi
wrapper.addEventListener('click', (e)=>{
    if(e.target && e.target.matches('button.red')){
        console.log('clicked');
    }
})

const btn = document.createElement('button');
btn.classList.add('red'); //  elemetga klass qo'shish uchun
wrapper.append(btn); // element ichiga element qo'shish uchun