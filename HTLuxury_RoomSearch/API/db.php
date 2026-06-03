<?php
$host = "localhost";
$dbname = "ht_luxury";
$username = "root";
$password = "";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);

    echo json_encode([
        "status" => "error",
        "message" => "Không thể kết nối database.",
        "detail" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);

    exit;
}
?>
