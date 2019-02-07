<?php
//tip: user a user account you created in kenvey admin panel.
//will make things easy when displaying the files later.
 $username = "vera";
 $password = "geheim";

//set the endpoint in curl_init after https://baas.kinvey.com/
  $ch = curl_init("https://baas.kinvey.com/appdata/kid_ByuSaH_kE");

//You need to send the appropriate header and use base64_encode function to scrable username and password
  curl_setopt($ch, CURLOPT_HTTPHEADER, 
			  array("Content-Type: application/json",
					"Authorization: Basic ".base64_encode($username . ":" . $password),
					"X-Kinvey-API-Version: 3"));

//cURL after we send something give us a reply.
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//curl_exec opens the curl connection, grabs the info and saves it in $result2 variable
        $result2 = curl_exec($ch);

//Kinvey sends back JSON and it needs to be decoded using json_decode function in php..more fun functions listed on http://php.net
        $result2 = json_decode($result2, true);

//it's a good practice to close what you open.
        curl_close($ch);

//let's dump what we got back from Kinvey on to page
        var_dump($result2);

        //echo $result2;
					echo "Authorization: Basic ".base64_encode($username . ":" . $password);

?>
