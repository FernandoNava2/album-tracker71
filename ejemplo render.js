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