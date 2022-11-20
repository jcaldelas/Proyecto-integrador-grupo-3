let recuperostorage_movies = localStorage.getItem('favoritos_movies')
let recuperostorage_series = localStorage.getItem('favoritos_series')

/*En arrays*/
let favoritos_movies = JSON.parse(recuperostorage_movies)
let favoritos_series = JSON.parse(recuperostorage_series)

let main_peliculas = document.querySelector('#peliculas_fav')
let main_series = document.querySelector('#series_fav')

let peliculas = ''
if (favoritos_movies == null || favoritos_movies.length == 0) {
    /* No hay favoritos */
    main_peliculas.innerHTML = '<p class="letter">No hay datos en favoritos<p/>'
} else {
    for (let i = 0; i < favoritos_movies.length; i++) {
   
        let url = `https://api.themoviedb.org/3/movie/${favoritos_movies[i]}?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`;
    
        fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(data) {

            peliculas += `<article class="cajahija-detailgeneros">
                           <a href="./detail-movie.html?id=${data.id}&type=pelicula" class="letter">
                           <img class = "imagen" class="tamaño-imagenes-generos" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
                           <h3 class="letter">${data.title}</h3>
                           <p class="fecha">${data.release_date}</p>
                           </a></article>`
            main_peliculas.innerHTML = peliculas;
            return data;
        })
        .catch(function(error) {
            console.log(error);
            return error;
        });
    
    };
}
let series = ''
if (favoritos_series == null || favoritos_series.length == 0) {
        /* No hay favoritos */
        main_series.innerHTML = '<p class="letter">No hay datos en favoritos<p/>'
} else {
    for (let i = 0; i < favoritos_series.length; i++) {
       
        let url = `https://api.themoviedb.org/3/tv/${favoritos_series[i]}?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`;
        
        fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(data) {
            console.log(data)
    
            series += `<article class="cajahija-detailgeneros">
                        <a href="./detail-serie.html?id=${data.id}&type=serie" class="letter">
                        <img class = "imagen" class="tamaño-imagenes-generos" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
                        <h3 class="letter">${data.name}</h3>
                        <p class="fecha">${data.first_air_date}</p>
                        </a></article>`
            main_series.innerHTML = series;
            return data;
        })
        .catch(function(error) {
            console.log(error);
            return error;
        });
        
    };
}