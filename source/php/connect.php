<?
$host="localhost";
$dbname="ct61014_photo";
$user="root";
$pass="";
$db = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
header('Access-Control-Allow-Origin: *');