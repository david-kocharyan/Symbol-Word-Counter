document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        var text = selection[0];
        var symbol = 0;
        var word = 0;

        if(selection[0] != ""){
            symbol = text.length
            word = text.split(' ').filter(v => v != '').length;
        }

        document.getElementById('symbol').innerHTML = symbol;
        document.getElementById('word').innerHTML = word;
    });
})