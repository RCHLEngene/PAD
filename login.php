<?php
// Conexión a la base de datos
$conn = new mysqli("nombre_del_servidor", "usuario", "contraseña", "nombre_de_la_base_de_datos");

// Verificar la conexión
if ($conn->connect_error) {
  die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Obtener los valores enviados desde el formulario
$username = $_POST["username"];
$password = $_POST["password"];

// Consulta para verificar las credenciales del usuario
$sql = "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

// Verificar si se encontró un usuario con las credenciales proporcionadas
if ($result->num_rows > 0) {
  // El inicio de sesión fue exitoso
  $response["success"] = true;
  $response["message"] = "Inicio de sesión exitoso";
} else {
  // El inicio de sesión falló
  $response["success"] = false;
  $response["message"] = "Nombre de usuario o contraseña incorrectos";
}

echo json_encode($response);

// Cerrar la conexión a la base de datos
