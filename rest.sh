#!/bin/bash
id='angular7';
appKey='kid_ByuSaH_kE';

userAuth="vera:geheim";
encodeString=`echo -n "$userAuth" | base64`

echo "before encoding base64: $userAuth";
echo "after  encoding base64: $encodeString";
echo "CHECK                 : dmVyYTpnZWhlaW0=" ;

####
#### Handshake
####
curl \
	-H "Content-Type:application/json" \
	-H "Authorization: Basic $encodeString" \
	-H "X-Kinvey-API-Version:3" \
	-H "Host:baas.kinvey.com" \
	https://baas.kinvey.com/appdata/$appKey;
