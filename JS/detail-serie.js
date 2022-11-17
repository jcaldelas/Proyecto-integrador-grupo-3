let qs = location.search
let qsobj = new URLSearchParams(qs);
let idserie = qsobj.get('id')
let urlUserdetalleserie = `https://api.themoviedb.org/3/tv/${idserie}?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`
let favorito = document.querySelector('#clickfav')
let titulo_h3 = document.querySelector('#titulo1')
let titulo_h32 = document.querySelector('#titulo2')
let titulo_h33 = document.querySelector('#titulo3')
let cartelera = document.querySelector('#cartelera')
let calificacion = document.querySelector('#calificacion')
let estreno = document.querySelector('#estreno')
let sinopsis = document.querySelector('#overview')
let generos = document.querySelector('#generos')
let temporadas = document.querySelector('#temporadas')

fetch(urlUserdetalleserie)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let result = data.genres
    console.log(result[0].name)
    sinopsis.innerText = `OVERVIEW: ${data.overview}`;
    titulo_h3.innerText = data.name;
    titulo_h32.innerText = data.name;
    titulo_h33.innerText = `SERIE: ${data.name}`;
    cartelera.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    calificacion.innerText = `QUALIFICATION: ${data.vote_average} / 10`;
    estreno.innerText = `RELEASE DATE: ${data.first_air_date}`;
    temporadas.innerText = `${data.number_of_seasons} seasons`

    let contenido = "";
    for (let i = 0; i < 1; i++) {
        contenido += ` ${result[i].name}  /`
    }
   generos.innerText = `GENRES: ${contenido}`

  
    return data;
})
.catch(function(error) {
    return error;
});
/*Agregar, quitar de favoritos*/
let favoritos = []
let recuperostorage = localStorage.getItem('favoritos_series')
if (recuperostorage != null) {
    favoritos = JSON.parse(recuperostorage)
}
if (favoritos.includes(idserie)) {
    favorito.innerText = 'QUITAR DE FAVORITOS';
}
favorito.addEventListener('click', function (e) {
    e.preventDefault();
    if (favoritos.includes(idserie)) {
        let indice = favoritos.indexOf(idserie)
        favoritos.splice(indice, 1)
        favorito.innerText = 'AGREGAR A FAVORITOS'}
    else{
        favoritos.push(idserie)
        favorito.innerText = 'QUITAR DE FAVORITOS'
    }
    let favstostring = JSON.stringify(favoritos);
    localStorage.setItem('favoritos_series', favstostring)
})