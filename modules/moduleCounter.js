/*  Esta función se exporta dentro del index.js
    para modificar el contador de las imagenes pares 
*/
function incrementViews(n){
    return n+1;
}

function views(idElement){
    let value = parseInt(document.getElementById(idElement).innerHTML)
    let newValue = incrementViews(value);
    console.log(newValue)
    document.getElementById(idElement).innerHTML = newValue;
}

export { views };