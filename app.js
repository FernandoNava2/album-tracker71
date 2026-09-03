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
const mainEL = document.querySelector("#album-container");

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

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    console.log(formData.get("title")); //obtiene un solo dato
    console.log(formData);
    const dataArray = [...formData];
    console.log(dataArray);
    const dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);
    // Como hacer todo eso en una linea const album 
    const album = Object.fromEntries([... new FormData(formEl)])
});

const card = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
`;

/**
 * Manipulacion de la interfaz
 *  Propiedad llamada inherthtml dentro de ella podemos observar
 * todo el html que vive dentro de la etiqueta seleccionada
 * si lo usamos sin cuidado podemos borrar todo lo que estaba
 * !importante 
 * !No usas innerthtml para renderizar  solo texto si estoy rcibiendo y mostrando inmediatamente (propenso a inteccion html)
 * 2. Propiedad llamada textContent esta solo muestra el texto que tiene dentro
 * 
 * */ 

console.log(mainEL.innerHTML);
console.log("text content");
console.log(mainEL.textContent);

mainEL.innerHTML += "<h1>Hola ch71</h1>";
mainEL.innerHTML += card;
console.log(mainEL.innerHTML);


//mainEL.textContent += "hola";
//mainEL.textContent += card;

/**
 * Insert adjacent HTML
 * Permite inserta html en el contenedor sin borrar lo que ya esta
 * y en una posicion especifica
 * y tiene 4 posiciones
 * 1. beforebegin
 * 2. beforeend
 * 3. afterbeging
 * 4. afterend
*/


mainEL.insertAdjacentHTML(
    "beforeend",
    "<p>Insertado por inset adjacent html</p>",
);

mainEL.insertAdjacentHTML("beforeend", card);