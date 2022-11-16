let qs = location.search
let qsobj = new URLSearchParams(qs);
let idpelicula = qsobj.get('id')
let favorito = document.querySelector('.clickfav')
let urlUserdetallepelis = `https://api.themoviedb.org/3/movie/436270/watch/providers?api_key=cf7707fd77a1290e2423ba7e39e253a8`

fetch(urlUserdetallepelis)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
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
localStorage.clear()
let favoritos = []
favorito.addEventListener('clickfav', function (e) {
    e.preventDefault()
    favoritos.push(idpelicula)
    localStorage.setItem("favoritos", favoritos)
})
let recuperostorage = localStorage.getItem('favoritos')