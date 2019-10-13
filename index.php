<!DOCTYPE html>

<html>

  <head>

    <meta name = "viewport" content = "width=device-width">
    <title>2d Game</title>
    <link href = "style.css" rel = "stylesheet" type = "text/css">

  </head>

<div class="top">
    Total distance: <a id="distance">0</a>
    <form class="insert" action="/insert_user.php">
    Name: <input type="text" name="name">
    <input type="submit" value="Send">
  </form>
</div>

  <body>
    <canvas ontouchstart="myFunction()"></canvas>

    <p>Use Space button to jump.</p>

    <script src = "control.js" type = "text/javascript"></script>
  </body>

  <div>
    <h3 style="text-align:center;">Top 5</h3><br>
    <?php require ('top_list.php'); ?>
  </div>

</html>
