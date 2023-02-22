<?php
   require_once("./config/connection.php");
    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $name = $_POST['name'];
        $loc = $_POST['loc'];
        $capacity = $_POST['capacity'];
        $date = $_POST['date'];
        $phone = $_POST['phone'];
        $center = $_POST['center'];
        $sql = "INSERT INTO owner VALUES('$name', '$loc', '$capacity', '$date', '$phone', '$center', 'false')";
        $result = mysqli_query($conn, $sql);
        if($result)
        {
            echo "<script>alert('Inserted Successfully');</script>";
            echo "<script>window.location.assign('owner.html');</script>";
        }
        else{
            echo "<script>alert('Not Inserted');</script>";
            echo "<script>window.location.assign('owner.html');</script>";
        }
    }
?>