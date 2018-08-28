<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode( file_get_contents('php://input'),true );
 $conn = new mysqli("localhost","root","toor","test");
 $COMPANY =  mysqli_real_escape_string($conn,$data['COMPANY']);
 $TRADE_REGISTER_NUMBER = mysqli_real_escape_string($conn, $data['TRADE_REGISTER_NUMBER']);
 $STREET = mysqli_real_escape_string($conn, $data['STREET']);
 $CITY =  mysqli_real_escape_string($conn,$data['CITY']);
 $POSTAL_CODE =  mysqli_real_escape_string($conn,$data['POSTAL_CODE']);
 $COUNTRY =  mysqli_real_escape_string($conn,$data['COUNTRY']);
 $FULL_NAME=  mysqli_real_escape_string($conn,$data['FULL_NAME']);
 $VAT_NUMBER =  mysqli_real_escape_string($conn,$data['VAT_NUMBER']);
 $IATA_NUMBER =  mysqli_real_escape_string($conn,$data['IATA_NUMBER']);
 $TITLE =  mysqli_real_escape_string($conn,$data['TITLE']);
 $FIRST_NAME =  mysqli_real_escape_string($conn,$data['FIRST_NAME']);
 $MIDDLE_NAME =  mysqli_real_escape_string($conn,$data['MIDDLE_NAME']);
 $LAST_NAME =  mysqli_real_escape_string($conn,$data['LAST_NAME']);
 $PHONE_1 =  mysqli_real_escape_string($conn,$data['PHONE_1']);
 $PHONE_2 =  mysqli_real_escape_string($conn,$data['PHONE_2']);
 $FAX =  mysqli_real_escape_string($conn,$data['FAX']);
 $WEB_SITE =  mysqli_real_escape_string($conn,$data['WEB_SITE']);
 $E_MAIL =  mysqli_real_escape_string($conn,$data['E_MAIL']);
 $TYPE_CLIENT =  mysqli_real_escape_string($conn,$data['TYPE_CLIENT']);

$result1 = mysqli_query($conn,
"SELECT * FROM `client` WHERE  COMPANY='$COMPANY' LIMIT 1");

if(mysqli_fetch_array($result1) == false)
 {

$sql = "INSERT INTO CLIENT(
    COMPANY,
    TRADE_REGISTER_NUMBER,
	STREET,
	CITY,
    POSTAL_CODE,
    COUNTRY,
	FULL_NAME,
	VAT_NUMBER,
    IATA_NUMBER,
    TITLE,
    FIRST_NAME,
    MIDDLE_NAME,
    LAST_NAME,
    PHONE_1,
    PHONE_2,
    FAX,
    WEB_SITE,
    E_MAIL,
    TYPE_CLIENT
)
VALUES(
    '".$COMPANY."',
	'".$TRADE_REGISTER_NUMBER."',
	'".$STREET."',
    '".$CITY."',
    '".$POSTAL_CODE."',
    '".$COUNTRY."',
	'".$FULL_NAME."',
	'".$VAT_NUMBER."',
    '".$IATA_NUMBER."',
    '".$TITLE."',
    '".$FIRST_NAME."',
    '".$MIDDLE_NAME."',
    '".$LAST_NAME."',
    '".$PHONE_1."',
    '".$PHONE_2."',
    '".$FAX."',
    '".$WEB_SITE."',
    '".$E_MAIL."',
    'Corporate'
	
)";
 // SELECT * FROM (SELECT 'name1', 'add', '022') AS tmp
// WHERE NOT EXISTS (
    // SELECT name FROM table_listnames WHERE name = 'name1'
// ) LIMIT 1;";

$result = $conn->query($sql);
}
else
{
?>
<script language="javascript">
 alert('Record  already exist ');
</script>
<?php
}

?>
