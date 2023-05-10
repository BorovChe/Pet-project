// !\\\\\\\\\\\\\\\\MODAL/////////////////////


// const btnOpenModal = document.querySelector('[data-action="open-modal"]');
// const btnClose = document.querySelector('.close-modal');
// const backdropEl = document.querySelector('.backdrop');




// btnOpenModal.addEventListener('click', openModal);
// btnClose.addEventListener('click', closeModal);
// backdropEl.addEventListener('click', onbackdropClick);

// function openModal() {
//   document.body.classList.add('show-modal');
// };

// function closeModal() {
//   document.body.classList.remove('show-modal');
// };

// function onbackdropClick(event) {
//   if (event.currentTarget === event.target) {
//   closeModal()
// }
// };

// !\\\\\\\\\\\\\\\\FORM/////////////////////

const priceInputEl = document.querySelector('#price');
const quantityInputEl = document.querySelector('#quantity');
const buttonSubmitEL = document.querySelector('.form-btn');


buttonSubmitEL.addEventListener('click', onformSubmission)
priceInputEl.addEventListener('input', onMakeInputPrice);
quantityInputEl.addEventListener('input', onMakeInutQuantity)

let valuePrice = 0;
function onMakeInputPrice(ev) {
  const valuePriceInput = Number(ev.currentTarget.value);
  valuePrice = valuePriceInput;
  return valuePrice;
};

let valueQuantity = 0
function onMakeInutQuantity(ev) {
  const valueQuantityInput = Number(ev.currentTarget.value);
  valueQuantity = valueQuantityInput;
  return valueQuantity;
};


function onformSubmission(ev) {
  ev.preventDefault()
  const sum = valueQuantity * valuePrice;
alert(sum)
};
