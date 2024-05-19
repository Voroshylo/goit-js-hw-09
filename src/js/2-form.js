const formData = {
  email: "",
  message: ""
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  console.log(`Input event: ${name} = ${formData[name]}`);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log('Local Storage:', localStorage.getItem('feedback-form-state'));
});

document.addEventListener('DOMContentLoaded', () => {
  const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedFormData) {
    Object.assign(formData, storedFormData);
    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value = formData.message;
    console.log('Form data restored from Local Storage:', formData);
  } else {
    console.log('No data found in Local Storage');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }
  console.log('Form submitted:', formData);

  localStorage.removeItem('feedback-form-state');
  Object.keys(formData).forEach(key => formData[key] = "");

  form.reset();
});
