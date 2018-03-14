const textract = require('textract');

var wordsCounter = {};

function logWordsCounter(){
    console.log(sort(wordsCounter))
}

var urlCounters = 0;

function extractWordsFromURLs(urls) {
    urls.forEach(function (url) {
        textract.fromUrl(url, null, function (err, words) {
            urlCounters++;
            if (err) {
                console.log('Error with ' + url );
            }
            words.split(' ').forEach(function (word) {
                if (wordsCounter.hasOwnProperty(word)) {
                    wordsCounter[word]++;
                }
                else {
                    wordsCounter[word] = 1;
                }
            });
            if (urlCounters == urls.length) {
                logWordsCounter();
            }

        });
    });
}

function sort(dict){
    var items = Object.keys(dict).map(function(key) {//make array of arrays
        return [key, dict[key]];
    });

    return items.sort(function(first, second) {//first sort by most common second by length of word
        return second[1] - first[1] || second[0].length - first[0].length;
    });
}

module.exports.extractWordsFromURLs = extractWordsFromURLs;
