<?php
// weather.php

// Get city from query string
$city = $_GET['city'] ?? null;

if (!$city) {
    http_response_code(400);
    echo json_encode(["error" => "City parameter is required"]);
    exit;
}

// Load your OpenWeather API key (replace with getenv if stored securely)
$apiKey = "a9a8c25b87fa753381dbb49665f8cb43";

// Build OpenWeather API URL
$url = "https://api.openweathermap.org/data/2.5/weather?q=" . urlencode($city) . "&appid=" . $apiKey . "&units=metric";

// Initialize cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to fetch weather data"]);
    exit;
}

// Decode JSON response
$data = json_decode($response, true);

// Handle API errors
if (!isset($data["main"])) {
    http_response_code(404);
    echo json_encode(["error" => $data["message"] ?? "City not found"]);
    exit;
}

// Return structured JSON
header('Content-Type: application/json');
echo json_encode([
    "city" => $data["name"],
    "temperature" => $data["main"]["temp"],
    "humidity" => $data["main"]["humidity"],
    "description" => $data["weather"][0]["description"]
]);
?>
