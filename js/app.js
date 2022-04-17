const menu = document.querySelector('.menu-list')
const burger = document.querySelector('.burger-menu')
const homeTxt = document.querySelector('.hero-text')



burger.addEventListener('click', function () {
    menu.classList.toggle('visible')
    burger.classList.toggle('visible')
    homeTxt.classList.toggle('no-display')
   


})




        

var time = 3850;
var i = 0;
var text = [];
var para = [];

text[0] =  "Hello, we are Data Sifting. We provide proficient solutions for your Software, Data Analytics, & Business Intelligence needs."
text[1] = "Take a look at some of the services we offer or get in touch to discuss how we can help you"

para[0] = '<b>OUR VISION</b> <br>Here at Data Sifting, our vision is to provide all-encompassing and robust software solutions for all types of organisations across the globe.'
para[1]='<b>OUR MISSION</b>  <br>Our mission is to exceed client expectations by providing the best solutions to their problems & excel as a software company through quality and proficiency'



function changeTxt(){
    document.querySelector('.hero-para').innerHTML = text[i]
    document.querySelector('.about-para').innerHTML = para[i]
    
   

    if (i < text.length - 1 ){
        i++
    } else {
        i = 0
    }

    setTimeout("changeTxt()", time)
}

window.onload = changeTxt;



/*MODAL CODE*/


  /*
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.appear')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('appear')
  overlay.classList.add('appear')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('appear')
  overlay.classList.remove('appear')
}


*/

const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const modal4 = document.querySelector('.modal-4');
const modal5 = document.querySelector('.modal-5');
const modal6 = document.querySelector('.modal-6');
const btnOpen = document.querySelector('.modal-btn')
const btnOpen2 = document.querySelector('.modal-btn-2')
const btnOpen3 = document.querySelector('.modal-btn-3')
const btnOpen4 = document.querySelector('.modal-btn-4')
const btnOpen5 = document.querySelector('.modal-btn-5')
const btnOpen6 = document.querySelector('.modal-btn-6')
const closeBtn = document.querySelector('.close-btn')
const closeBtn2 = document.querySelector('.close-btn-2')
const closeBtn3 = document.querySelector('.close-btn-3')
const closeBtn4 = document.querySelector('.close-btn-4')
const closeBtn5 = document.querySelector('.close-btn-5')
const closeBtn6 = document.querySelector('.close-btn-6')


btnOpen.addEventListener('click', function(){
  modal.classList.add('appear')
})

btnOpen2.addEventListener('click', function(){
  modal2.classList.add('appear')
})

btnOpen3.addEventListener('click', function(){
  modal3.classList.add('appear')
})

btnOpen4.addEventListener('click', function(){
  modal4.classList.add('appear')
})
btnOpen5.addEventListener('click', function(){
  modal5.classList.add('appear')
})
btnOpen6.addEventListener('click', function(){
  modal6.classList.add('appear')
})

closeBtn.addEventListener('click',function(){
  modal.classList.remove('appear')
 })

closeBtn2.addEventListener('click',function(){
  modal2.classList.remove('appear')
 })

closeBtn3.addEventListener('click',function(){
  modal3.classList.remove('appear')
 })

closeBtn4.addEventListener('click',function(){
  modal4.classList.remove('appear')
 })

closeBtn5.addEventListener('click',function(){
  modal5.classList.remove('appear')
 })


closeBtn6.addEventListener('click',function(){
  modal6.classList.remove('appear')
 })




 /*FORM BTN*/

 const submitBtn = document.querySelector('.submit-btn')
 const formIcon = document.querySelector('.lead-form-icon')
 const leadForm = document.querySelector('.lead-form')

 formIcon.addEventListener('click',function(){
   leadForm.classList.toggle('visible')
 })

 submitBtn.addEventListener('click',function(){
   leadForm.classList.remove('visible')
 })
 


