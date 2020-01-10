<?php
//get u_id from url
if (isset($_GET['name'])) {
  $name = htmlspecialchars($_GET['name']);
  $score= htmlspecialchars($_GET['score']);


  $data = [
  	'name' => $name,
  	'score'=> $score
  ];

  include 'includes/dbh.php';
  // Add this product into the database now
  $sql = "INSERT INTO top_users (name, score) VALUES (:name, :score)";

  $stmt= $pdo->prepare($sql);
  $stmt->execute($data);

 //refresh the page
  header("location: index.php");
  exit();
}
