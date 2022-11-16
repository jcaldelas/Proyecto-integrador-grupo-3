let urlUserupcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1'
let urlUserpopular = 'https://api.themoviedb.org/3/movie/popular?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1'
let urlUsertoprated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1'
let urlUserairing_today = 'https://api.themoviedb.org/3/tv/airing_today?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1'
let urlUserpopulartv = 'https://api.themoviedb.org/3/tv/popular?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1S'
let urlUsertopratedtv = 'https://api.themoviedb.org/3/tv/top_rated?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&page=1'


let sectionupcoming = document.querySelector('.centrar2upcoming')
fetch(urlUserupcoming)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    
    let result = data.results;
    let contenido = "";

    for (let i = 0; i < 5; i++) {
        contenido += `<article class="cajahija"><a href="./JERO/detail-movie.html?id=${result[i].id}" class="letter">
                        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                        <h3 class="titulo_pelicula">${result[i].title}</h3>
                        <p class="fecha">${result[i].release_date}</p>
                        </a></article>`
    }

    sectionupcoming.innerHTML = contenido;


  
    return data;
})
.catch(function(error) {
    return error;
});


let sectionpopular = document.querySelector('.centrar2_popularmovie')
fetch(urlUserpopular)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    
    let result = data.results;
    let characters = "";

    for (let i = 0; i < 5; i++) {
        characters += `<article class="cajahija"><a href="./JOACO/detail-serie.html?id=${result[i].id}" class="letter">
                        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                        <h3 class="titulo_pelicula">${result[i].title}</h3>
                        <p class="fecha">${result[i].release_date}</p>
                        </a></article>`
    }

    sectionpopular.innerHTML = characters;


  
    return data;
})
.catch(function(error) {
    return error;
});

let sectiontoprated = document.querySelector('.centrar2_toprated')
fetch(urlUsertoprated)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = data.results
    let content = "";

    for (let i = 0; i < 5; i++) {
        content += ` <article class="cajahija"><a href="./JERO/detail-movie.html?id=${result[i].id}" class="letter">
                      <img class= "imagen" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                      <h3 class="titulo_pelicula">${result[i].title}</h3>
                      <p class="fecha">${result[i].release_date}</p>
                      </a></article>`
    }

    sectiontoprated.innerHTML = content;


  
    return data;
})
.catch(function(error) {
    return error;
});

let sectionairing_today = document.querySelector('.centrar2_airing_today')
fetch(urlUserairing_today)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = data.results
    let content = "";

    for (let i = 0; i < 5; i++) {
        content += ` <article class="cajahija"><a href="./JOACO/detail-serie.html?id=${result[i].id}" class="letter">
                      <img class= "imagen" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                      <h3 class="titulo_pelicula">${result[i].name}</h3>
                      <p class="fecha">${result[i].first_air_date}</p>
                      </a></article>`
    }

    sectionairing_today.innerHTML = content;


  
    return data;
})
.catch(function(error) {
    return error;
});

let sectionpopulartv = document.querySelector('.centrar2_populartv')
fetch(urlUserpopulartv)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = data.results
    let content = "";

    for (let i = 0; i < 5; i++) {
        content += ` <article class="cajahija"><a href="./JOACO/detail-serie.html?id=${result[i].id}" class="letter">
                      <img class= "imagen" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                      <h3 class="titulo_pelicula">${result[i].name}</h3>
                      <p class="fecha">${result[i].first_air_date}</p>
                      </a></article>`
    }

    sectionpopulartv.innerHTML = content;


  
    return data;
})
.catch(function(error) {
    return error;
});

let sectiontopratedtv = document.querySelector('.centrar2_topratedtv')
fetch(urlUsertopratedtv)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = data.results
    console.log(result)
    let content = "";

    for (let i = 0; i < 5; i++) {
        content += `<article class="cajahija"><a href="./JOACO/detail-serie.html?id=${result[i].id}" class="letter">
                     <img class= "imagen" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                     <h3 class="titulo_pelicula">${result[i].name}</h3>
                     <p class="fecha">${result[i].first_air_date}</p>
                     </a></article> `
    }

    sectiontopratedtv.innerHTML = content;
    
    return data;
})
.catch(function(error) {
    return error;
});