# 2d-BrowserGame
Live version: http://2dgame.unaux.com/index.php

Control: using the space key.<br>
Jump over the red squares that come towards you and gain a high score. <br>
The game end when the player collide with one of the red squares.

![alt text](https://imgur.com/5rAzxOg.png)

# Set-up the database for leaderboard
Database Table:<br>
top_users[id, name, score]<br>
id: INT, Primary Key<br>
name: VARCHAR<br>
score: INT<br>

Edit dbh file: includes => dbh.php

$dbServerName = ""; // localhost<br>
$dbUsername = "root"; // Your database username <br>
$dbPassword = ""; //Your database password <br>
$dbName = ""; // Your database name <br>

$dsn = "mysql:host=localhost;dbname=yourDbName;charset=utf8mb4";

# Top 5 users
![alt-text](https://imgur.com/cHkiv1L.png)

$sql = "SELECT id, name, score FROM top_users ORDER BY score DESC LIMIT 5";
