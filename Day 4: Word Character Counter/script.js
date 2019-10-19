const character_count = document.getElementById('character_count');
const word_count = document.getElementById('word_count');
const whitespace_count = document.getElementById('whitespace_count');
const line_count = document.getElementById('line_count');
const text_data = document.getElementById('text_data');

let char_val, wrd_val, whteSpc_val, lne_val;

text_data.addEventListener('input', function(e){
    char_val = e.target.value;
    if (char_val !== null && char_val !== "") {
        character_count.innerText = char_val.length;

        wrd_val = char_val.split(' ');        
        word_count.innerText = wrd_val.length;

        whteSpc_val = wrd_val.length - 1;
        whitespace_count.innerText = whteSpc_val;

        lne_val = char_val.split('\n');
        line_count.innerText = lne_val.length;
    } else{
        character_count.innerText = 0;
        word_count.innerText = 0;
        whitespace_count.innerText = 0;
        line_count.innerText = 0;
    }
});