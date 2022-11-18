let recuperostorage_movies = localStorage.getItem('favoritos_movies')
let recuperostorage_series = localStorage.getItem('favoritos_series')

/*En arrays*/
let favoritos_movies = JSON.parse(recuperostorage_movies)
let favoritos_series = JSON.parse(recuperostorage_series)

let main_peliculas = document.querySelector('#peliculas_fav')
let main_series = document.querySelector('#series_fav')

let peliculas = ''
for (let i = 0; i < favoritos_movies.length; i++) {
    let url = `https://api.themoviedb.org/3/genre/${favoritos_movies[i]}/list?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`
    fetch(url)
    .then(function (respuesta) {
        return respuesta.JSON;
    })
    .then(function (data) {
        console.log(data)
        return data;
    })
    .catch(function (error) {
        return error;
    })
}