let qs = location.search
let qsobj = new URLSearchParams(qs);
let idpelicula = qsobj.get('id')
let type = qsobj.get('type')
let favorito = document.querySelector('#clickfav')
let urlUserupcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1'
let urlUserdetallepelis = `https://api.themoviedb.org/3/movie/${idpelicula}?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`
let urlver_movie =`https://api.themoviedb.org/3/movie/${idpelicula}/recommendations?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1`
let maindetailmovie = document.querySelector('#centrar1Sin')
let titulo_h3 = document.querySelector('#titulo1')
let titulo_h32 = document.querySelector('#titulo2')
let titulo_h33 = document.querySelector('#titulo3')
let cartelera = document.querySelector('#cartelera')
let calificacion = document.querySelector('#calificacion')
let estreno = document.querySelector('#estreno')
let duracion = document.querySelector('#duracion')
let sinopsis = document.querySelector('#sinopsis')
let generos = document.querySelector('#generos')
let ul = document.querySelector('#ul')
let main_movies = document.querySelector('#main_pelis')
let recomendaciones = document.querySelector('#ver_recomendaciones')
let ulrecomendaciones = document.querySelector('#ulrecomendaciones')



if (type == null || idpelicula == null) {
    fetch(urlUserupcoming)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        let result = data.results;
        let contenido = "";

        for (let i = 0; i < 5; i++) {
            contenido += `<article class="cajahija"><a href="./detail-movie.html?id=${result[i].id}&type=pelicula" class="letter">
                            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" alt="">
                            <h3 class="titulo_pelicula">${result[i].title}</h3>
                            <p class="fecha">${result[i].release_date}</p>
                            </a></article>`
        }

        maindetailmovie.innerHTML = contenido;


    
        return data;
    })
    .catch(function(error) {
        return error;
    });
    
}
else{
    fetch(urlUserdetallepelis)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let result = data.genres
        titulo_h3.innerText = data.title;
        titulo_h32.innerText = data.title;
        titulo_h33.innerText = `MOVIE: ${data.title}`;
        cartelera.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        calificacion.innerText = `QUALIFICATION: ${data.vote_average} / 10`;
        estreno.innerText = `RELEASE DATE: ${data.release_date}`;
        duracion.innerText = `DURATION: ${data.runtime} min`;
        sinopsis.innerText = `OVERVIEW: ${data.overview}`;

        let contenido = "";
        for (let i = 0; i < result.length; i++) {
            
            contenido += `<li class="li"><a  href="./detail-genres.html?id=${result[i].id}&genre=${result[i].name}&type=${type}">${result[i].name}</a></li>`
        }
        ul.innerHTML=contenido
    
        return data;
    })
    .catch(function(error) {
        return error;
    });
}
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


/*Ver recomendaciones*/
fetch(urlver_movie)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let result = data.results;
    let contenido = "";

    for (let i = 0; i < 4; i++) {
        contenido += `<article class="cajahija"><a href="./detail-movie.html?id=${result[i].id}&type=pelicula" class="letter">
                        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" alt="">
                        <h3 class="titulo_pelicula">${result[i].title}</h3>
                        <p class="fecha">${result[i].release_date}</p>
                        </a></article>`
    }

    ulrecomendaciones.innerHTML = contenido;


  
    return data;
})
.catch(function(error) {
    return error;
});

let mostrar = false;
recomendaciones.addEventListener('click', function (e) {
    e.preventDefault();

    if (mostrar) {
        ulrecomendaciones.style.display = 'none';
        recomendaciones.innerText = 'VER RECOMENACIONES'
        mostrar = false;
    } else {
        ulrecomendaciones.style.display = 'flex'
        recomendaciones.innerText = 'OCULTAR RECOMENDACIONES'
        mostrar = true;
    }
})