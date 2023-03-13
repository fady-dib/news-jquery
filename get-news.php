<?php

include('connection.php');

$query = $mysqli -> prepare('SELECT * from regional_news');
$query -> execute();
$result = $query->get_result();

$news = [];
while ($row = $result->fetch_assoc()) {
    $news[] = $row;
}

$response = array(
    'news' => $news
);



header('Content-Type: application/json');
echo json_encode($response);

?>