<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
session_start();

if (isset($_SESSION['user'])) {
    echo '{"status": true}';
} else {
    echo '{"status": false}';
}
