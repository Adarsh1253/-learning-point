<?php
$name=$_POST['name'];
//echo $name;
$age=$_POST['age'];
//echo $age;
if($_POST['name']||$_POST['age']){
    if(preg_match("/['^123'-]/", $_POST['name'])){
        die("invalid name and should be alpha");
    }
    echo "Welcome".$_POST['name']. "<br>";
    echo "You are".$_POST['age']."years old";
    exit();
}
?>