//520

function detectCapitalUse(word) {
    return word.substring(1) === (word.substring(1).toLowerCase())|| word === (word.toUpperCase());
}