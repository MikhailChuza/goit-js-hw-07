
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
const formData = {
      email: this.elements.email.value.trim(),
      password: this.elements.password.value.trim()
    };

   if (!formData.email || !formData.password) {
      alert('All form fields must be filled in');
      return;
    }
console.log(formData);
this.reset();
  });