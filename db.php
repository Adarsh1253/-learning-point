<?php
$server="localhost";
$username="root";
$password="";
$db="minor_project";
$con=mysqli_connect($server,$username,$password,$db);
if($con){
   ?>
    
     <?php
}else{
    ?>
    <script>
        alert("not connected successful");
    </script>
    <?php
}
?>