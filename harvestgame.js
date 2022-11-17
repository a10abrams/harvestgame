/* create canvas */
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

/* globals */
const currentBg = 0;
const bg = ['wgbackground_01.png','wgbackground_02.png','wgbackground_03.png','wgbackground_04.png','wgbackground_05.png','wgbackground_07.png'];
        /*this array holds the background imgs ^ */
let count = 0;
let image = new Image();

window.addEventListener("keydown",function(e){
    window.key = e.keyCode;
    console.log(window.key)
});
window.addEventListener("keyup",function(e){
    this.window.key = false;
    console.log(window.key);
});

/*this may need to be updated */
canvas.width = 900;
canvas.height = 500;

const usedbg = [];

const playerspritesheet = "spritesheet_bluewitch.png";
image.src = playerspritesheet;

/*this may need to be updated */
let bgImg = new Image();
bgImg.width = window.innerWidth / 3 ;
bgImg.src = bg[count];

count+=1;

/* throw used background images into another array */
usedbg.push(bgImg.src);

var rows = 1;
var columns = 3;
var imgheight = 59;
var imgwidth = 148;
var sizerow = 57;
var sizewidth = 48;

/*this variable is a work in progress 
var currentFrame = (sizerow) * (sizewidth);
*/

/* create game objects */
function game_object(x,y, currentFrame, rows, columns, imgwidth, imgheight,srcX,
    srcY, is_person, is_interact){
   
     this.x = x;
     this.y = y;
     this.currentFrame = 0;
     this.rows = 1;
     this.columns = 3;
     this.imgWidth = 148;
     this.imgHeight = 59;
     this.srcX = srcX;
     this.srcY = srcY;
     const rowSize = this.imgWidth/this.columns;
     const colSize = this.imgHeight/this.rows;
     this.srcY = 1*colSize;
     this.draw = function (){
       
       context.drawImage(bgImg,0,0);
       context.drawImage(image,this.srcX,this.srcY,rowSize, colSize,this.x,this.y,rowSize, colSize);
       context.clearRect(canvas.width,canvas.height,0,0);
  
     }
   /* move player left */
   this.update = function(){
      if(window.key == 39 && this.x <= bgImg.width+365){
         this.srcY = 1*colSize;
         this.currentFrame = ++this.currentFrame % this.columns;
         console.log(x,bgImg.width+500);
         this.x = this.x+10;
         }
   /* move player right--problematic */
      if(window.key == 37 && this.x > 0 ){
         this.currentFrame =  ++this.currentFrame % this.columns;
         this.srcY = 0*colSize;
         this.x = this.x-10;
         }
      this.srcX = this.currentFrame * rowSize;
    }

/* background looping function */
if (this.x >= bgImg.width - 200 && window.key == 37) {
          switch (count) {
            case 1:
              bgImg.src = bg[count];
              count+=1;
              this.x=50;
              break;
           case 2:
             bgImg.src = bg[count];
             count+=1;
             console.log(table);
             this.x=0;
             break;
          default:
            this.x=0;
            break;
          }
             }
 }

 var main_player = new game_object(500, 230, 0, 2, 4, 800, 600, true, true);
 
 setInterval(function(){
   main_player.update();
   context.clearRect(0,0,canvas.width,canvas.height)
   main_player.draw();
 },250);
