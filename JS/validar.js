let form        = document.querySelector('form');
let busqueda    = document.querySelector('.buscador');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (busqueda.value == "") {
        alert('No puedes enviar el form vacio');
    } else if(busqueda.value.length < 3){
        alert('Debes escribir mas de 2 caracteres');
    } else {
        this.submit();
    }
})
let formulario = document.querySelector('.buscador')
        formulario.addEventListener('focus', function () {
            
        })