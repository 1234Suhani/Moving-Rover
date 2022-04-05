canvas= document.getElementById('my_canvas');
ctx= canvas.getContext("2d");
Mars_images = ['Mars0.jpg','Mars1.jpg','Mars2.jpg','Mars3.jpg','Mars4.jpg','Mars5.jpg','Mars6.jpg','Mars7.jpg','Mars8.jpg','Mars9.jpg'];
var random= Math.floor(Math.random()*9);
console.log(random);
var rover_width= 100;
var rover_height= 90;
var background_image= Mars_images[random];
var rover_image="rover.png";
var rover_x= 10;
var rover_y= 10;
function add(){
    background_image_tag= new Image();
    background_image_tag.onload= upload_backgound;
    background_image_tag.src= background_image;
    rover_image_tag= new Image();
    rover_image_tag.onload= upload_rover;
    rover_image_tag.src= rover_image;
}
function upload_backgound(){
    ctx.drawImage(background_image_tag, 0,0 , canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var key_press= e.keyCode;
    console.log(key_press);
    if(key_press=='38'){
        console.log("Up");
Up();
    }
    if(key_press=='40'){
        console.log("Down");
        Down();
    }

    if(key_press=='37'){
        console.log("Left");
        Left();
    }

    if(key_press=='39'){
        console.log("Right");
        Right();
    }
}
function Up(){
    if(rover_y>= 0){
        rover_y=rover_y - 5;
        upload_backgound();
        upload_rover();
      }
    }

function Down(){
        if(rover_y<= 600){
            rover_y= rover_y + 5;
            upload_backgound();
            upload_rover();
        }
    }
function Right(){
    if(rover_x<=900){
        rover_x=rover_x + 5;
        upload_backgound();
        upload_rover();
    }
  }  
function Left(){
    if(rover_x >0){
        rover_x=rover_x - 5;
        upload_backgound();
        upload_rover();
    }
  }

