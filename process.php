<?php
require_once('Init.php');

print_r($_POST);

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){

$name = $message_obj->filter($_POST['name']);
$email = $message_obj->filter($_POST['email']);;
$message = $message_obj->filter($_POST['message']);;

$add_message = $message_obj->add_message($name,$email,$message);
echo $add_message;

}

?>