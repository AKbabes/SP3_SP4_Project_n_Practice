<?php
        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $gender = $_POST['gender'];
        $password = $_POST['password'];

        // Sanitize user input
        $name = htmlspecialchars($name);
        $mail = htmlspecialchars($mail);
        $gender = htmlspecialchars($gender);
        $password = htmlspecialchars($password);

        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'userform');

        if ($conn->connect_error) {
            die('Connection Failed: ' . $conn->connect_error);
        } else {
            $stmt = $conn->prepare("INSERT INTO userdetails (name, mail, gender, password) VALUES (?, ?, ?, ?)");
            if ($stmt) {
                $stmt->bind_param("ssss", $name, $mail, $gender, $hashed_password);
                $execval = $stmt->execute();
                echo $execval;
                echo "Registration successfully...";
                $stmt->close();
            } else {
                echo "Error preparing statement: " . $conn->error;
            }
            $conn->close();
        }
?>