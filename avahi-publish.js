#!/usr/bin/env node

var sys = require('util');
var exec = require('child_process').execSync;

var platform_cmd = exec("uname -i");
var platform_value = platform_cmd.toString().replace(/\r|\n|\r\n/g,"");

var mac_cmd = exec("cat /sys/class/net/enp2s0/address");
var mac_value = mac_cmd.toString().replace(/\r|\n|\r\n/g,"");

var result = "avahi-publish-service 'Wisnuc AppStation' _http._tcp 6666 Model=" + platform_value + " Mac=" +  mac_value + "&";
//console.log('result: ' + result);

var avahi_cmd = exec(result);
