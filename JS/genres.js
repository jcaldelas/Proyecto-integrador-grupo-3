let urlUser = 'https://api.themoviedb.org/3/genre/movie/list?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US'

let section_pelis = document.querySelector('.centrar2-generos_pelis')
/*Genero pelicula*/
fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    
    let result = data.genres;
    let characters = "";

    for (let i = 0; i < 5; i++) {
        characters += `<article class="cajahija-generos">
                        <a href="../EROS/detail-genres.html?id=${result[i].id}&type=pelicula" class="letter">
                        <h3 class="letter">${result[i].name}</h3>
                        </a></article>`
    }

    section_pelis.innerHTML = characters;


  
    return data;
})
.catch(function(error) {
    return error;
});

/*Genero serie*/
let section_series = document.querySelector('.centrar2-generos_series')
fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    
    let result = data.genres;
    let contenido = "";

    for (let i = 5; i < 10; i++) {
        contenido += ` <article class="cajahija-generos">
                         <a href="../EROS/detail-genres.html?id=${result[i].id}&type=serie" class="letter">
                         <h3 class="letter">${result[i].name}</h3>
                         </a></article>`
    }
    section_series.innerHTML = contenido;


  
    return data;
})
.catch(function(error) {
    return error;
});
