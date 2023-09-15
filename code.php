<?php
// $web_id = 5;
// $db_username = "misbah";
// $db_password = "Mayiin383";
// $db_name = "technow";
// $db = new mysqli("161.35.68.83", $db_username, $db_password, $db_name);
if (isset($_POST['form_name'])) {
	// echo 1;
	$s1name = isset($_POST['Name']) ? $_POST['Name'] : "";
	$s1email = isset($_POST['Email']) ? $_POST['Email'] : "";
	$s1num = isset($_POST['Number']) ? $_POST['Number'] : "";

	$to = 'info@trademarktarget.com';

	// $q = $db->query("select * from customers where email = '$s1email' and website_id='$web_id'");
	// $r = mysqli_fetch_array($q);

	// if(empty($r)){
	//     $date = date('Y-m-d H:i:s');
	//     $db->query("INSERT INTO `customers`(`customer_name`, `email`, `contact_no`, `createdAt`, `website_id`) VALUES ('$s1name','$s1email','$s1num','$date','$web_id')");

	// }


	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$subject = "Sign Up Today!";
	$message = "Banner Form.
					<table border='2'>
						<tr><td>Name:</td><td>" . $s1name . "</td></tr>
						<tr><td>Email:</td><td>" . $s1email . "</td></tr>
						<tr><td>Number:</td><td>" . $s1num . "</td></tr>
					</table>";
	$message = nl2br($message);
	if (mail($to, $subject, $message, $headers)) {
		echo "<script>window.location.href='thankyou.php';</script>";
		exit;
	} else {
		echo "mail not send";
	}
}
/*    ********  end   ********      */


if (isset($_POST['popup_form'])) {
	// echo 1;
	$s1name = isset($_POST['first_name']) ? $_POST['first_name'] : "";
	$s1email = isset($_POST['email']) ? $_POST['email'] : "";
	$s1num = isset($_POST['tel']) ? $_POST['tel'] : "";

	$to = 'info@trademarktarget.com';

	// $q = $db->query("select * from customers where email = '$s1email' and website_id='$web_id'");
	// $r = mysqli_fetch_array($q);

	// if(empty($r)){
	//     $date = date('Y-m-d H:i:s');
	//     $db->query("INSERT INTO `customers`(`customer_name`, `email`, `contact_no`, `createdAt`, `website_id`) VALUES ('$s1name','$s1email','$s1num','$date','$web_id')");

	// }


	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$subject = "Sign Up Today!";
	$message = "Pop Up Form
					<table border='2'>
						<tr><td>Name:</td><td>" . $s1name . "</td></tr>
						<tr><td>Email:</td><td>" . $s1email . "</td></tr>
						<tr><td>Number:</td><td>" . $s1num . "</td></tr>
					</table>";
	$message = nl2br($message);
	if (mail($to, $subject, $message, $headers)) {
		echo "<script>window.location.href='thankyou.php';</script>";
		exit;
	} else {
		echo "mail not send";
	}
}
/*    ********  end   ********      */


if (isset($_POST['contactForm_name'])) {
	// echo 1;
	$s1name = isset($_POST['name']) ? $_POST['name'] : "";
	$s1num = isset($_POST['phone']) ? $_POST['phone'] : "";
	$s1email = isset($_POST['email']) ? $_POST['email'] : "";
	$s1subject = isset($_POST['subject']) ? $_POST['subject'] : "";
	$s1message = isset($_POST['Message']) ? $_POST['Message'] : "";

	$to = 'info@trademarktarget.com';

	// $q = $db->query("select * from customers where email = '$s1email' and website_id='$web_id'");
	// $r = mysqli_fetch_array($q);

	// if(empty($r)){
	//     $date = date('Y-m-d H:i:s');
	//     $db->query("INSERT INTO `customers`(`customer_name`, `email`, `contact_no`, `createdAt`, `website_id`) VALUES ('$s1name','$s1email','$s1num','$date','$web_id')");

	// }


	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$subject = "Sign Up Today!";
	$message = "Contact Page Form
					<table border='2'>
						<tr><td>Name:</td><td>" . $s1name . "</td></tr>
						<tr><td>Email:</td><td>" . $s1email . "</td></tr>
						<tr><td>Number:</td><td>" . $s1num . "</td></tr>
						<tr><td>Subject:</td><td>" . $s1subject . "</td></tr>
						<tr><td>Message:</td><td>" . $s1message . "</td></tr>
					</table>";
	$message = nl2br($message);
	if (mail($to, $subject, $message, $headers)) {
		echo "<script>window.location.href='thankyou.php';</script>";
		exit;
	} else {
		echo "mail not send";
	}
}
/*    ********  end   ********      */


?>