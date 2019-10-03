<?php
  $servername = "localhost";
  $username = "Anas";
  $password = "72CHvdy4BvSnp27";
  $dbname = "UGT";

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
