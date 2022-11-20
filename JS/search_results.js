let qs = location.search
let qsobj = new URLSearchParams(qs);
let buscador = qsobj.get('buscador')
let titulo = document.querySelector('.letter')
titulo.innerHTML = `TITULOS RELACIONADOS CON TU BUSQUEDA "${buscador}"`
let urlUser = `https://api.themoviedb.org/3/search/multi?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&query=${buscador}&page=1&include_adult=false`

let section_searchresults = document.querySelector('#centrar2_searchresults')
fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = data.results
    console.log(result)
    

    if (result.length > 0) {
        let contenido = ''
        for (let i = 0; i < 5; i++) {
            contenido += `<article class="cajahija"><a href="./detail-movie.html?id=${result[i].id}" class="letter">
                        <img class="imagen" src='https://image.tmdb.org/t/p/w500/${result[i].poster_path}' alt="" class="fotoscars"></a>
                        <h3 class="letter">${result[i].title || result[i].name}</h3>
                        <p class="letter">${result[i].release_date || result[i].first_air_date}</p>
                        </article>`   
        }
    section_searchresults.innerHTML = contenido
    } else {
        titulo.innerHTML = `NO EXISTEN RESULTADOS CON "${buscador}"`
 
    }
   

    


  
    return data;
})
.catch(function(error) {
    return error;
});