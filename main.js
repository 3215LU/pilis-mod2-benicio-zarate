function onClick (event) {
    event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
  
  
    const mensaje = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts%22", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario',
              'success'
          );
          cleanForm();
          /* redirectUrl(); */
      })
      .catch((err) => console.log(err));
}

function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectUrl(){
    window.location.href = "https://google.com%22;"  
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);


let contenedor = document.getElementById("clima");
let datos = null;

fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.184014695495744&lon=-65.33153392590026&appid=160031d61625f9bc412611ff76438779&units=metric&lang=es")
  .then(response => response.json())
  .then(response => {
    datos = response;
    mostrarDatos(datos)
  })
  .catch(error => console.log(error))

function mostrarDatos(datos) {
    let temperatura = document.createElement("p");
    let humedad = document.createElement("p");
    let termica = document.createElement("p");
    let descripcion = document.createElement("p");
    
    temperatura.innerHTML = "Temperatura: " + datos.main.temp + " c";
    humedad.innerHTML = "Humedad: " + datos.main.humidity + "%";
    termica.innerHTML = "Sensación térmica: " + datos.main.feels_like + " c";
    descripcion.innerHTML = "Cielo: " + datos.weather[0].description;

    contenedor.appendChild(temperatura);
    contenedor.appendChild(humedad);
    contenedor.appendChild(termica);
    contenedor.appendChild(descripcion);
}