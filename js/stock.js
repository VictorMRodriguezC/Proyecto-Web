
const contenedorJuegos = document.getElementById(`mostrarjuegos`);


let listajuegos = [{
  id: 001, nombre: "Apex Legends",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 15
}, {
  id: 002, nombre: "CSGO",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10
}, {
  id: 003, nombre: "Fortnite",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10
}, {
  id: 003, nombre: "Overwatch",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10
}, {
  id: 004, nombre: "RainbowSix",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10
}, {
  id: 004, nombre: "Rocket League",
  descripcion: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  cantidad: 10
}];

mostrarProductos(listajuegos);

function mostrarProductos(array) {
  contenedorJuegos.innerHTML = ``;
  for (const juegos of array) {
    let div = document.createElement(`div`);
    div.className = `juegos`;

    div.innerHTML = `<div class="col mb-4">
      <div class="card">
        <img src="../img/Apex.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${juegos.nombre}</h5>
          <p class="card-text">${juegos.descripcion}</p>
          <p class="card-text">${juegos.cantidad}</p>
          
        </div>
      </div>
    </div>`

    contenedorJuegos.appendChild(div);


  }

  /*const btnEliminar = document.getElementById(`eliminar${producto.id}`)
  console.log(btnEliminar);
  btnEliminar.onclick = () => console.log(`El producto ${producto.nombre} ha sido eliminado del carrito`);*/
}



function agregarcarrito(array){
  


}





console.log(listajuegos);

