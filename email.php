<?php

if(isset($_POST['submit'])) {

    $name = $_POST['full-name'];
    $email = $_POST['email'];
    $message = nl2br($_POST['message']);

    if ($name && filter_var($email, FILTER_VALIDATE_EMAIL) && $message) {
    
        $mailTo = 'team@amnionweb.cz';
        $subject = 'Formulář od ' . $name;
    
        $headers = array(
            'From' => $email,
            'Reply-To' => $email,
            'Content-Type' => 'text/html; charset=UTF-8'
        );
    
        $message = $message . "<br /><br />" . $email . "<br />" . $name;
    
       mail($mailTo, $subject, $message, $headers);

       header('Location: kontakt?success=true');

    } else {
        header('Location: kontakt?success=false');
    }
}

