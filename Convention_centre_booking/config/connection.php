<?php 
    $conn = mysqli_connect("localhost", "root", "", "registration_db");
    if(!$conn)
    {
        echo "<script>alert('Not Connected');</script>";
    }
    // else
    // {
    //     echo "<script>alert('Connected');</script>";
    // }
?>