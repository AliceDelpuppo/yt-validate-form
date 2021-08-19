
const $inputName = document.querySelector('#name')
const $inputEmail = document.querySelector('#email')
const $inputPassword = document.querySelector('#password')

const $spanName = document.querySelector('.error-name')
const $spanEmail = document.querySelector('.error-email')
const $spanPassword = document.querySelector('.error-password')

// const $form = document.querySelector('form')
// const $inputs = document.querySelectorAll('input')

function verifyValidate() {

    if (!$inputName.value) {
        $spanName.classList.add('active')
        $spanName.textContent = 'Campo obrigatório'
    } else {
        $spanName.classList.remove('active')
        $spanName.textContent = ''
    }

    if (!$inputEmail.value) {
        $spanEmail.classList.add('active')
        $spanEmail.textContent = 'Campo obrigatório'
    } else {
        $spanEmail.classList.remove('active')
        $spanEmail.textContent = ''
    }

    if (!$inputPassword.value) {
        $spanPassword.classList.add('active')
        $spanPassword.textContent = 'Campo obrigatório'
    } else {
        $spanPassword.classList.remove('active')
        $spanPassword.textContent = ''
    } 
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()

    verifyValidate()
})


// // Eliminar o bubble
// $inputs.forEach(function ($input) {
//     $input.addEventListener('invalid', function(event){
//         event.preventDefault()
//     })
// })