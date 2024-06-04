'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const hiddenModal = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
/*
function openModal() {
  hiddenModal.style.display = 'block';
  //   modal.style.display = 'block';
  overlay.style.display = 'block';
  console.log('I just got clicked');
}

function killModal() {
  hiddenModal.style.display = 'none';
  overlay.style.display = 'none';
  console.log('I just got clicked');
}

showModal.forEach(element => {
  element.addEventListener('click', openModal);
});

hiddenModal.addEventListener('click', killModal);
*/

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('I just got clicked');
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

function killModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('I just got clicked');
}

closeModal.addEventListener('click', killModal);
