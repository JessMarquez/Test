function displaycards(){
// declaración de variables
const DIV = document.getElementById("mascotas");

let card = "";

// recorrer el arreglo pets []
for(let i=0; i<pets.length;i++){
    card += `
    <div class= "card">
        <p>Nombre: ${pets[i].nombre} </p> 
        <p>Genero: ${pets[i].genero} </p>
        <p>Raza:   ${pets[i].raza}  </p>
        <P>Teléfono:   ${pets[i].telefono} </p>
        <p>E-mail: ${pets[i].correo} </p>
        <p>Dirección: ${pets[i].direccion} </p> 
        <p>Tipo de servicio: ${pets[i].servicio} </p>
        
     </div>
    `;  
}
console.log(card);

// crear el template de la tarjeta
// insertar la tarjeta en el HTML
DIV.innerHTML=card;

}