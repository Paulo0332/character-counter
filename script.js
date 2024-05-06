function countCharacters() {
    var inputText = document.getElementById('textInput').value;
    var characterCount = inputText.length;
    document.getElementById('charCount').textContent = characterCount;
}