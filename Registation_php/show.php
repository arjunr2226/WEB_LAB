<?php
$conn = mysqli_connect("localhost", "root", "", "registration_db");
if(!$conn)
{
  echo "Not Connected";
}
else
{
  $sql = "SELECT * FROM DETAILS";
  $data = mysqli_query($conn, $sql);
  if(mysqli_num_rows($data)>0)
  { 
    echo "<table border='1'>";
    echo "<tr><th>FIRST NAME</th><th>LAST NAME</th><th>GENDER</th><th>DOB</th><th>PHONE</th><th>EMAIL</th></tr>";
    while($row = mysqli_fetch_assoc($data))
    {
      echo "<tr><td>".$row['FIRST NAME']."</td><td>".$row['LAST NAME']."</td><td>".$row['GENDER']."</td><td>".$row['DOB']."</td><td>".$row['PHONE']."</td><td>".$row['EMAIL']."</td><td>"."</td></tr>";
    }
  }
  else{
    echo "empty";
  }

}

?>