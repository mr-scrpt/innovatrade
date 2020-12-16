<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
extract(array_map("htmlspecialchars", $_POST), EXTR_OVERWRITE);



$url = "http://marketing.affboat.com/api/v3/integration?api_token=zLrNQdq8SepaFvyAuOHjIO4Te9odiTw8V9IP2FWCigoNQTrUpH1ZO8ChoDP1";

$ip = isset($_SERVER['HTTP_CLIENT_IP']) ? $_SERVER['HTTP_CLIENT_IP'] : isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];

$domain = $_SERVER['SERVER_NAME'];

 
$apiData = [
    'fname'         => $fname, 
    'lname'         => $lname ? $lname : 'None',
    'fullphone'     => $fullphone, //$_POST['phone_num']
    'ip'            => $ip,
    'email'         => $email, //$_POST['user_email']
    'source'        => $source,
    'domain'        => $domain,
    'link_id'       => $link_id,
    // 'utm_source'    => isset($utm_source) ? $utm_source : "",
    // 'utm_medium'    => isset($utm_medium) ? $utm_medium : "",
    // 'utm_campaign'  => isset($utm_campaign) ? $utm_campaign : "",
    // 'utm_term'      => isset($utm_term) ? $utm_term : "",
    // 'utm_content'   => isset($utm_content) ? $utm_content : ""
];


header('Content-Type: application/json');

try {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt(
        $ch,
        CURLOPT_POSTFIELDS,
        http_build_query($apiData)
    );

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
    $response = json_decode($server_output);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
        ]);
    die;
}

if ($response->success) {
    echo json_encode([
        'success' => true,
        'autologin' => $response->autologin,
        'password' => base64_encode($response->password)
    ]);
    return json_encode([
        'success' => true,
        'autologin' => $response->autologin,
        'password' => base64_encode($response->password)
    ]);
    die;
} else {
    echo json_encode([
        'success' => false,
        'message' => $response->message,
        'debug' => json_encode($response)
    ]);
    return json_encode([
        'success' => false,
        'message' => $response->message,
        'debug' => json_encode($response)
    ]);
    die;
}
