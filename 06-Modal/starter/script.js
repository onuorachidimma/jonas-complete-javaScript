'use strict';
const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const hiddenModal = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');

showModal.addEventListener('click', function openModal() {
  hiddenModal.style.display = 'block';
//   modal.style.display = 'block';
  overlay.style.display = 'block';
  console.log('I just got clicked');
});

closeModal.addEventListener('click', function killModal() {
  hiddenModal.style.display = 'none';
    overlay.style.display = 'none';
  console.log('I just got clicked');
});

//  const openModal = () => {

//  }
