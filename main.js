var last_position_of_touch_x, last_position_of_touch_y;

canvas = document.getElementById('myCanvas');

pen = canvas.getContext("2d");

color = "black";

width_of_line = 2;


screen_width = screen.width;

screen_height = screen.height;

canvas_width = screen_width - 50;

canvas_height = screen_height - 250;

if (screen_width < 992) {

    document.getElementById("myCanvas").width = canvas_width;

    document.getElementById("myCanvas").height = canvas_height;

    document.body.style.overflow = "hidden";

}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;

    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    color = document.getElementById("color").value;

    width_of_line = document.getElementById("width_of_line").value;

}



canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;

    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    pen.beginPath();

    pen.strokeStyle = color;

    pen.lineWidth = width_of_line;

    pen.moveTo(last_position_of_touch_x, last_position_of_touch_y);

    pen.lineTo(current_position_of_touch_x, current_position_of_touch_y);

    pen.stroke();

    last_position_of_touch_y = current_position_of_touch_y;

    last_position_of_touch_x = current_position_of_touch_x;

}



canvas = document.getElementById("myCanvas");

pen = canvas.getContext("2d");

mouse_event = "";

var last_pos_x, last_pos_y;

var colour = "black";

var width_of_line = 2;

canvas.addEventListener("mousedown", mouse_click);

function mouse_click(e) {

    mouse_event = "mousedown";

    console.log(mouse_event);

    colour = document.getElementById("color").value;

    width_of_line = document.getElementById("width_of_line").value;


}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

    mouse_event = "mouseup";

    console.log(mouse_event);


}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouse_event = "mouseleave";

    console.log(mouse_event);

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_pos_mouse_x = e.clientX - canvas.offsetLeft;

    current_pos_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){

        pen.beginPath();

        pen.strokeStyle = colour;

        pen.lineWidth = width_of_line;

        pen.moveTo(last_pos_x,last_pos_y);

        pen.lineTo(current_pos_mouse_x,current_pos_mouse_y);

        pen.stroke();

    }

    last_pos_x = current_pos_mouse_x;

    last_pos_y = current_pos_mouse_y;

}

function clearArea(){

pen.clearRect(0,0,1000,1000);

}
