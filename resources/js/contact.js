const inputs = document.querySelectorAll(".input");
const Combo = document.querySelectorAll(".cbo");
const textArea = document.querySelectorAll(".txtArea");

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    edad: /^\d{2,2}$/
};

function addclase() {
    let parent = this.parentNode;
    parent.classList.add("focus");
    parent.childNodes[1].classList.add("colorIconos");
}

function removeclase() {
    let parent = this.parentNode;
    if (this.value == "" || this.value == 0) {
        parent.classList.remove("focus");
        parent.childNodes[1].classList.remove("colorIconos");
    }
    validarFormulario();
    validarCombobox();
}
// inputs.forEach(input => {
// input.addEventListener("focus", addclase);
// input.addEventListener("blur", removeclase);
// });

textArea.forEach(area => {
    area.addEventListener("focus", addclase)
    area.addEventListener("keyup", validarFormulario);
    area.addEventListener("blur", removeclase);
})

inputs.forEach(input => {
    input.addEventListener("focus", addclase);
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", removeclase);
});

// combos.forEach((select) => {
//     select.addEventListener("change", validarCombobox);
//     select.addEventListener("blur", validarCombobox);
// });
Combo.forEach(cbo => {
    cbo.addEventListener("change", validarCombobox);
     cbo.addEventListener("focus", addclase)
    cbo.addEventListener("blur", removeclase);
})
function validarCombobox() {
    validarCampoTexbox("cboServicio", "Seleccione servicio");
}

const validarCampoTexbox = (campo, msj) => {
    if ($("#cboServicio").val() == 0) {
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("text-danger");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("text-success");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("fa-times-circle");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo_${campo} .mensaje`).classList.add("msgError");
        document.querySelector(`#grupo_${campo} .mensaje`).innerHTML = msj;
        /*  document.querySelector(`#grupo__${campo} .formulario__grupo-input i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__grupo-input i`).classList.remove('fa-times-circle');

    document.querySelector(`#grupo__${campo} .mensaje`).classList.remove('mensaje-error'); */
        campos[campo] = false;
    } else {
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("text-danger");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("text-success");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("fa-check-circle");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo_${campo} .mensaje`).innerHTML = "";

        campos[campo] = true;
    }
};

function validarFormulario(e) {
    switch (e.target.name) {

        case "txtNombre": validarCampo(expresiones.nombre, e.target, "txtNombre", "Ingrese correctamente sus Nombres");

            break;
        case "txtApellidos": validarCampo(expresiones.nombre, e.target, "txtApellidos", "Ingrese correctamente sus Apellidos");
            break;
        case "txtEmail": validarCampo(expresiones.correo, e.target, "txtEmail", "Ingrese correctamente su correo");
            break;
        case "txtTelefono": validarCampo(expresiones.telefono, e.target, "txtTelefono", "Ingrese correctamente su N° telefono/celular solo numeros");
            break;
        case "txtRazonSocial": validarCampo(expresiones.nombre, e.target, "txtRazonSocial", "Ingrese correctamente razon social");
            break;
        case "txtSector": validarCampo(expresiones.nombre, e.target, "txtSector", "Ingrese correctamente Sector");
            break;
        case "txtMensaje": validarCampo(expresiones.nombre, e.target, "txtMensaje", "Ingrese correctamente Descripcion");
            break;
    }
};

const validarCampo = (expresion, input, campo, msj) => { // alert(expresion.test(input.value));
    if (input.value == "") {
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo_${campo} .mensaje`).innerHTML = "";
    } else if (expresion.test(input.value)) {

        // document.getElementById(`${campo}`).classList.add("inputExito");
        // document.getElementById(`${campo}`).classList.remove("inputErrpor");
        // document.getElementById(`grupo__${campo}`).classList.remove("datosIncorrectos");
        // document.getElementById(`grupo__${campo}`).classList.add("datoscorrecto");
        // document.querySelector(`#grupo__${campo} .container-inputs span`).classList.add("fa-check-circle");
        // document.querySelector(`#iconos`).classList.add("fa-check-circle");
        // document.querySelector(`#iconos`).classList.remove("fa-times-circle");

        if (input.value.length > 2) {
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("text-danger");
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("text-success");
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("fa-check-circle");
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("fa-times-circle");
            document.querySelector(`#grupo_${campo} .mensaje`).innerHTML = "";
            campos[campo] = true;
        } else {
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("text-danger");
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("text-success");
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("fa-times-circle");
            document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("fa-check-circle");
            document.querySelector(`#grupo_${campo} .mensaje`).classList.add("msgError");
            document.querySelector(`#grupo_${campo} .mensaje`).innerHTML = msj;
        }


        // document.querySelector(`#grupo__${campo} .mensaje`).classList.remove("mensaje-error");
        //
    } else {
        // document.getElementById(`${campo}`).classList.add("inputErrpor");
        // document.getElementById(`${campo}`).classList.remove("inputExito");
        // document.getElementById(`grupo__${campo}`).classList.add("datosIncorrectos");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("text-danger");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("text-success");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.add("fa-times-circle");
        document.querySelector(`#grupo_${campo} .container-inputs .iconos`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo_${campo} .mensaje`).classList.add("msgError");
        document.querySelector(`#grupo_${campo} .mensaje`).innerHTML = msj;
        // document.querySelector(`#grupo__${campo} .mensaje`).classList.add("mensaje-error");
        // document.querySelector(`#grupo__${campo} .mensaje`).classList.remove("mensaje-exito");
        // if ($("#CboPais").val() != 0) {
        //     document.querySelector(`#grupo__${campo} .mensaje`).innerHTML = msj;
        // }
        // campos[campo] = false;
    }

};
