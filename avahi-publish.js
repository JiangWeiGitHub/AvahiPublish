
#!/usr/bin/env node

var sys = require('util');
var exec = require('child_process').execSync;

var platformValue = '';
var arrayMACName = new Array();
var arrayInterfaceName = new Array();
var avahiString = '';
var macNameArrayString = '';

function saveInterfaceNameToArray(element){
  if(element.indexOf('->') > -1){
    if(element.indexOf('virtual') > -1){

    }
    else
    {
      var tmp = element.split('/');
      arrayInterfaceName.push(tmp[tmp.length - 1]);
    }
  }
}

function saveMACNameToArray(element){
  var tmpString = 'cat /sys/class/net/' + element  + '/address';
  var tmp = exec(tmpString);
  var tmpOneLine = tmp.toString().split('\n');
  arrayMACName.push(tmpOneLine[0]);
}

function constructMACNameArrayString(element, index, array){
  if(array.length > 1){
    macNameArrayString += "Mac" + (parseInt(index)+1) + "=" + element + ' ';
  }
  else{
    macNameArrayString += "Mac=" + element + ' ';
  }
}

function constructAvahiString(platformValue, macNameArrayString){
  avahiString = "avahi-publish-service 'Wisnuc AppStation' _http._tcp 6666 Model=" + platformValue + ' ' + macNameArrayString + "&";
}

var platformCMD = exec("uname -i");
var platformValue = platformCMD.toString().replace(/\r|\n|\r\n/g,"");

var child = exec('ls -l /sys/class/net/');
var allInterface = child.toString().split('\n');

allInterface.forEach(saveInterfaceNameToArray);
arrayInterfaceName.forEach(saveMACNameToArray);
arrayMACName.forEach(constructMACNameArrayString);

constructAvahiString(platformValue, macNameArrayString);
console.log('result: ' + avahiString);

var avahiCMD = exec(avahiString);
