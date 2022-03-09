//get controls
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', event => {
  const formData = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  //make JSON and set it to lStorage
  //   localStorage.setItem();
  console.log(formData);
});
