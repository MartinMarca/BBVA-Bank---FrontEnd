function soloLetras(e){
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key).toLowerCase();

    letras = " abcdefghijklmnopqrstuvwxyz";

    especialesAscii = "8-37-38-46-164"; //caracteres especiales permitidos diferentes de letras

    tecladoEspecial = false;

    for(var i in especialesAscii){ //de esta manera permite el ingreso de caracteres especiales
        if(key == especialesAscii[i]){
            tecladoEspecial = true;
            break;
        }
    }

    if(letras.indexOf(teclado) == -1 && !tecladoEspecial){ //si lo capturado por teclado no se encuetra en "letras" y no es un caracter especial retorna falso y no permite el ingreso de ese valor
        return false;
    }
}

function soloNumeros(e){
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key);

    numeros = "0123456789";

    especialesAscii = "8-37-38-46"; 

    tecladoEspecial = false;

    for(var i in especialesAscii){ 
        if(key == especialesAscii[i]){
            tecladoEspecial = true;
            break;
        }
    }

    if(numeros.indexOf(teclado) == -1 && !tecladoEspecial){ 
        return false;
    }
}

function validarEmail(e){
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key);

    caracteresValidos = "abcdefghijklmnopqrstuvwxyz0123456789-_~!$&'()*+,;=:.@";

    especialesAscii = "8-37-38-46"; 

    tecladoEspecial = false;

    for(var i in especialesAscii){ 
        if(key == especialesAscii[i]){
            tecladoEspecial = true;
            break;
        }
    }

    if(caracteresValidos.indexOf(teclado) == -1 && !tecladoEspecial){ 
        return false;
    }
}

function validarFormularioCuenta(){
    var fecha, nombre, apellido, email, clave, dni;
    fecha = document.getElementById("fecha_nac").value;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    clave = document.getElementById("clave").value;
    dni = document.getElementById("dni").value;
    selectedRadioCtaCte = document.getElementById("cta_cte");
    selectedRadioCajaAhorro = document.getElementById("caja_ahorro");

    

    
    if(nombre == ""){
        alert("Te faltó completar el nombre");
        return false;
    }

    if(apellido == ""){
        alert("Te faltó completar el apellido");
        return false;
    }
    if(dni == ""){
        alert("Te faltó completar el dni");
        return false;
    }
    if(fecha == ""){
        alert("Te faltó completar la fecha!");
        return false;
    }
    if(email == ""){
        alert("Te faltó completar el email");
        return false;
    }
    if(clave == ""){
        alert("Te faltó completar la clave");
        return false;
    }
    

    if(!selectedRadioCajaAhorro.checked && !selectedRadioCtaCte.checked){
        alert("Debes seleccionar un tipo de cuenta");
        return false;
    }

    if(validarFormatoFecha(fecha)){
        if(!existeFecha(fecha)){
              alert("La fecha introducida no existe.");
              return false;
        }
    }else{
        alert("El formato de la fecha es incorrecto.");
        return false;
    }

    
    if( !validarEmail( email ) )
    {
        alert("El email NO es correcto");
        return false;
    }
      
    if(clave.length > 4 || clave.length < 4){
        alert("La clave debe contener 4 digitos!");
        return false;
    }

    alert("Registro exitoso!");
}

function validarFormularioContacto(){
    var email, nombre, textarea;
    
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    textarea = document.getElementById("textArea").value;

    if (nombre == ""){
        alert("Te faltó completar el nombre");
        return false;
    }

    if (email == ""){
        alert("Te faltó completar el email");
        return false;
    }

    if (textarea == ""){
        alert("Debes escribir un mensaje");
        return false;
    }

    if( !validarEmail(email) )
    {
        alert("El email NO es correcto");
        return false;
    }
    alert("Registro exitoso!");
}

function validarFormatoFecha(campo) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((campo.match(RegExPattern)) && (campo!='')) {
          return true;
    } else {
          return false;
    }
}

function existeFecha(fecha){
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year,month,'0');
    if((day-0)>(date.getDate()-0)){
          return false;
    }
    return true;
}

function validarEmail(email) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function registroExitosoCuenta(){
    if(validarFormularioCuenta()){
        alert("Registro exitoso");
        return true;
    }  
    return false;
}

function registroExitosoContacto(){
    if(validarFormularioContacto()){
        alert("Registro exitoso");
        return true;
    }
    return false;
}
