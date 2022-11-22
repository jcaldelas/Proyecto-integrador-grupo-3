let section = document.querySelector('#section_pelis')
let section2 = document.querySelector('#section_series')
let titulo = document.querySelector('#titulo')
let titulo_1 = document.querySelector('#titulo_peliculas')
let titulo_2 = document.querySelector('#titulo_series')
let qs = location.search
let qsobj = new URLSearchParams(qs);
let buscador = qsobj.get('id')
let type = qsobj.get('type')
let genre = qsobj.get('genre')
let urlUser_movie = `https://api.themoviedb.org/3/discover/movie?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${buscador}&with_watch_monetization_types=flatrate`
let urlUser_series = `https://api.themoviedb.org/3/discover/tv?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${buscador}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

if (type == 'pelicula') {titulo_2.innerText = ''
    titulo_1.innerText = `Todas las películas del género "${genre}"`
    fetch(urlUser_movie)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let result = data.results
        console.log(result)
    
        let contenido = "";
       
    
        for (let i = 0; i < 5; i++) {
            contenido += `<article class="cajahija">
                            <a href="./detail-movie.html?id=${result[i].id}&type=pelicula" class="letter">
                            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" alt="">
                            <h3 class="titulo_pelicula">${result[i].title}</h3>
                            <p class="fecha">${result[i].release_date}</p>
                            </a></article>`
        }
    
        section.innerHTML = contenido;
    
    
      
        return data;
    })
    .catch(function(error) {
        return error;
    });
    
}


else if (type == 'serie') {titulo_1.innerText = ''
    titulo_2.innerText = `Todas las series del genero "${genre}"`
    fetch(urlUser_series)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        let result = data.results;
        console.log(result)
        let contenido = "";
       
    
        for (let i = 5; i < 10; i++) {
            contenido += `<article class="cajahija-detailgeneros">
                            <a href="./detail-serie.html?id=${result[i].id}&type=serie" class="letter">
                            <img class = "imagen" class="tamaño-imagenes-generos" src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" alt="">
                            <h3 class="letter">${result[i].name}</h3>
                            <p class="fecha">${result[i].first_air_date}</p>
                            </a></article>`
        }
    
        section2.innerHTML = contenido;
    
    
      
        return data;
    })
    .catch(function(error) {
        return error;
    });
    
}





