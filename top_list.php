<?php
$users_list = "";
$user_nr=1;

include 'includes/dbh.php';
$sql = "SELECT id, name, score FROM top_users ORDER BY score DESC LIMIT 5";

$stmt = $pdo->prepare($sql);
$alertsCount = $stmt->execute(); // count the output amount

//current alerts list
if ($alertsCount > 0) {

  $users_list .= "<table width='100%'>
  <tr><th>Nr.</th>
      <th>Name</th>
      <th>Score</th></tr>";

  while($row = $stmt->fetch(PDO::FETCH_BOTH)){
      $id = $row["id"];
      $name = $row["name"];
      $score = $row["score"];

       $users_list .= "
      <tr>
          <td>$user_nr</td>
          <td>$name</td>
          <td>$score</td>
      </tr>";
    $user_nr+=1;
    }
    $users_list .= "</table>";
    echo $users_list;

} else {
  $users_list = "Lista este goala.";
  echo $users_list;
}
