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
    var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });

    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    items.sort(function(first, second) {
        if (first[1] == second[1]) {
            return second[0].length - first[0].length;
        }
        return 0;
    });
    return items;
}

module.exports.extractWordsFromURLs = extractWordsFromURLs;
