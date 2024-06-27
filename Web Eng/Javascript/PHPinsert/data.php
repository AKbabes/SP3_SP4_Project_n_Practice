<?php
$con = mysqli_connect('localhost', 'root', '','weblab');
if (!$con) {
    die('Not connected to the server: ' . mysqli_connect_error());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$stmt = $con->prepare("INSERT INTO form_data (user_name, user_email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
if ($stmt->execute()) {
echo 'Inserted/saved';
} else {
echo 'Not inserted/saved: ' . $stmt->error;
}
$stmt->close();
$con->close();
header("refresh:2;url=index.html");
exit();
}
?>