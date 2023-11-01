<?php

require "../../config.php";

use app\models\User;


$user = new User;

sleep(1);

//var_dump($_POST['nome']);


echo json_encode($user->all());
