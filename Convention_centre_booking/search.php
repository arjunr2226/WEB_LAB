<?php
    require_once("./config/connection.php");
    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $date = $_POST['searchInput'];
        $sql = "SELECT * FROM owner WHERE date='$date' and booked='false'";
        $result = mysqli_query($conn, $sql);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DETAILS</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            min-height: 100vh;
            font-family: sans-serif;
            /* text-align: center; */
        }
        tr:nth-child(odd)
        {
            background-color: #c9c9c9;
        }

        th {
            background-color: #339696;
            color: #fff;
         }
         table,th,td,tr {
            padding: 20px 32px;
            border-collapse: collapse;
         }
         .container {
            /* text-align: center; */
         }

         .search-box {
            margin-top: 32px;
         }

         .btn {
            background: none;
            border: none;
            background-color: #339696;
            padding: 9px 18px;
            cursor: pointer;
            color: #fff;
            border-radius: 4px;
        }

        input{
            height: 0px;
            width: 115px;
            padding: 1rem;
            border: 1px solid #c9c9c9;
        }

        input:focus{
            outline: 1px solid #339696;
        } 
        a {
            display: inline-block;
            text-decoration: none;
            background-color: #0aa51e;
            color: #fff;
            padding: 12px 5px;
            border-radius: 4px;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Available Centres on <?php echo $date;?></h1>
        <table>
            <tr>
                <th>Owner Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Available Date</th>
                <th>Phone Number</th>
                <th>Convention Centre</th>
                <th>Booked</th>
            </tr>
                <?php
                while($row = mysqli_fetch_assoc($result))
                {
                ?> 
                <tr>
                <td><?php echo $row['name'];?></td>
                <td><?php echo $row['location'];?></td>
                <td><?php echo $row['capacity'];?></td>
                <td><?php echo $row['date'];?></td>
                <td><?php echo $row['phone'];?></td>
                <td><?php echo $row['center'];?></td>
                <td><?php echo $row['booked'];?></td>
                </tr>
                <?php
                }
                ?>
        </table>
        <a href="show.php">Go to details</a>
    </div>
</body>
</html>