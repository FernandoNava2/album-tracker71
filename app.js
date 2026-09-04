/**
 * 
 * Todo lo que seleccionemos al principio debe ser seleccionado mediante el document
 * 
 * Opcciones de seleccion
 * Clasicas
 * getElementByld
 * getElementByClassName (permite usar mas de un elemento)
 * 
 * 
 * Modernas
 * Nos permite seleccionar un selector css
 * *Selectores css
 * *form
 * *clase .
 * *.form-control
 * *id #por ejemplo #title
 * 
 * querySelector Si usamos un selector de clase solo va seleccionar la primer coincidencia
 * quertSelectorAll
*/

const formEl = document.getElementById("album-form");
const mainEl = document.querySelector("#album-container");
let albums = [];

/**Eventos
 * Es cualquier accion que realiza el usuario en la pagina web
 * Escuchar por el evento
 * Escuchamos por un evento para que cuando ocurra desencadene una respuesta
 * 
 * Pasos para extraer la info del formulario
 * 1. Agregar un event listener del evento submit
 * 2. prevenir el comportamiento por default
 * 3. construir un form data dandole el elemento al formulario
 * 4. Extraer la informacion del formData y guardarla en un array de arrays usando el spread operator
 * El spread operator desempaqueta la informacion de un iterable y la guarda en otro
 * 5. Crear un objeto con la informacion usando Object.fromEntries()
 * object from entries recibe un array de arrays
*/

window.addEventListener("load", (event) => {
  if (getItemLocalStorage("albums") == undefined) return;
  albums = [...getItemLocalStorage("albums")];
  albums.map((album) => renderCard(album, mainEl));

/**
 * Segunda opcion
 * getItemLocalStorage("albums").forEach((album) => albums.push (album))
 */
});


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    console.log(formData.get("title")); //obtiene un solo dato
    console.log(formData);
    const dataArray = [...formData];
    console.log(dataArray);
    const album = Object.fromEntries(dataArray);
    console.log(album);
    // Como hacer todo eso en una linea const album 
    //const album = Object.fromEntries([... new FormData(formEl)])
    albums.push(album);
    setLocalStorage("albums", albums);
    //limpiamos antes de volver a renderizar las cards, para evitar la acumulacion
    mainEl.innerHTML = "";
    //renderizamos todas las cards dentro del array del abums
    
    albums.map((album) => renderCard(album, mainEl));
    formEl.reset();

});

const renderCard = (albumObject, htmlElement) => {
  const card = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${albumObject.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${albumObject.artist}</h6>
        <p class="card-text">Género: ${albumObject.genre}</p>
        <a href="#" class="card-link">Año de lanzamiento: ${albumObject.year}</a>
        <a href="#" class="card-link">Rating: ${albumObject.rating}</a>
      </div>
    </div> 
  `;
  
  htmlElement.insertAdjacentHTML("beforeend", card);
};

const setLocalStorage = (key, value) => {
  //Paso 1 convertir el valor a texto
  const textValue = JSON.stringify(value);
  //Paso 2 almacenar
  localStorage.setItem(key, textValue);
};

const getItemLocalStorage = (key) => {
  if(localStorage.getItem(key) == null) return;
  //convertimos de texto a lenguaje Js
  const data = JSON.parse(localStorage.getItem(key));
  return data;

};


/**
 * 
 * Opcion solo para este scipt en mainEL ahi sirve solo para este
 * creo, checar mainel y htmlelemnt
 * 
 * const renderCard = (albumObject, htmlElement) => {
const card = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${albumObject.title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${albumObject.artist}</h6>
      <p class="card-text">Genero: ${album.genre}</p>
      <a href="#" class="card-link">Año de lanzamiento ${albumObject.year}</a>
      <a href="#" class="card-link">Rating: ${albumObject.ratiting}</a>
    </div>
  </div>  
  `;
  mainEl.insertAdjacentHTML("beforeend", card);
}; */
