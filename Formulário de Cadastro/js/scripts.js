const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if(usernameValue === '') {
        setErrorFor(username, 'O nome de usuário é origatório.');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'O email é obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Insira um email válido.');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'A senha é obrigatória.');
    } else if(passwordValue.lenght < 7) {
        setErrorFor(password, 'A senha é muito curta');
    } else {
        setSuccessFor(password);
    }

    if(passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória.');
    } else if(passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, 'As senhas devem ser iguais');
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className = 'form-control success');
    });

    if(formIsValid) {
        console.log('o formulário está valido');
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Adiciona a mensagem de erro
    small.innerText = message;

    //Adiciona a classe erro
    formControl.className = 'form-control error';
} 

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso

    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }