<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$contact = $data['contact'];
$emergency = $data['emergency'];

$conn = new mysqli('localhost', 'username', 'password', 'ambulance_db');

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

$sql = "INSERT INTO bookings (name, contact, emergency) VALUES ('$name', '$contact', '$emergency')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'Booking successful']);
} else {
    echo json_encode(['success' => false, 'message' => 'Booking failed']);
}

$conn->close();
?>
