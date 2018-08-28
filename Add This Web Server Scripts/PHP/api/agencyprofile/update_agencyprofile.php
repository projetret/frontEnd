<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=utf8");


$conn = new mysqli("localhost","root","toor","test");
$data = json_decode(file_get_contents("php://input"));
/*$COMPANY_NAME= mysqli_real_escape_string($conn,$data->COMPANY_NAME);
$COMPANYCODE= mysqli_real_escape_string($conn,$data->COMPANYCODE); */
$STREET=  mysqli_real_escape_string($conn,$data->STREET);
$CITY= mysqli_real_escape_string($conn,$data->CITY);
$POSTAL_CODE= mysqli_real_escape_string($conn,$data->POSTAL_CODE);
$COUNTRY= mysqli_real_escape_string($conn,$data->COUNTRY);
$FULL_NAME_LEGACY= mysqli_real_escape_string($conn,$data->FULL_NAME_LEGACY);
$VAT_NUMBER= mysqli_real_escape_string($conn,$data->VAT_NUMBER);
$IATA_NUMBER= mysqli_real_escape_string($conn,$data->IATA_NUMBER);
$TITLE= mysqli_real_escape_string($conn,$data->TITLE);
$FIRST_NAME= mysqli_real_escape_string($conn,$data->FIRST_NAME);
$MIDDLE_NAME= mysqli_real_escape_string($conn,$data->MIDDLE_NAME);
$LAST_NAME= mysqli_real_escape_string($conn,$data->LAST_NAME);
$PHONE1= mysqli_real_escape_string($conn,$data->PHONE1);
$PHONE2= mysqli_real_escape_string($conn,$data->PHONE2);
$FAX= mysqli_real_escape_string($conn,$data->FAX);
$WEBSITE= mysqli_real_escape_string($conn,$data->WEBSITE);
$EMAIL= mysqli_real_escape_string($conn,$data->EMAIL);
$LANGUAGE= mysqli_real_escape_string($conn,$data->LANGUAGE);
$PRICE_FORMAT= mysqli_real_escape_string($conn,$data->PRICE_FORMAT);
$DATE_FORMAT= mysqli_real_escape_string($conn,$data->DATE_FORMAT);
$TIME_ZONE= mysqli_real_escape_string($conn,$data->TIME_ZONE);
$TIME_FORMAT= mysqli_real_escape_string($conn,$data->TIME_FORMAT);
$LOGO= mysqli_real_escape_string($conn,$data->LOGO);
$query =  "UPDATE users SET `STREET`='$STREET',`CITY`='$CITY',`POSTAL_CODE`='$POSTAL_CODE',`COUNTRY`='$COUNTRY',`FULL_NAME_LEGACY`='$FULL_NAME_LEGACY',`VAT_NUMBER`='$VAT_NUMBER',`IATA_NUMBER`='$IATA_NUMBER',`TITLE`='$TITLE',`FIRST_NAME`='$FIRST_NAME',`MIDDLE_NAME`='$MIDDLE_NAME',`LAST_NAME`='$LAST_NAME',`PHONE1`='$PHONE1',`PHONE2`='$PHONE2', `FAX`='$FAX',`WEBSITE`='$WEBSITE',`EMAIL`='$EMAIL',`LANGUAGE`='$LANGUAGE',`PRICE_FORMAT`='$PRICE_FORMAT',`DATE_FORMAT`='$DATE_FORMAT',`TIME_ZONE`='$TIME_ZONE',`TIME_FORMAT`='$TIME_FORMAT',`LOGO`='$LOGO'
 WHERE COMPANYCODE = 'D023012016' ";
$result =$conn->query($query);
$conn->close();
//  `COMPANY_NAME`='$COMPANY_NAME',
// `COMPANYCODE`='$COMPANYCODE',
// ,`LOGO`='$LOGO'