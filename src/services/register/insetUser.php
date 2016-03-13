<?php
  ob_start();
  include("../core/db.php");

  $myusername=$_POST['username'];
  $myemail=$_POST['email'];
  $mypassword=$_POST['password'];

  $myusername = stripslashes($myusername);
  $myemail = stripslashes($myemail);
  $mypassword = stripslashes($mypassword);
  $encrypted_mypassword = md5($mypassword);

  $sql = "SELECT * FROM users WHERE username='" . $myusername . "'";
  $result=mysql_query($sql);

  $count = mysql_num_rows($result)

  //date_default_timezone_set("UTC");
  //$date = date('Y-m-d H:i:s');

  if($count == 0){
     if(mysql_query("INSERT INTO users (username, password, email, group) VALUES ('$myusername', '$encrypted_mypassword', '$myemail', '1')"){
        echo "Success";
     }
  }

