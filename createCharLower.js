var randomInteger = function(val) {
    var ival = Math.randon()*26+97;
    //console.log(ival);
    ival = Math.floor(ival);
    return ival;
    
var rInt ;
var i;
for (i = 0; i < 65536; i++){
rInt    = randomInterger();
letter = String.fromCharCode(rInt);
process.stdout.write(letter);
//console.log(letter);
//document.write(5 + 6);

}
