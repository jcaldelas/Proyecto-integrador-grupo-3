let urlUser = 'https://api.themoviedb.org/3/search/company?api_key=cf7707fd77a1290e2423ba7e39e253a8&page=1'
let qs = location.search
let qsobj = new URLSearchParams(qs);
let buscador = qsobj.get('buscador')
let titulo = document.querySelector('.letter')
titulo.innerHTML = `TITULOS RELACIONADOS CON TU BUSQUEDA "${buscador}"`
