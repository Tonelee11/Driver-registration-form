// Get form and inputs
const form = document.getElementById('bodaForm');
const emailInput = form.querySelector('.email');
const PnumberInput = form.querySelector('.Pnumber');
const destnationInput = form.querySelector('.destination');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    showErrorMessage(emailInput, 'Please enter email');
    return;
  }

  // Validate Pnumber
  const PnumberPattern = /^0\d{9}$/;
  if (!PnumberPattern.test(PnumberInput.value)) {
    showErrorMessage(PnumberInput, 'Please enter a valid phone number starting with 0 and consisting of 10 digits');
    return;
  }

  // Validate Destination
  if (destnationInput.value.trim() === '') {
    showErrorMessage(destnationInput, 'Please enter a destination area');
    return;
  }
    

  // If both email and Pnumber are valid, submit the form
  this.submit();
});

// Function to display error message
function showErrorMessage(input, message) {
  const errorSpan = input.parentElement.nextElementSibling;
  errorSpan.querySelector('.error-text').textContent = message;
  errorSpan.style.display = 'block';
}
