let qs = location.search
let qsobj = new URLSearchParams(qs);
let idpelicula = qsobj.get('id')
let favorito = document.querySelector('#clickfav')
let urlUserdetallepelis = `https://api.themoviedb.org/3/movie/${idpelicula}?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`
let maindetailmovie = document.querySelector('.descripcionpelis')
let titulo_h3 = document.querySelector('#titulo1')
let titulo_h32 = document.querySelector('#titulo2')
let titulo_h33 = document.querySelector('#titulo3')
let cartelera = document.querySelector('#cartelera')
let calificacion = document.querySelector('#calificacion')
let estreno = document.querySelector('#estreno')
let duracion = document.querySelector('#duracion')
let sinopsis = document.querySelector('#sinopsis')
let generos = document.querySelector('#generos')

fetch(urlUserdetallepelis)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let result = data.genres
    console.log(result[0].name)
    titulo_h3.innerText = data.title;
    titulo_h32.innerText = data.title;
    titulo_h33.innerText = `MOVIE: ${data.title}`;
    cartelera.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    calificacion.innerText = `QUALIFICATION: ${data.vote_average} / 10`;
    estreno.innerText = `RELEASE DATE: ${data.release_date}`;
    duracion.innerText = `DURATION: ${data.runtime} min`;
    sinopsis.innerText = `OVERVIEW: ${data.overview}`;

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
let recuperostorage = localStorage.getItem('favoritos_movies')
if (recuperostorage != null) {
    favoritos = JSON.parse(recuperostorage)
}
if (favoritos.includes(idpelicula)) {
    favorito.innerText = 'QUITAR DE FAVORITOS';
}
favorito.addEventListener('click', function (e) {
    e.preventDefault();
    if (favoritos.includes(idpelicula)) {
        let indice = favoritos.indexOf(idpelicula)
        favoritos.splice(indice, 1)
        favorito.innerText = 'AGREGAR A FAVORITOS'}
    else{
        favoritos.push(idpelicula)
        favorito.innerText = 'QUITAR DE FAVORITOS'
    }
    let favstostring = JSON.stringify(favoritos);
    localStorage.setItem('favoritos_movies', favstostring)
})

