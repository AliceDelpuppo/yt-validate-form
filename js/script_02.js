
const $inputName = document.querySelector('#name')
const $inputEmail = document.querySelector('#email')
const $inputPassword = document.querySelector('#password')

const $form = document.querySelector('form')
const $inputs = document.querySelectorAll('input')
const $spanError = document.querySelectorAll('.input span')


function verifyValidate() {

    if (!$inputName.value) {
        $spanError[0].classList.add('active')
        $spanError[0].textContent = 'Campo obrigatório'
    } else {
        $spanError[0].classList.remove('active')
        $spanError[0].textContent = ''
    }

    if (!$inputEmail.value) {
        $spanError[1].classList.add('active')
        $spanError[1].textContent = 'Campo obrigatório'
    } else {
        $spanError[1].classList.remove('active')
        $spanError[1].textContent = ''
    }

    if (!$inputPassword.value) {
        $spanError[2].classList.add('active')
        $spanError[2].textContent = 'Campo obrigatório'
    } else {
        $spanError[2].classList.remove('active')
        $spanError[2].textContent = ''
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