let qs = location.search
let qsobj = new URLSearchParams(qs);
let idserie = qsobj.get('id')
let type = qsobj.get('type')
let urlUserairing_today = 'https://api.themoviedb.org/3/tv/airing_today?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1'
let urlUserdetalleserie = `https://api.themoviedb.org/3/tv/${idserie}?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`
let urlverseries = `https://api.themoviedb.org/3/tv/${idserie}/recommendations?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1`
let favorito = document.querySelector('#clickfav')
let recomendaciones = document.querySelector('#ver_recomendaciones')
let maindetailserie = document.querySelector('#centrar1Sin')
let titulo_h3 = document.querySelector('#titulo1')
let titulo_h32 = document.querySelector('#titulo2')
let titulo_h33 = document.querySelector('#titulo3')
let cartelera = document.querySelector('#cartelera')
let calificacion = document.querySelector('#calificacion')
let estreno = document.querySelector('#estreno')
let ul = document.querySelector('#ul')
let sinopsis = document.querySelector('#overview')
let generos = document.querySelector('#generos')
let temporadas = document.querySelector('#temporadas')
let main_series = document.querySelector('#main_series')
let ulrecomendaciones = document.querySelector('#ulrecomendaciones')

if (type == null || idserie == null) {
    fetch(urlUserairing_today)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        let result = data.results; 
        let contenido = "";

        for (let i = 0; i < 5; i++) {
            contenido += `<article class="cajahija"><a href="./detail-serie.html?id=${result[i].id}&type=serie" class="letter">
                            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" alt="">
                            <h3 class="titulo_pelicula">${result[i].name}</h3>
                            <p class="fecha">${result[i].first_air_date}</p>
                            </a></article>`
        }

        maindetailserie.innerHTML = contenido;


    
        return data;
    })
    .catch(function(error) {
        return error;
    });
    
}

else{fetch(urlUserdetalleserie)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        let result = data.genres
        sinopsis.innerText = `OVERVIEW: ${data.overview}`;
        titulo_h3.innerText = data.name;
        titulo_h32.innerText = data.name;
        titulo_h33.innerText = `SERIE: ${data.name}`;
        cartelera.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        calificacion.innerText = `QUALIFICATION: ${data.vote_average} / 10`;
        estreno.innerText = `RELEASE DATE: ${data.first_air_date}`;
        temporadas.innerText = `${data.number_of_seasons} seasons`

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

/*Ver recomendaciones*/
fetch(urlverseries)
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
                        <h3 class="titulo_pelicula">${result[i].name}</h3>
                        <p class="fecha">${result[i].first_air_date}</p>
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