<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['fname'];
    $student_id = $_POST['fid'];
    $email = $_POST['femail'];
    $gender = $_POST['gender'];
    $password = $_POST['fpass'];

    if (isset($_POST['fsubmit'])) {
        // Insert data using prepared statements
        $stmt = $conn->prepare("INSERT INTO students (name, student_id, email, gender, password) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sisss", $name, $student_id, $email, $gender, $password);

        if ($stmt->execute()) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } elseif (isset($_POST['fview'])) {
        // View data
        $sql = "SELECT * FROM students";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Student ID: " . $row["student_id"]. " - Email: " . $row["email"]. " - Gender: " . $row["gender"]. " - Password: " . $row["password"]. "<br>";
            }
        } else {
            echo "0 results";
        }
    } elseif (isset($_POST['fupdate'])) {
        // Update data using prepared statements
        $stmt = $conn->prepare("UPDATE students SET name=?, email=?, gender=?, password=? WHERE student_id=?");
        $stmt->bind_param("ssssi", $name, $email, $gender, $password, $student_id);

        if ($stmt->execute()) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $stmt->error;
        }

        $stmt->close();
    } elseif (isset($_POST['fdel'])) {
        // Delete data using prepared statements
        $stmt = $conn->prepare("DELETE FROM students WHERE student_id=?");
        $stmt->bind_param("i", $student_id);

        if ($stmt->execute()) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $stmt->error;
        }

        $stmt->close();
    }
}

$conn->close();
?>
