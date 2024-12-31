const mapping = {
    'A': '/\\', 'B': '阝', 'C': '匚', 'D': '囙', 'E': '巨', 'F': '千',
    'G': '厶', 'H': '廾', 'I': '丨', 'J': '丿', 'K': '丨<', 'L': '乚',
    'M': '/\\/\\', 'N': '/\\/', 'O': '口', 'P': '卩', 'Q': '㔾', 'R': '及',
    'S': '丂', 'T': '丅', 'U': '凵', 'V': '\\/', 'W': '\\/\\/', 'X': '乂',
    'Y': '丫', 'Z': '乙', ' ': '　'
};

//変換結果を出力
document.getElementById('input').addEventListener('input', () => {
    const input = document.getElementById('input').value;
    let output = '';
    for (let char of input) {
        output += mapping[char.toUpperCase()] || char;
    }
    document.getElementById('output').value = output;
});

// ツイートボタン
document.getElementById('convert').addEventListener('click', () => {
    const outputText = document.getElementById('output').value;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(outputText)}`;
    window.open(tweetUrl, '_blank');
});