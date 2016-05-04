#!/usr/bin/env node

var sys = require('util')
var exec = require('child_process').exec;
var child;

child = exec("avahi-publish-service Wisnuc_AppStation _http._tcp 6666 Model=Generic_X86-64 Mac=12:34:56:78:90", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
