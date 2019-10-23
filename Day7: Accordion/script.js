//<img src="https://img.icons8.com/material-sharp/20/000000/chevron-up.png">

{/* <div class="poke_items" id="sect_4_items">
<li>Sandshrew</li>
<li>Sandslash</li>
<li>Nidoqueen</li>
</div> 
<div class="poke_items" id="sect_3_items">
                    <li>Charmander</li>
                    <li>Charmeleon</li>
                    <li>Charizard</li>
                </div>
            */}

const sect_1_img = document.getElementById('sect_1_img');
const sect_2_img = document.getElementById('sect_2_img');
const sect_3_img = document.getElementById('sect_3_img');
const sect_4_img = document.getElementById('sect_4_img');

let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById('menu2');
let menu3 = document.getElementById('menu3');
let menu4 = document.getElementById('menu4');

let sect_1_items = document.getElementById('sect_1_items');
let sect_2_items = document.getElementById('sect_2_items');
let sect_3_items = document.getElementById('sect_3_items');
let sect_4_items = document.getElementById('sect_4_items');

let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;

sect_1_img.addEventListener('click',()=>{
    clickCount1++;
    sect_1_img.removeAttribute('src');
    sect_1_img.src = 'https://img.icons8.com/material-sharp/20/000000/chevron-up.png';
    sect_1_img.style.paddingLeft = '158px';

    sect_1_items.classList.replace('poke_items','poke_items_include');
    sect_2_items.classList.replace('poke_items_include','poke_items');
    sect_3_items.classList.replace('poke_items_include','poke_items');
    sect_4_items.classList.replace('poke_items_include','poke_items');

    menu1.classList.replace('menu_info','menu_info_include');
    menu2.classList.replace('menu_info_include','menu_info');
    menu3.classList.replace('menu_info_include','menu_info');
    menu4.classList.replace('menu_info_include','menu_info');

    sect_4_img.removeAttribute('src');
    sect_4_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_2_img.removeAttribute('src');
    sect_2_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_3_img.removeAttribute('src');
    sect_3_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';

    if (clickCount1 == 2) {
        sect_1_img.removeAttribute('src');
        sect_1_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
        sect_1_items.classList.replace('poke_items_include','poke_items');
        menu1.classList.replace('menu_info_include','menu_info');
    }
})
sect_2_img.addEventListener('click',()=>{
    clickCount2++
    sect_2_img.removeAttribute('src');
    sect_2_img.src = 'https://img.icons8.com/material-sharp/20/000000/chevron-up.png';
    sect_2_img.style.paddingLeft = '158px';

    sect_1_items.classList.replace('poke_items_include','poke_items');
    sect_3_items.classList.replace('poke_items_include','poke_items');
    sect_4_items.classList.replace('poke_items_include','poke_items');
    sect_2_items.classList.replace('poke_items','poke_items_include');

    menu1.classList.replace('menu_info_include','menu_info');
    menu2.classList.replace('menu_info','menu_info_include');
    menu3.classList.replace('menu_info_include','menu_info');
    menu4.classList.replace('menu_info_include','menu_info');

    sect_1_img.removeAttribute('src');
    sect_1_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_4_img.removeAttribute('src');
    sect_4_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_3_img.removeAttribute('src');
    sect_3_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';

    if (clickCount2 == 2) {
        sect_2_img.removeAttribute('src');
        sect_2_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
        sect_2_items.classList.replace('poke_items_include','poke_items');
        menu2.classList.replace('menu_info_include','menu_info');
    }

})
sect_3_img.addEventListener('click',()=>{
    clickCount3++;
    sect_3_img.removeAttribute('src');
    sect_3_img.src = 'https://img.icons8.com/material-sharp/20/000000/chevron-up.png';
    sect_3_img.style.paddingLeft = '158px';

    sect_1_items.classList.replace('poke_items_include','poke_items');
    sect_4_items.classList.replace('poke_items_include','poke_items');
    sect_2_items.classList.replace('poke_items_include','poke_items');
    sect_3_items.classList.replace('poke_items','poke_items_include');

    menu3.classList.replace('menu_info_include','menu_info');
    menu4.classList.replace('menu_info','menu_info_include');
    menu1.classList.replace('menu_info_include','menu_info');
    menu2.classList.replace('menu_info_include','menu_info');
    
    sect_1_img.removeAttribute('src');
    sect_1_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_2_img.removeAttribute('src');
    sect_2_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_4_img.removeAttribute('src');
    sect_4_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';

    if (clickCount3 == 2) {
        sect_3_img.removeAttribute('src');
        sect_3_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
        sect_3_items.classList.replace('poke_items_include','poke_items');
        menu3.classList.replace('menu_info_include','menu_info');
    }
})
sect_4_img.addEventListener('click',()=>{
    clickCount4++;
    sect_4_img.removeAttribute('src');
    sect_4_img.src = 'https://img.icons8.com/material-sharp/20/000000/chevron-up.png';
    sect_4_img.style.paddingLeft = '158px';

    sect_1_items.classList.replace('poke_items_include','poke_items');
    sect_3_items.classList.replace('poke_items_include','poke_items');
    sect_2_items.classList.replace('poke_items_include','poke_items');
    sect_4_items.classList.replace('poke_items','poke_items_include');

    menu1.classList.replace('menu_info_include','menu_info');
    menu4.classList.replace('menu_info','menu_info_include');
    menu3.classList.replace('menu_info_include','menu_info');
    menu2.classList.replace('menu_info_include','menu_info');
    
    sect_1_img.removeAttribute('src');
    sect_1_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_2_img.removeAttribute('src');
    sect_2_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
    sect_3_img.removeAttribute('src');
    sect_3_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';

    if (clickCount4 == 2) {
        sect_4_img.removeAttribute('src');
        sect_4_img.src = 'https://img.icons8.com/android/20/000000/chevron-down.png';
        sect_4_items.classList.replace('poke_items_include','poke_items');
        menu4.classList.replace('menu_info_include','menu_info');
    }
})

