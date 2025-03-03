index

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Form</title>
</head>
<body>
    <center>
    <form method="POST" action="process.php">
        <table cellspacing="10px" cellpadding="5px">
            <h1>Web Form</h1>
            <tr>
                <td>First Name: </td>
                <td><input type="text" name="first_name" placeholder="Enter First Name"></td>
            </tr>
            <tr>
                <td>Last Name: </td>        
                <td><input type="text" name="last_name" placeholder="Enter Last Name"></td>
            </tr>
            <tr>
                <td>gender: </td>
                <td><input type="radio" name="gender" value="Male">Male
                <input type="radio" name="gender" value="Female">Female
                <input type="radio" name="gender" value="Other">Other</td>
            </tr>
            <tr>
                <td>email: </td>
                <td><input type="email" name="email" placeholder="Enter Email"></td>
            </tr>
            <tr>
                <td>Password: </td>
                <td><input type="password" name="password" placeholder="Enter password"></td>
            </tr>
            <tr>
                <td>Phone Number: </td>
                <td><input type="text" name="phone_no" placeholder="Enter Number"></td>
            </tr>
            <tr align="center">
                <td><button type="submit" name="submit" style="font-size: 16px;">Add Record</button></td>
                <td><a href="view.php"><button type="button" style="font-size: 16px;">View Records</button></a></td>
            </tr>
            <tr align="center">
                <td><a href="update.php"><button type="button" style="font-size: 16px;">Update Record</button></a></td>
                <td><a href="delete.php"><button type="button" style="font-size: 16px;">Delete Record</button></a></td>
            </tr>
        </table>
    </form>
</center>
</body>
</html>




view

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webform_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

echo "<h2>User Records</h2>";
echo "<table border='1'>";
echo "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Gender</th><th>Email</th><th>Phone</th></tr>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['first_name']}</td>
                <td>{$row['last_name']}</td>
                <td>{$row['gender']}</td>
                <td>{$row['email']}</td>
                <td>{$row['phone_no']}</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='6'>No records found</td></tr>";
}

echo "</table>";
$conn->close();
?>



process



<?php
$servername = "localhost";
$username = "root";  
$password = "";    
$dbname = "webform_db";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (isset($_POST['submit'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); 
    $phone_no = $_POST['phone_no'];

    $sql = "INSERT INTO users (first_name, last_name, gender, email, password, phone_no) 
            VALUES ('$first_name', '$last_name', '$gender', '$email', '$password', '$phone_no')";

    if ($conn->query($sql) === TRUE) {
        echo "New record added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>


update

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webform_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$first_name = $last_name = $gender = $email = $phone_no = "";

if (isset($_POST['fetch'])) {
    $id = $_POST['id'];
    $sql = "SELECT * FROM users WHERE id='$id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $first_name = $row['first_name'];
        $last_name = $row['last_name'];
        $gender = $row['gender'];
        $email = $row['email'];
        $phone_no = $row['phone_no'];
    } else {
        echo "No record found!";
    }
}

if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone_no = $_POST['phone_no'];

    $sql = "UPDATE users SET 
                first_name='$first_name', 
                last_name='$last_name', 
                gender='$gender', 
                email='$email', 
                phone_no='$phone_no' 
            WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully!";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}
?>

<form method="POST">
    <h2>Update Record</h2>
    <table  cellpadding="5px" cellspacing="10px">
        <tr>
            <td><label>ID to Update:</label></td>
            <td>
                <input type="text" name="id" value="<?php echo isset($id) ? $id : ''; ?>" required>
                <button type="submit" name="fetch">Fetch Details</button>
            </td>
        </tr>
        <tr>
            <td><label>First Name:</label></td>
            <td><input type="text" name="first_name" value="<?php echo $first_name; ?>"></td>
        </tr>
        <tr>
            <td><label>Last Name:</label></td>
            <td><input type="text" name="last_name" value="<?php echo $last_name; ?>"></td>
        </tr>
        <tr>
        <td><label>Gender:</label></td>
        <td>
            <input type="radio" name="gender" value="Male" <?php if ($gender == "Male") echo "checked"; ?>> Male
            <input type="radio" name="gender" value="Female" <?php if ($gender == "Female") echo "checked"; ?>> Female
            <input type="radio" name="gender" value="Other" <?php if ($gender == "Other") echo "checked"; ?>> Other
        </td>
        </tr>
        <tr>
            <td><label>Email:</label></td>
            <td><input type="email" name="email" value="<?php echo $email; ?>"></td>
        </tr>
        <tr>
            <td><label>Phone Number:</label></td>
            <td><input type="text" name="phone_no" value="<?php echo $phone_no; ?>"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align: center;">
            <button type="submit" name="update">Update</button>
            <a href="view.php"><button type="button" style="font-size: 16px;">View Records</button></a></td>
        </tr>
    </table>
</form>


delete

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webform_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['delete'])) {
    $id = $_POST['id'];

    $sql = "DELETE FROM users WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully!";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}
?>

<form method="POST">
    <table cellpadding="5px" cellspacing="10px">
        <tr>
            <td><label>ID to Delete:</label></td>
            <td><input type="text" name="id" required></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align: center;">
                <button type="submit" name="delete">Delete</button>
                <a href="view.php"><button type="button" style="font-size: 16px;">View Records</button></a></td>
            </td>
        </tr>
    </table>
</form>




CREATE DATABASE webform_db;

USE webform_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender ENUM('Male', 'Female', 'Other'),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    phone_no VARCHAR(15)
);
