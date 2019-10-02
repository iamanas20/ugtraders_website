<?php
  $servername = "localhost";
  $username = "root";
  $password = "tlsslm10";
  $dbname = "ugt_free_users";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $name = $_POST['name'];
  $email = $_POST['email'];

  $sql = "INSERT INTO users (Name, Email) VALUES ('$name', '$email')";
  mysqli_query($conn, $sql);

  // success page
  header("Location: ebook-thanks.php");
?>
