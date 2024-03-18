document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                showError(input, `${getFieldName(input)} is required`);
            } else {
                hideError(input);
            }
        });

        if (isValid) {
            form.submit();
        }
    });

    function getFieldName(input) {
        return input.previousElementSibling.textContent.trim();
    }

    function showError(input, message) {
        const error = input.nextElementSibling;
        error.textContent = message;
        error.style.display = 'block';
    }

    function hideError(input) {
        const error = input.nextElementSibling;
        error.style.display = 'none';
    }
});
