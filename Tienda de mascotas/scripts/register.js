let pets = []; //arreglo vacío
console.log("Register");
function Pet (nombreP, generoP, razaP, servicioP){
    this.nombre=nombreP;
    this.genero=generoP;
    this.raza=razaP;
    this.servicio=servicioP;
}

function validacion(Pet){
    let valida=true;  // todo bien
    inputNombre.classList.remove("error");
    inputGenero.classList.remove("error");
    if(Pet.nombre == ""){//Comparación (Utilizar == > < >= <= !=)
        //si entro aqeí no es válida la mascota
        inputNombre.classList.add= ("error");
        valida=false;
     }

 
    //validar que el servicio no quede vacio
    if (Pet.genero== ""){
        inputGenero.classList.add= ("error");
        valida=false;
    }
    
    return valida;
}

//crear función de registro

    //obtener los valores de los impuls
    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("txtGenero");
    let inputRaza=document.getElementById("txtRaza");
    let inpultServicio=document.getElementById("selServicio");

    //crear funcion de registro
    function Registro(){
        console.log("Registro de mascotas...");

    // Crear objeto
    let newPet = new Pet (inputNombre.value,inputGenero.value, inputRaza.value, 
    inpultServicio.value);
    if (validacion (newPet)== true);
    // Imprimir el objeto en consola
    console.log(newPet);
    pets.push(newPet);
    displayCards();
    // Limpiar
    limpiarForm();

     }
function limpiarForm(){
    inputNombre.value= "";
    inputGenero.value= "";
    inputRaza.value= "";
    inpultServicio= "";
 }
     
function init(){
    console.log("register");
    //objeto
    let Pet1 = new Pet ("Macchiato", "Macho", "Boxer", "Groming");
    pets.push(Pet1);
    let Pet2 = new Pet ("Rey", "Macho", "Pastor", "Vacunas");
    pets.push(Pet2);
    let Pet3 = new Pet ("Cheese", "Hembra", "Chihuahuueño", "Baño");
    pets.push(Pet3);
    let Pet4 = new Pet ("Kila", "Hembra", "Pastor Belga", "Vacuna");
    pets.push(Pet4);
    displayCards();
}
window.onload=init; //