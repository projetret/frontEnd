<?php
// DB Connection
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'toor');
define('DB_DATABASE', 'ret');
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
// Header Zone
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
//Session Start
session_start();
// ini_set('session.cookie_httponly',1);
// ini_set('session.use_only_cookies',1);
$_POST = json_decode(file_get_contents('php://input'), true);
$Blowfish_Pre = '$2a$05$';
$Blowfish_End = '$';
if (isset($_POST) && !empty($_POST)) {
    $CompanyCode = $_POST['CompanyCode'];
    $inputEmail = $_POST['inputEmail'];
    $inputPass = $_POST['inputPass'];
    $sql = "SELECT *FROM users WHERE email='$inputEmail'";
    $result = mysqli_query($conn, $sql) or die(mysql_error());
    $row = mysqli_fetch_assoc($result);
    $hashed_pass = crypt($inputPass, $Blowfish_Pre . $row['salt'] . $Blowfish_End);
    if (($hashed_pass == $row['password']) && ($CompanyCode == $row['Companycode'])) {
        $_SESSION['Companycode'] = $row['Companycode'];
        $_SESSION['user'] = 'admin';
        ?>
						{
						  "success": true,
						  "secret": "This is the secret no one knows but the admin"
						}
						<?php
} else {
        ?>
						{
						  "success": false,
						  "message": "Invalid credentials"
						}
						<?php
}

} else {
    //var_dump($_POST)
    ?>
{
  "success": false,
  "message": "Only POST access accepted"
}
  <?php
}

/* private function checkLoginFormDataPasswordCorrect()
{
$sql = 'SELECT user_id, Companycode, email, reg_date, fname, lname, salt, password, typeCompte FROM users  WHERE Companycode = :Companycode LIMIT 1';
$query = $this->db_connection->prepare($sql);
$query->bindValue(':Companycode', $_POST['CompanyCode']);
$query->execute();
// btw that's the weird way to get num_rows in PDO with SQLite. what a fucking bullshit! but that's the
// way to get the rows. $result->numRows() works with SQLite pure, but not with SQLite PDO.
// I think that PDO is a bad choice.
//if (count($query->fetchAll(PDO::FETCH_NUM)) == 1) {
// As there is no numRows() in SQLite/PDO (!!) we have to do it this way:
// If you meet the inventor of PDO, punch him. Seriously.
$result_row = $query->fetchObject();
if ($result_row) {
// using PHP 5.5's password_verify() function to check password
if (password_verify($_POST['user_password'], $result_row->user_password_hash)) {
// write user data into PHP SESSION [a file on your server]
$_SESSION['user_name'] = $result_row->user_name;
$_SESSION['user_email'] = $result_row->user_email;
$_SESSION['user_is_logged_in'] = true;
$this->user_is_logged_in = true;
} else {
$this->feedback = "Wrong password.";
}
} else {
$this->feedback = "This user does not exist.";
}
} */

/* }
else
{
?>
{
"success": false,
"message": "Only POST access accepted"
}
<?php
} */

/*     // Validate data
if((empty(trim($_POST["CompanyCode"])))&&  (empty(trim($_POST["inputEmail"]))) && (empty(trim($_POST["inputPass"]))))  {

echo "<script type=“text/javascript”> alert('Please enter a CompanyCode,Email and Password.');</script>";
} else{
// Prepare a select statement
$sql = "SELECT * FROM users WHERE Companycode = ? AND email = ?  AND password = ? ";

if($stmt = mysqli_prepare($link, $sql)){
// Bind variables to the prepared statement as parameters
mysqli_stmt_bind_param($stmt, "sss", $CompanyCode,$inputEmail,$inputPass);

if(mysqli_stmt_execute($stmt)){
$_SESSION['user'] = 'admin';

echo "{
\"success\": true,
\"secret\": \"This is the secret no one knows but the admin\"
}";

} else {

echo "{
\"success\": false,
\"message\": \"Invalid credentials\"
}";

}
}

// Close statement
mysqli_stmt_close($stmt);
} */

?>

