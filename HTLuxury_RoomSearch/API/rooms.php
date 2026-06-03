<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

require_once "db.php";

function send_error($message, $code = 400) {
    http_response_code($code);

    echo json_encode([
        "status" => "error",
        "message" => $message
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

$keyword = trim($_GET["keyword"] ?? "");
$type = trim($_GET["type"] ?? "");
$minPrice = $_GET["min_price"] ?? "";
$maxPrice = $_GET["max_price"] ?? "";
$checkin = $_GET["checkin"] ?? "";
$checkout = $_GET["checkout"] ?? "";
$guests = (int)($_GET["guests"] ?? 1);

if ($guests < 1) {
    $guests = 1;
}

if ($checkin !== "" && $checkout !== "") {
    $checkinTime = strtotime($checkin);
    $checkoutTime = strtotime($checkout);

    if (!$checkinTime || !$checkoutTime) {
        send_error("Ngày nhận hoặc ngày trả không hợp lệ.");
    }

    if ($checkoutTime <= $checkinTime) {
        send_error("Ngày trả phòng phải sau ngày nhận phòng.");
    }

    $nights = ($checkoutTime - $checkinTime) / 86400;

    if ($nights > 30) {
        send_error("Thời gian lưu trú tối đa là 30 ngày.");
    }

    if ($checkinTime > strtotime("+365 days")) {
        send_error("Chỉ hỗ trợ tìm phòng trước tối đa 365 ngày.");
    }
}

$sql = "SELECT
            id,
            name,
            type,
            price,
            capacity,
            bed_type,
            area,
            view,
            amenities,
            status,
            image
        FROM rooms
        WHERE is_active = 1
          AND status = 'available'
          AND capacity >= :guests";

$params = [
    ":guests" => $guests
];

if ($keyword !== "") {
    $sql .= " AND (
        name LIKE :keyword
        OR type LIKE :keyword
        OR amenities LIKE :keyword
        OR view LIKE :keyword
    )";

    $params[":keyword"] = "%" . $keyword . "%";
}

if ($type !== "" && $type !== "all") {
    $sql .= " AND type = :type";
    $params[":type"] = $type;
}

if ($minPrice !== "") {
    $sql .= " AND price >= :min_price";
    $params[":min_price"] = (int)$minPrice;
}

if ($maxPrice !== "") {
    $sql .= " AND price <= :max_price";
    $params[":max_price"] = (int)$maxPrice;
}

if ($checkin !== "" && $checkout !== "") {
    $sql .= " AND NOT EXISTS (
        SELECT 1
        FROM bookings b
        WHERE b.room_id = rooms.id
          AND b.status IN ('pending', 'confirmed', 'checked_in')
          AND (:checkin < b.checkout_date AND :checkout > b.checkin_date)
    )";

    $params[":checkin"] = $checkin;
    $params[":checkout"] = $checkout;
}

$sql .= " ORDER BY price ASC, id ASC";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rooms = $stmt->fetchAll();

    echo json_encode([
        "status" => "success",
        "count" => count($rooms),
        "data" => $rooms
    ], JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    http_response_code(500);

    echo json_encode([
        "status" => "error",
        "message" => "Không thể truy vấn dữ liệu phòng.",
        "detail" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
?>
