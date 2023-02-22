<?php
   require_once("./config/connection.php");
    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $name = $_POST['name'];
        $capacity = $_POST['capacity'];
        $date = $_POST['date'];
        $phone = $_POST['phone'];
        $center = $_POST['center'];
        $sql = "INSERT INTO user VALUES('$name', '$center', '$capacity', '$date', '$phone')";
        $sql1 = "update owner set booked='true' where center='$center'";
        $available = "select * from owner where center='$center'";
        $avail_res = mysqli_query($conn, $available);
        $avail_data = mysqli_fetch_assoc($avail_res);
        if($avail_data['booked'] == 'true')
        {
            echo "<script>alert('Already Booked');</script>";
            echo "<script>window.location.assign('user.html');</script>";
        }
        else{
        $result1 = mysqli_query($conn, $sql1);
        $result = mysqli_query($conn, $sql);
        if($result)
        {
            echo "<script>alert('Inserted Successfully');</script>";
            echo "<script>window.location.assign('user.html');</script>";
        }
        else{
            echo "<script>alert('Not Inserted');</script>";
            echo "<script>window.location.assign('user.html');</script>";
        }
    }
    }
?>