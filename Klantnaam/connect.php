<?php

    // deleted for github.
    $servername = "";
    $username = "";
    $password = ""; 
    $dbname = "";
    $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);}
        else {
            // echo "connected to db";
        }
    return $conn;
?>