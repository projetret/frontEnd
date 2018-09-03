<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

getUsers();

function getUsers(){
    $conn = new mysqli("localhost","root","toor","test");
    $result = $conn->query("SELECT * FROM `client` WHERE `TYPE_CLIENT`='Corporate'");

    $user = array();

    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        array_push($user,array(

'id'=>$rs["id"],
'COMPANY'=>$rs["COMPANY"],
'TRADE_REGISTER_NUMBER'=>$rs["TRADE_REGISTER_NUMBER"],
'STREET'=>$rs["STREET"],
'CITY'=>$rs["CITY"],
'POSTAL_CODE'=>$rs["POSTAL_CODE"],
'COUNTRY'=>$rs["COUNTRY"],
'FULL_NAME'=>$rs["FULL_NAME"],
'VAT_NUMBER'=>$rs["VAT_NUMBER"],
'IATA_NUMBER'=>$rs["IATA_NUMBER"],
'TITLE'=>$rs["TITLE"],
'FIRST_NAME'=>$rs["FIRST_NAME"],
'MIDDLE_NAME'=>$rs["MIDDLE_NAME"],
'LAST_NAME'=>$rs["LAST_NAME"],
'PHONE_1'=>$rs["PHONE_1"],
'PHONE_2'=>$rs["PHONE_2"],
'FAX'=>$rs["FAX"],
'WEB_SITE'=>$rs["WEB_SITE"],
'E_MAIL'=>$rs["E_MAIL"],
'TYPE_CLIENT'=>$rs["TYPE_CLIENT"]));
 }
    $conn->close();

    $json = json_encode($user);
    if ($json === false) {
        // Avoid echo of empty string (which is invalid JSON), and
        // JSONify the error message instead:
        $json = json_encode(array("jsonError", json_last_error_msg()));
        if ($json === false) {
            // This should not happen, but we go all the way now:
            $json = '{"jsonError": "unknown"}';
        }
        // Set HTTP response status code to: 500 - Internal Server Error
        http_response_code(500);
    }
    echo $json;
}
?>
