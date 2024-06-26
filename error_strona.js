let c;
let cc;
let img;
let colorclick=false;  //jesli jest klikniete 


function setup() {
 c = color(135, 55, 255);
  cc = color(174,136,230);
  createCanvas(1920, 1080);
  
  textFont ('Comic Sans MS');
 img = loadImage('LINGODUO_LOGO_SAD.png');
}


function draw() {
  background(255);
  textSize (50);
  fill(c);
  text('Error 404', width/2, height/2-250);
  textSize (25);
  text ('Server not responding', width/2, height/2-200);
  image(img, 800, 220);
  noStroke();
  button (width/2,400,200,50,'Try again'); //2
  button (1800, 20, 100, 30);
  fill (255);
  textSize (18);
  text ('exit', 1832, 41);
}


function mouseReleased(){    //ebu
if (checkMouseOver(width/2,400,200,50) == true){
 window.open ('https://glink-182.github.io/first-page/ ', '_self');
 }
 if (checkMouseOver(1800, 20, 100, 30) == true){
 window.open ('https://activistgames.github.io/startingPoints/', '_self');
}


}


function checkMouseOver(x,y,w,h){      //sprawdza czy myszka jest tad tym przyciskiem 
let check = false;
if(mouseX>x && mouseX<x+w && mouseY > y && mouseY < y+h){
  check = true;
}else{
check = false;
}
return check
}


function button(x,y,w,h,t) {    //rysuje przycisz
  push();
   
if(checkMouseOver(x,y,w,h)== true && colorclick==false){
fill (cc);   
mouseOver = true;
} else {
fill (c);
}
rect(x,y,w,h);
fill (255);
text(t, x+30, y+30);
pop();

}
