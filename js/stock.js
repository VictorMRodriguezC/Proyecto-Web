
const contenedorJuegos = document.getElementById(`mostrarjuegos`);


let listajuegos = [{
  id: 001, nombre: "Apex Legends",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 15, Img: "../img/Apex.jpg"
}, {
  id: 002, nombre: "CSGO",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10, Img: "../img/CSGO.jpg"
}, {
  id: 003, nombre: "Fortnite",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10, Img: "../img/Fortnite.jpg"
}, {
  id: 003, nombre: "Overwatch",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10, Img: "../img/Overwatch.jpg"
}, {
  id: 004, nombre: "RainbowSix",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10, Img: "../img/RainbowSix.jpg"
}, {
  id: 004, nombre: "Rocket League",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10, Img: "../img/rocketleague.jpg"
}];


mostrarProductos(listajuegos);
function mostrarProductos(array) {
  contenedorJuegos.innerHTML = ``;
  for (const juegos of array) {
    let div = document.createElement(`div`);
    div.className = `juegos`;

    div.innerHTML = `<div class="col mb-4">
    <div class="card h-100">
      <img src="${juegos.Img}" class="img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${juegos.nombre}</h5>
        <p class="card-text">${juegos.descripcion}</p>
        <p> $${juegos.cantidad}</p>
      </div>
      <button id="btncomprar${juegos.id} type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
  Agregar al Carrito
</button>
    </div>
  </div>`

    contenedorJuegos.appendChild(div);


  }

  /*const btnEliminar = document.getElementById(`eliminar${producto.id}`)
  console.log(btnEliminar);
  btnEliminar.onclick = () => console.log(`El producto ${producto.nombre} ha sido eliminado del carrito`);*/
}





