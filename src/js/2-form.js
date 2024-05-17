const formData = {
  email: "",
  message: ""
}

const form = document.querySelector('.feedback-form');

  form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
});
  
document.addEventListener('DOMContentLoaded', () => {
  const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedFormData) {
    Object.assign(formData, storedFormData);
    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value = formData.message
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  Object.keys(formData).forEach(key => formData[key] = "");

  form.reset();
});
