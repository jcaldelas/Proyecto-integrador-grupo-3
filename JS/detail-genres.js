let urlUser = 'https://api.themoviedb.org/3/discover/movie?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
let section = document.querySelector('.centrar2_seriespelis')
let section2 = document.querySelector('.centrar2-generos_seriespelis')



fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    
    let result = data.results;
    console.log(result)
    let characters = "";
   

    for (let i = 0; i < 5; i++) {
        characters += `<article class="cajahija">
                        <a href="./JERO/detail-movie.html?id=${result[i].id}" class="letter">
                        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                        <h3 class="titulo_pelicula">${result[i].title}</h3>
                        <p class="fecha">${result[i].release_date}</p>
                        </a></article>`
    }

    section.innerHTML = characters;


  
    return data;
})
.catch(function(error) {
    return error;
});


fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    
    let result = data.results;
    console.log(result)
    let characters = "";
   

    for (let i = 5; i < 10; i++) {
        characters += `<article class="cajahija-generos">
                        <a href="../JERO/detail-movie.html?id=${result[i].id}" class="letter">
                        <img class="tamaño-imagenes-generos" src="https://image.tmdb.org/t/p/w500/${result[i].backdrop_path}" alt="">
                        <h3 class="letter">${result[i].title}</h3>
                        <p class="fecha">${result[i].release_date}</p>
                        </a></article>`
    }

    section2.innerHTML = characters;


  
    return data;
})
.catch(function(error) {
    return error;
});



