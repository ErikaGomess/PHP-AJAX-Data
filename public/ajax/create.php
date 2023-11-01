<?php

require "../../config.php";

use app\models\User;


$name = filter_input(INPUT_POST,'name');
$email = filter_input(INPUT_POST,'email');


$user = new User;

$cadastrado = $user->create($name, $email);

if($cadastrado){
    
    echo 'cadastrado';
}else{
    
    echo 'erro';
}