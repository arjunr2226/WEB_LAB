<?php
$conn = mysqli_connect("localhost", "root", "", "registration_db");
if(!$conn)
{
  echo "Not connected";
}
else
{
  if($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $gender = $_POST['gender'];
        $dob = $_POST['dob'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $hname = $_POST['hname'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $pin = $_POST['pin'];
        $sql = "INSERT INTO DETAILS VALUES('$fname', '$lname', '$gender', '$dob', '$phone', '$email', '$hname', '$city', '$state', '$pin')";
        $result = mysqli_query($conn, $sql);
        if($result)
        {
          echo "added";
        }
        else{
          echo "not added";
        }
  }
}
?>


