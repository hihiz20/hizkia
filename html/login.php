<?php
$errors = array();
$form_data = array();

$valid_credentials = array(
    "username" => "user",
    "password" => "pass"
);

$username = isset($_POST['name']) ? $_POST['name'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (empty($username)) {
    $form_data['success'] = false;
    $form_data['errors']  = 'Username cannot be blank';
} else {
    if ($username === $valid_credentials['username'] && $password === $valid_credentials['password']) {
        $form_data['posted'] = 'Login is successful';
        $form_data['success'] = true;
    } else {
        $form_data['success'] = false;
        $form_data['errors']  = 'Invalid username or password';
    }
}

echo json_encode($form_data);
?>
