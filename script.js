function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    function validateEmailInput() {
  const emailInput = document.getElementById('email').value;
  const feedbackElement = document.getElementById('emailFeedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {

    feedbackElement.textContent = ""; // Email é valido
  } else {
    feedbackElement.textContent = 'Por favor, insira um endereço de e-mail válido';
  }
  
    }
  }
  