(function($) {
  /**
   * Dependiendo la vista que se este visitando,
   * se ejecuta determinado codigo...
   */

  /**
   * Codigo para la vista de seleccion de vacantes.
   */
  if (window.location.pathname === '/seleccionar-vacante.html') {
    var btnSiguiente = $('#js-btnSiguiente');
    var listVacantes = $('#js-listVacantes');

    function seleccionarVacante(list) {
      if (list.val()) {
        localStorage.setItem('vacante', list.val());
        window.location.href = '/unete-al-equipo.html';
      } else {
        alertify.error('Es necesario seleccionar una vacante.');
      }
    }

    btnSiguiente.on('click', function(e) {
      e.preventDefault();
      seleccionarVacante(listVacantes);
    });
  }

  /**
   * Codigo para la vista de unete al equipo.
   */

  if (window.location.pathname === '/unete-al-equipo.html') {
    var btnenviarVacante = $('#js-enviarVacante');
    var listVacante = $('#selected-vacancie');
    var vacanteGuardada = localStorage.getItem('vacante');

    listVacante.val(vacanteGuardada).change();

    function obtenerValores() {
      var vacante     = $('#selected-vacancie').val().length;
      var tipoVacante = $('select[name="tipoVacante"][required]').val();
      var nombre      = $('input[name="nombre"]').val().length;
      var apellidos   = $('input[name="apellidos"]').val().length;
      var cv          = $('input[name="curriculum"]').val().length;
      var estudios    = $('select[name="nivelEstudios"]').val();
      var email       = $('input[name="correoElectronico"]').val().length;

      if (
        vacante >= 1 &&
        tipoVacante !== '' &&
        nombre >= 1 &&
        apellidos >= 1 &&
        cv >= 1 &&
        estudios !== '' &&
        email >= 1
      ) {
        return true;
      } else {
        return false;
      }
    }

    function enviarPeticion() {

      var formData = new FormData(document.getElementById('form-cv'));

      $.ajax({
        type: 'POST',
        url: 'https://getmore.mx/vre/envio-cv.php',
        data: formData,
        processData: false,
        contentType: false,
        cache: false
      })
      .done(function() {
        document.getElementById('form-cv').reset();
        alertify.success('Gracias, nos pondremos en contacto contigo.');
      });
    }

    btnenviarVacante.on('click', function(e) {
      e.preventDefault();
      if(obtenerValores()) {
        enviarPeticion();
      } else {
        alertify.error('Es necesario llenar todos los campos y adjuntar un archivo.');
      }
    });
  }
})(jQuery);
