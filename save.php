<?php
require_once "./config.php";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $captcha_type = $_POST['captcha_type'];
    $solving_time = $_POST['solving_time'];
    $response_time = $_POST['response_time'];
    $status = $_POST['status'];

    $sql = "INSERT INTO challenges (captcha_type, solving_time, response_time, status)
    VALUES ('{$captcha_type}', '{$solving_time}', '{$response_time}', '{$status}')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
} catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
}

$conn = null;
