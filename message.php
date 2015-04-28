<?php

class Message{

private $db;


public function __construct($db){
$this->db = $db;
}

public function filter($str){
$str = stripslashes($str);
$str = strip_tags($str);
$str = htmlentities($str);
return $str;
}

public function add_message($name,$email,$message){
$message_res = '';
try{
$query = "INSERT INTO `messages`(name,email,message) VALUES(?,?,?)";
$sql = $this->db->prepare($query);
$sql->execute(array($name,$email,$message));
$sqlnum = $sql->rowCount();
if($sqlnum > 0){
$message_res = 'message added';
}else{
$message_res = 'some error occured';
}
}
catch(PDOException $e){
$e->getMessage();
}
return $message_res;
}

}



?>