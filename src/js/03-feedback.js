//imports
import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

//get controls
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', setInputToLocStorage);
formEl.addEventListener('submit', onSubmitForm);
const FORM_DATA_NAME = 'feedback-form-state';

//set form fields data
populateIntupFeilds();

function populateIntupFeilds() {
  if (localStorage.getItem(FORM_DATA_NAME)) {
    const dataReceived = JSON.parse(localStorage.getItem(FORM_DATA_NAME));
    // console.log(dataReceived);
    formEl.elements.email.value = dataReceived.email;
    formEl.elements.message.value = dataReceived.message;
  }
}

//create obj with email and message data
function createData(event) {
  return {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
}

function setInputToLocStorage(event) {
  localStorage.setItem(FORM_DATA_NAME, JSON.stringify(createData(event)));
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log('form submitted with data: ', createData(event));

  //kill all data
  event.currentTarget.reset();
  localStorage.removeItem(FORM_DATA_NAME);
}
