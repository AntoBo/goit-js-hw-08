// нагородил кода, хочется лучше и проще

//imports
import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

//get controls
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(setInputToLocStorage, 500));
formEl.addEventListener('submit', onSubmitForm);
const FORM_DATA_NAME = 'feedback-form-state';
const data = {
  email: '',
  message: '',
};

//set form fields with saved data
populateIntupFeilds(formEl);

function populateIntupFeilds(form) {
  if (localStorage.getItem(FORM_DATA_NAME)) {
    const dataReceived = JSON.parse(localStorage.getItem(FORM_DATA_NAME));

    form.elements.email.value = dataReceived.email;
    form.elements.message.value = dataReceived.message;
  }
}

//every time input occurs
function setInputToLocStorage(event) {
  localStorage.setItem(FORM_DATA_NAME, JSON.stringify(makeData(event)));
}

//create obj with email and message data
function makeData(event) {
  let data = {};
  //get data from localStorage
  if (localStorage.getItem(FORM_DATA_NAME)) {
    data = JSON.parse(localStorage.getItem(FORM_DATA_NAME));
  } else {
    data = { email: '', message: '' };
  }

  //update data
  if (event.target.name === 'email') {
    data.email = event.target.value;
  }
  if (event.target.name === 'message') {
    data.message = event.target.value;
  }
  // return data;
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log('form submitted with data: ', data);

  //kill all data
  event.currentTarget.reset();
  localStorage.removeItem(FORM_DATA_NAME);
}
