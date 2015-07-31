# nagios plugin 

check json result of remote url against local stored expected result

## usage

`node check_json.js <host/ip> <port> <url-path> <local-json-file>`

## example

`node check_json.js 127.0.0.1 81 /?test=yes result.json`

