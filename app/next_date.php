<?php

// get next friday date
function get_next_friday() {
    $date = date('Y-m-d');
    $day = date('w', strtotime($date));
    $delta = 5 - $day;
    if ($delta <= 0) {
        $delta += 7;
    }
    $next_friday = strtotime($date) + $delta * 24 * 60 * 60;
    return new DateTime(date('Y-m-d', $next_friday));
}

$next_friday = get_next_friday();
$presale_limit = (clone $next_friday)->modify('-10 hours');

return [
    'next_friday' => $next_friday->format('c'),
    'presale_limit' => $presale_limit->format('c'),
];
