<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=utf8_bin");


getUsers();

function getUsers(){
	 $conn = new mysqli("localhost","root","toor","test");
$result = $conn->query("SELECT * FROM users WHERE COMPANYCODE='D023012016'");
$user = array();
 while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
array_push($user,array(
'USER_ID'=>$rs["USER_ID"],
'COMPANYCODE'=>$rs["COMPANYCODE"],
'EMAIL'=>$rs["EMAIL"],
'REG_DATE'=>$rs["REG_DATE"],
'FIRST_NAME'=>$rs["FIRST_NAME"],
'MIDDLE_NAME'=>$rs["MIDDLE_NAME"],
'LAST_NAME'=>$rs["LAST_NAME"],
'SALT'=>$rs["SALT"],
'PASSWORD'=>$rs["PASSWORD"],
'ROLECODE'=>$rs["ROLECODE"],
'COMPANY_NAME'=>$rs["COMPANY_NAME"],
'STREET'=>$rs["STREET"],
'CITY'=>$rs["CITY"],
'POSTAL_CODE'=>$rs["POSTAL_CODE"],
'COUNTRY'=>$rs["COUNTRY"],
'FULL_NAME_LEGACY'=>$rs["FULL_NAME_LEGACY"],
'VAT_NUMBER'=>$rs["VAT_NUMBER"],
'IATA_NUMBER'=>$rs["IATA_NUMBER"],
'TITLE'=>$rs["TITLE"],
'PHONE1'=>$rs["PHONE1"],
'PHONE2'=>$rs["PHONE2"],
'FAX'=>$rs["FAX"],
'WEBSITE'=>$rs["WEBSITE"],
'LANGUAGE'=>$rs["LANGUAGE"],
'PRICE_FORMAT'=>$rs["PRICE_FORMAT"],
'DATE_FORMAT'=>$rs["DATE_FORMAT"],
'TIME_ZONE'=>$rs["TIME_ZONE"],
'TIME_FORMAT'=>$rs["TIME_FORMAT"],
'LOGO'=>$rs["LOGO"]));
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
