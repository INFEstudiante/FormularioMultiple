
let form = document.querySelector('.form-register');
let progressOptions = document.querySelectorAll('.progressbar__option');

form.addEventListener('click', function(e) {
let element = e.target;
let isButtonNext = element.classList.contains('step__button--next');
let isButtonBack = element.classList.contains('step__button--back');
if (isButtonNext || isButtonBack) {
let currentStep = document.getElementById('step-' + element.dataset.step);
let jumpStep = document.getElementById('step-' + element.dataset.to_step);
currentStep.addEventListener('animationend', function callback() {
currentStep.classList.remove('active');
jumpStep.classList.add('active');
if (isButtonNext) {
currentStep.classList.add('to-left');
progressOptions[element.dataset.to_step - 1].classList.add('active');
} else {
jumpStep.classList.remove('to-left');
progressOptions[element.dataset.step - 1].classList.remove('active');
}
currentStep.removeEventListener('animationend', callback);
});
currentStep.classList.add('inactive');
jumpStep.classList.remove('inactive');
}

});

function mostrar() {

    //definir las variables mediante el ID 
    let name1 = document.getElementById('nombre1').value;
    let lastName1 = document.getElementById('apellidos1').value;
    let edad1 = document.getElementById('edad1').value;
    let FamilyName1= document.getElementById('nombreFamiliar1').value;
    let parentesco1= document.getElementById('parentesco1').value;
    let edadParents1= document.getElementById('edadParentesco1').value;
    let enfermedad1= document.getElementById('enfermedad1').value;
    let timeEnfer1= document.getElementById('tiempoEnfermedad1').value; 
    let Fecha1= document.getElementById('fecha1').value;
    let CentroMedico1= document.getElementById('centroMedico1').value;
    let diagnostico1= document.getElementById('diagnostico1').value;

    //para datos del paciente #2
    let name2 = document.getElementById('nombre2').value;
    let lastName2 = document.getElementById('apellidos2').value;
    let edad2 = document.getElementById('edad2').value;
    let FamilyName2= document.getElementById('nombreFamiliar2').value;
    let parentesco2= document.getElementById('parentesco2').value;
    let edadParents2= document.getElementById('edadParentesco2').value;
    let enfermedad2= document.getElementById('enfermedad2').value;
    let timeEnfer2= document.getElementById('tiempoEnfermedad2').value;
    let Fecha2= document.getElementById('fecha2').value;
    let CentroMedico2=document.getElementById('centroMedico2').value;
    let diagnostico2=document.getElementById('diagnostico2').value;

    //para los datos del paciente #3
    let name3 = document.getElementById('nombre3').value;
    let lastName3 = document.getElementById('apellidos3').value;
    let edad3 = document.getElementById('edad3').value;
    let FamilyName3= document.getElementById('nombreFamiliar3').value;
    let parentesco3= document.getElementById('parentesco3').value;
    let edadParents3= document.getElementById('edadParentesco3').value;
    let enfermedad3= document.getElementById('enfermedad3').value;
    let timeEnfer3= document.getElementById('tiempoEnfermedad3').value;
    let Fecha3= document.getElementById('fecha3').value;
    let CentroMedico3= document.getElementById('centroMedico3').value;
    let diagnostico3= document.getElementById('diagnostico3').value;

   

    //funcion alert para mostrar los datos ingresados del formulario.
    alert('Ingresó el nombre del paciente #1: ' + name1 +'\nIngresó los apellidos: ' + lastName1 + '\nIngreso la edad: ' + edad1 +
    '\nIngresó el nombre del familiar: ' + FamilyName1 + '\nIngreso el parentesco: ' + parentesco1 + '\nIngresó la edad del familiar: '+ edadParents1 +
    '\nPadece una enfermedad de: ' + enfermedad1 + '\nEl tiempo de esa enfermedad es: ' + timeEnfer1+ '\nLa fecha para el internamiento es para: ' + Fecha1 +
    '\nCentro médico: '+ CentroMedico1 + '\nSu diagnóstico es:\n ' + diagnostico1 );

    alert('Ingresó el nombre del paciente #2: ' + name2 +'\nIngresó los apellidos: ' + lastName2 + '\nIngresó la edad: ' + edad2 +
    '\nIngresó el nombre del familiar: ' + FamilyName2 + '\nIngreso el parentesco: ' + parentesco2 + '\nIngresó la edad del familiar: '+ edadParents2 +
    '\nPadece una enfermedad de: ' + enfermedad2 + '\nEl tiempo de esa enfermedad es: ' + timeEnfer2+  '\nLa fecha para el internamiento es para: ' + Fecha2 +
    '\nCentro médico: '+ CentroMedico2 + '\nSu diagnóstico es:\n ' + diagnostico2 );
    


    alert('Ingresó el nombre del paciente #3: ' + name3 +'\nIngresó los apellidos: ' + lastName3 + '\nIngresó la edad: ' + edad3 +
    '\nIngresó el nombre del familiar : ' + FamilyName3 + '\nIngresó el parentesco: ' + parentesco3 + '\nIngresó la edad del familiar: '+ edadParents3 +
    '\nPadece una enfermedad de: ' + enfermedad3 + '\nEl tiempo de esa enfermedad es: ' + timeEnfer3+  '\nLa fecha para el internamiento es para: ' + Fecha3 +
    '\nCentro médico: '+ CentroMedico3 + '\nSu diagnóstico es:\n ' + diagnostico3);
   
}



