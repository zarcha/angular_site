<?php
    $host="p3plcpnl0661.prod.phx3.secureserver.net"; // Host name
    $username="zarch"; // Mysql username
    $password="Kimberly2"; // Mysql password
    $db_name="web_login"; // Database name
    // Connect to server and select databse.
    $con=mysql_connect("$host", "$username", "$password")or die("cannot connect");
    mysql_select_db($db_name) or die("Unable to connect to database");
?>