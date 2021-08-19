const $fields = document.querySelectorAll('[required]')
const $spanError = document.querySelector('span.error')
// console.log(fields)

function customValidation(event) {

    const field = event.target

    const error = verifyErrors(field)

    // console.log(`Error: ${error}`)

    // Sem o bobble, isso não é mais necessário
    // if (error) {
    //     field.setCustomValidity('Esse campo é obrigatório')
    // } else {
    //     field.setCustomValidity('')
    // }

    if (error) {
        $spanError.classList.add('active')
        $spanError.textContent = 'Campo obrigatório'

    } else {
        $spanError.classList.remove('active')
        $spanError.textContent = ''
    }
}

function verifyErrors(field){
    let foundError = false

    for (let error in field.validity) {
        // Sem o bubble, isso aqui muda também.
        // Antes era: if(error != "customError" && field.validity[error]) {
        if(field.validity[error] && !field.validity.valid) {
            foundError = true
        }
    }

    return foundError
}

$fields.forEach(function ($field) {
    $field.addEventListener('invalid', function(event){
        // Eliminar o bubble
        event.preventDefault()
        customValidation(event)
    })
    $field.addEventListener('blur', customValidation)
})

document.querySelector('form').addEventListener('submit', function (event) {
    console.log('Enviar o formulário')
    event.preventDefault()
})
