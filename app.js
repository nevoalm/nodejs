const logic = require('./logic');

var urls =[];
if(process.argv.length <= 2){
    console.log('missing urls?');
    return
}

for(var i = 2; i < process.argv.length; i++){
    urls.push(process.argv[i]);
}
logic.extractWordsFromURLs(urls);
