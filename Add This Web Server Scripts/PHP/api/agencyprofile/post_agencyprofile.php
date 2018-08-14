<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include "db.php";
$USER_ID = $data['USER_ID'];
$COMPANYCODE = $data['COMPANYCODE'];
$EMAIL = $data['EMAIL'];
$REG_DATE = $data['REG_DATE'];
$FIRST_NAME = $data['FIRST_NAME'];
$MIDDLE_NAME = $data['MIDDLE_NAME'];
$LAST_NAME = $data['LAST_NAME'];
$SALT = $data['SALT'];
$PASSWORD = $data['PASSWORD'];
$ROLECODE = $data['ROLECODE'];
$COMPANY_NAME = $data['COMPANY_NAME'];
$STREET = $data['STREET'];
$CITY = $data['CITY'];
$POSTAL_CODE = $data['POSTAL_CODE'];
$COUNTRY = $data['COUNTRY'];
$FULL_NAME_LEGACY = $data['FULL_NAME_LEGACY'];
$VAT_NUMBER = $data['VAT_NUMBER'];
$IATA_NUMBER = $data['IATA_NUMBER'];
$TITLE = $data['TITLE'];
$PHONE1 = $data['PHONE1'];
$PHONE2 = $data['PHONE2'];
$FAX = $data['FAX'];
$WEBSITE = $data['WEBSITE'];
$LANGUAGE = $data['LANGUAGE'];
$PRICE_FORMAT = $data['PRICE_FORMAT'];
$DATE_FORMAT = $data['DATE_FORMAT'];
$TIME_ZONE = $data['TIME_ZONE'];
$TIME_FORMAT = $data['TIME_FORMAT'];
$LOGO = $data['LOGO'];
$sql = "insert into users(USER_ID,COMPANYCODE,EMAIL,REG_DATE,FIRST_NAME,MIDDLE_NAME,LAST_NAME,SALT,PASSWORD,ROLECODE,COMPANY_NAME,STREET,CITY,POSTAL_CODE,COUNTRY,FULL_NAME_LEGACY,VAT_NUMBER,IATA_NUMBER,TITLE,PHONE1,PHONE2,FAX,WEBSITE,LANGUAGE,PRICE_FORMAT,DATE_FORMAT,TIME_ZONE,TIME_FORMAT,LOGO) values('".$USER_ID."','".$COMPANYCODE."','".$EMAIL."','".$REG_DATE."','".$FIRST_NAME."','".$MIDDLE_NAME."','".$LAST_NAME."','".$SALT."','".$PASSWORD."','".$ROLECODE."','".$COMPANY_NAME."','".$STREET."','".$CITY."','".$POSTAL-CODE."','".$COUNTRY."','".$FULL_NAME_LEGACY."','".$VAT_NUMBER."','".$IATA_NUMBER."','".$TITLE."','".$PHONE1."','".$PHONE2."','".$FAX."','".$WEBSITE."','".$LANGUAGE."','".$PRICE_FORMAT."','".$DATE_FORMAT."','".$TIME_ZONE."','".$TIME_FORMAT."','".$LOGO."')";
$result = $con->query($sql);

?>
