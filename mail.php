<?php

$name=$_POST['name'];
$mail=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];


$to      = 'srigowmariammanconstruction@gmail.com';
$subject = $subject;
$message = 'hello i am'.$name.'my query '.$subject.'my query message'.$message.'from mail'.$mail;
$headers ='From:$mail' . "\r\n" .
    'Reply-To:$mail' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);


?>