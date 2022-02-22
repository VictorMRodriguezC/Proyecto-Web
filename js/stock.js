
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



function agregarcarrito(array) {



}

$("#carrucelid").prepend(`


  <div id="carouselExampleCaptions" class="carousel " data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" style="background-color: red" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1" style="background-color: red"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2" style="background-color: red"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3" style="background-color: red"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="4" style="background-color: red"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="5" style="background-color: red"></li>
    </ol>
    <div class="carousel-inner ">
      <div class="carousel-item active">
        <img src="img/Apex.jpg" class="d-block card-img-top " alt="...">

      </div>
      <div class="carousel-item">
        <img src="img/CSGO.jpg" class="d-block img-fluid" alt="...">

      </div>
      <div class="carousel-item">
        <img src="img/Fortnite.jpg" class="d-block img-fluid" alt="...">

      </div>
      <div class="carousel-item">
        <img src="img/rocketleague.jpg" class="d-block img-fluid" alt="...">

      </div>
      <div class="carousel-item">
        <img src="img/RainbowSix.jpg" class="d-block img-fluid" alt="...">

      </div>
      <div class="carousel-item">
        <img src="img/Overwatch.jpg" class="d-block img-fluid" alt="...">

      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions"
      data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions"
      data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</div>
`);

$("#btn1").click(() => { 
  $("#carrucelid").slideUp(2000);
});
$("#btn2").click(() => { 
  $("#carrucelid").slideDown(2000);
});




console.log(listajuegos);

