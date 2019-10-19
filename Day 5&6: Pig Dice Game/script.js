const die = document.getElementById('die');
const dice_roll = document.getElementById('dice_roll');
let imgElement = document.createElement('img');
let img_src = ['https://i.imgur.com/m9mb3cx.png','https://i.imgur.com/EA2qvGZ.png','https://i.imgur.com/qaekzKO.png','https://i.imgur.com/qbqvQvB.png','https://i.imgur.com/eeBcrqU.png','https://i.imgur.com/vzksTKQ.png']

function createDieSrc(src) {
    imgElement.src = src;
    imgElement.id = "current_die";
    imgElement.alt = "current_die"
    die.appendChild(imgElement);
}
console.log(img_src.length);

dice_roll.addEventListener('click',function(){
    imgElement.removeAttribute('src');
    let val = Math.floor(Math.random(img_src.length)*6); 
    switch (val) {
        case 0:
            createDieSrc(img_src[0]);
            break;
        case 1:
            createDieSrc(img_src[1]);
            break;
        case 2:
            createDieSrc(img_src[2]);
            break;
        case 3:
            createDieSrc(img_src[3]);
            break;
        case 4:
            createDieSrc(img_src[4]);
            break;
        case 5:
            createDieSrc(img_src[5]);
            break;   
        case 6:
            createDieSrc(img_src[6]);
            break; 
        default:            
            break;
    }
    
});
//createDieSrc("https://i.imgur.com/m9mb3cx.png")



// <img id="current_die" src="https://i.imgur.com/m9mb3cx.png" alt="current_die">
