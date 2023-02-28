var showdown = require('showdown');

function run(inputText) {
    converter = new showdown.Converter();
    html = converter.makeHtml(inputText);
    return html
}

module.exports = { run };