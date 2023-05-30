document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Envía la solicitud de inicio de sesión al servidor
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Se ha recibido una respuesta del servidor
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        // El inicio de sesión fue exitoso
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir al usuario a otra página
      } else {
        // El inicio de sesión falló
        alert("Inicio de sesión fallido: " + response.message);
      }
    }
  };
  xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
});


-------
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


$(document).ready(function() {
  $("#loginForm").submit(function(event) {
    event.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    $.post("login.php", { username: username, password: password })
      .done(function(response) {
        if (response.success) {
          alert("Inicio de sesión exitoso");
          // Redirigir al usuario a otra página
        } else {
          alert("Inicio de sesión fallido: " + response.message);
        }
      })
      .fail(function() {
        alert("Error al procesar la solicitud");
      });
  });
});

