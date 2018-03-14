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

// to run the program please run:
// npm install textract
// node app.js www.geektime.co.il/ofo-launches-in-israel/ www.calcalist.co.il/internet/articles/0,7340,L-3734144,00.html

