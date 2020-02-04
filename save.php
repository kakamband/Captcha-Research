<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "captcha";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $captcha_type = $_POST['captcha_type'];
    $solving_time = $_POST['solving_time'];
    $response_time = $_POST['response_time'];

    $sql = "INSERT INTO challenges (captcha_type, solving_time, response_time)
    VALUES ('{$captcha_type}', '{$solving_time}', '{$response_time}')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
} catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
}

$conn = null;
