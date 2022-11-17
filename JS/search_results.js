let qs = location.search
let qsobj = new URLSearchParams(qs);
let buscador = qsobj.get('buscador')
let titulo = document.querySelector('.letter')
titulo.innerHTML = `TITULOS RELACIONADOS CON TU BUSQUEDA "${buscador}"`
let urlUser = `ttps://api.themoviedb.org/3/search/multi?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US&query=${buscador}&page=1&include_adult=false`
fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    


  
    return data;
})
.catch(function(error) {
    return error;
});