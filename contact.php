<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add your email sending logic here

    // For simplicity, just echoing the received data
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";
}
?>
