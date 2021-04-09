<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="list.css">
</head>
<body>
<table>
    <?php 
    $row_length=3;
    $db = mysqli_connect('localhost','root','','gallery');
    if (mysqli_connect_errno())
    echo "wystąpił błąąd";

    else {
        $pytanie="SELECT `name` FROM pictures";
        $execution=mysqli_query($db,$pytanie);
        echo'<tr>';
        $i=0;
       while($jar = mysqli_fetch_array($execution)){
        
     
      
       
   echo'<td><img src="'.$jar['name'].'.png" height="300px"></td>';
    $i++;
    if($i==3){
        echo'</tr><tr>';
        $i=0;
    }


        
    }
    echo '</tr>';
}

    ?>
</table>
</body>
</html>