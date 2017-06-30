<?php

require_once('connect.php');


    if (isset($_POST["persons"])) {
        $persons = $_POST["persons"];
    }
    if (isset($_POST["pictures"])) {
        $pictures = $_POST["pictures"];
    }
    if (isset($_POST["name"])) {
        $name = $_POST["name"];
    }
    if (isset($_POST["email"])) {
        $email = $_POST["email"];
    }

$sql = "INSERT INTO `medialab` (`persons`, `pictures`, `name`, `email`) 
      VALUES ('$persons', '$pictures', '$name', '$email');";

if ($conn->query($sql) === TRUE) {
    header('location: thankyou.php');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>