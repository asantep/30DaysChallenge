let output_view = document.getElementById('output_view');
let button_input = document.getElementById('button_input');
let font_size_input = document.getElementById('font_size_input');
let font_color_selector = document.getElementById('font_color_selector');
let top_input = document.getElementById('top_input');
let right_input = document.getElementById('right_input');
let bottom_input = document.getElementById('bottom_input');
let left_input = document.getElementById('left_input');
let background_color_selector = document.getElementById('background_color_selector');
let border_color_selector = document.getElementById('border_color_selector');
let border_width_input = document.getElementById('border_width_input');
let border_radius_input = document.getElementById('border_radius_input');
let submit = document.getElementById('submit');

// Padding default values
let pTop = top_input.value;
let pRight = right_input.value;
let pBottom = bottom_input.value;
let pLeft = left_input.value;
// font style properties
let fontSize = font_size_input.value;
let fontColor = font_color_selector.value;
// border style properties
let borderColor = border_color_selector.value;
let borderWidth = border_width_input.value;
let borderRadius = border_radius_input.value;
// background color
let bgColor = background_color_selector.value;

output_view.style.padding = `${pTop}${"px"} ${pRight}${"px"} ${pBottom}${"px"} ${pLeft}${"px"}`;

button_input.addEventListener('input', function(){
    output_view.value = "";
    output_view.value = button_input.value;
});
font_size_input.addEventListener('input',function(){
    fontSize = font_size_input.value;
    output_view.style.fontSize = `${fontSize}${'px'}`;
});
font_color_selector.addEventListener('input',function(){
    fontColor = font_color_selector.value;  
    output_view.style.color =  `${fontColor}`;
});
top_input.addEventListener('input',function(){
    pTop = top_input.value;
    output_view.style.paddingTop = `${pTop}${'px'}`;
});
right_input.addEventListener('input',function(){
    pRight = right_input.value;
    output_view.style.paddingRight = `${pRight}${'px'}`;
});
bottom_input.addEventListener('input',function(){
    pBottom = bottom_input.value;
    output_view.style.paddingBottom = `${pBottom}${'px'}`;
});
left_input.addEventListener('input',function(){
    pLeft = left_input.value;
    output_view.style.paddingLeft = `${pLeft}${'px'}`;
});
background_color_selector.addEventListener('input',function(){
    bgColor = background_color_selector.value;  
    output_view.style.backgroundColor =  `${bgColor}`;
});
border_color_selector.addEventListener('input',function(){
    borderColor = border_color_selector.value;  
    output_view.style.borderColor =  `${borderColor}`;
});
border_width_input.addEventListener('input',function(){
    borderWidth = border_width_input.value;  
    output_view.style.borderWidth =  `${borderWidth}${'px'}`;
});
border_radius_input.addEventListener('input',function(){
    borderRadius = border_radius_input.value;  
    output_view.style.borderRadius =  `${borderRadius}${'px'}`;
});

// let cssData = {
//     title: '#custom-btn',
//     description: {
//         padding: `${pTop}${"px"} ${pRight}${"px"} ${pBottom}${"px"} ${pLeft}${"px"}`,
//         background_color: bgColor,
//         border_color: borderColor,
//     }
// }

// let html = document.getElementById('html_data');
// let text_data = document.querySelector('.htmlText');
// console.log(document.getElementById('output_view'));

// console.log(output_view.t);

// text_data.innerHTML = output_view.nodeValue

