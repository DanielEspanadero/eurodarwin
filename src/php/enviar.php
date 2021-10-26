<?php
    $destino = "eurodarinstal@hotmail.com";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $contenido = "Nombre: " . $name . "\nEmail: " . $email . "\nMensaje: " . $message;
    mail($destino, "Contacto a través de la web", $contenido);
?>