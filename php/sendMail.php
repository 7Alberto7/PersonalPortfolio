<?php
date_default_timezone_set('Etc/UTC');
include 'config/parameters.php';
require 'vendor/PHPMailer/PHPMailerAutoload.php';
	
if(isset($_POST['email']) && isset($_POST['message'])) {
	$email_to = "j.albertocg86@gmail.com";
	$email_subject = "Contacto mi Web";
	$email_from = $_POST['email'];
	$email_message = nl2br(htmlspecialchars($_POST['message']));

	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->SMTPDebug = 2;
	$mail->Debugoutput = 'html';
	$mail->Host = $mail_host;
	$mail->Port = $mail_port;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = $mail_username;
	$mail->Password = $mail_password;
	$mail->setFrom($email_from);
	$mail->addAddress($email_to);
	$mail->Subject = $email_subject;
	$mail->Body = $email_message;

	if (!$mail->send()) {
		$data['success'] = false;
		$data['data1'] = $mail_username;
		$data['data2'] = $mail_password;
		$data['message'] = 'Ups! Something went wrong. Please, try another option while I fix the problem ;-)';
	} else {
		$data['success'] = true;
		$data['message'] = 'Thank you for reaching out. I will reply the fastest I can!';
	}
} else {
	$data['success'] = false;
	$data['message'] = 'Ups! It seems you forgot to fill some fields';
}

echo json_encode($data);