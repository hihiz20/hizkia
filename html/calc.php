<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first = $_POST['first'];
    $second = $_POST['second'];
    $operation = $_POST['group1'];
    $result = 0;

    if (is_numeric($first) && is_numeric($second)) {
        switch ($operation) {
            case 'add':
                $result = $first + $second;
                break;
            case 'subtract':
                $result = $first - $second;
                break;
            case 'times':
                $result = $first * $second;
                break;
            case 'divide':
                if ($second == 0) {
                    $result = 'Division by zero error!';
                } else {
                    $result = $first / $second;
                }
                break;
        }
        echo "Result: $result";
    } else {
        echo "Invalid input: please enter numeric values.";
    }
}
?>
