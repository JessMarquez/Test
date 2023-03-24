

let pets = []; //arreglo vacío
console.log("Register");
function Pet (nombreP, generoP, razaP, servicioP, telefonoP, correoP, direccionP){
    this.nombre=nombreP;
    this.genero=generoP;
    this.raza=razaP;
    this.telefono=telefonoP;
    this.correo=correoP;
    this.direccion=direccionP;
    this.servicio=servicioP;
    
}

function validacion(Pet){
    let valida=true;  // todo bien
    inputNombre.classList.remove("error");
    inputServicio.classList.remove("error");
    
   
   
    if(Pet.nombre == ""){//Comparación (Utilizar == > < >= <= !=)
        //si entro aqeí no es válida la mascota
        inputNombre.classList.add= ("error");
        console.log("error");
        valida=false;
     }

 
    //validar que el servicio no quede vacio
   
    
         
return valida;
       
 }


//crear función de registro

    //obtener los valores de los impuls
    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("txtGenero");
    let inputRaza=document.getElementById("txtRaza");
    let inputTelefono=document.getElementById("txtTelefono");
    let inputCorreo=document.getElementById("txtCorreo");
    let inputDireccion=document.getElementById("txtDireccion");
    let inputServicio=document.getElementById("selServicio");
    

    //crear funcion de registro
    function Registro(){
        console.log("Registro de mascotas...");

    // Crear objeto
    let newPet = new Pet (inputNombre.value,inputGenero.value, inputRaza.value, inputTelefono.value, inputDireccion, inputCorreo.value, 
    inputServicio.value);
    if (validacion (newPet)== true){ 
    // Imprimir el objeto en consola
    console.log(newPet);
    pets.push(newPet);
    displaycards();
    // Limpiar
    limpiarForm();
    }
}
function limpiarForm(){
    inputNombre.value= "";
    inputGenero.value= "";
    inputRaza.value= "";
    inputTelefono.value="";
    inputCorreo.value="";
    inputDireccion.value="";
    inputServicio.value= "";
    


 }
     
function init(){
    console.log("register");
    //objeto
    let Pet1 = new Pet ("Macchiato", "Macho", "Boxer", "Groming", "6861333333", "jmarquez4@uabc.edu.mx", "dinamica");
    pets.push(Pet1);
    let Pet2 = new Pet ("Rey", "Macho", "Pastor", "Vacunas", "68683388838", "jesus@gmail.com", "real");
    pets.push(Pet2);
    let Pet3 = new Pet ("Cheese", "Hembra", "Chihuahuueño", "Baño", "6861222232", "computaQhotmail.com", "caminos");
    pets.push(Pet3);
    let Pet4 = new Pet ("Kila", "Hembra", "Pastor Belga", "Vacuna", "6867447474", "marquez@uabc.edu.mx", "Cascadas");
    pets.push(Pet4);
    displaycards();
}
window.onload=init; //