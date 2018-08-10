<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_SESSION) && !empty($_SESSION)) {
    $user = $_SESSION['user'];

    if ($user == 'admin') {
        ?>
	{
        "message": "This is a secret message only for administrator",
        "success": true
    }
	<?php
} else {
        ?>
	{
        "message": "Who the f are you",
        "success": false
    }
	<?php
}
} else {
    //var_dump($_POST)
    ?>
{
  "success": false,
  "message": "Only SESSION access accepted"
}
  <?php
}

?>
