<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

try{ 
    $pdo = new PDO("mysql:host=127.0.0.1;port=3306;dbname=mydb", "root", "");//change the dbname 
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $stmt=$pdo->prepare("SELECT * FROM produit");//or change produit into your table
    $stmt->execute();
    $product=$stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    //print_r($product);
    $info=json_encode($product);
}catch(PDOException $e){
    echo "connection failed because ::::$e";
}
 echo $info;
    
