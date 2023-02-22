<?php
    require_once("./config/connection.php");
    $sql = "SELECT * FROM owner";
    $result = mysqli_query($conn, $sql);
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

        .search-box {
            display: flex;
            justify-content: space-between;
        }
        a {
            display: inline-block;
            text-decoration: none;
            background-color: #339696;
            color: #fff;
            padding: 12px 5px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Available Centres</h1>
        <table>
            <tr>
                <th>Owner Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Available Date</th>
                <th>Phone Number</th>
                <th>Convention Centre</th>
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
                </tr>
                <?php
                }
                ?>
        </table>
        <div class="search-box">
            <form action="search.php" method="POST">
                <input type="date" name="searchInput" placeholder="Enter Convention Centre Name">
                <button type="submit" class="btn" name="btn">Search</button>
            </form>
            <div class="">
                <a href="owner.html">Owner Registration</a>
                <a href="user.html">User Registration</a>
            </div>
        </div>
    </div>
</body>
</html>