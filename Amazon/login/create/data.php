<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Creating a connection
$conn = new mysqli($servername, $username, $password);

// Checking the connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

?>
