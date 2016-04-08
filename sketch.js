var img;

var myPhrase, myPart;
var bass_sound, snare_sound , highHat_sound;
var playing = false;

 var r = [1,1,1,2,2,2,2,1];
 var g = [1,0,0,2,2,2,0,0];
 var b = [0,0,0,2,0,2,0,2];
 
 var msg = 'Tap on the image';

function preload() 
{
  img = loadImage("assets/lovejack.jpg");
  bass_sound    = loadSound(href="assets/bass.mp3");
  snare_sound   = loadSound(href="assets/snare.mp3");
  highHat_sound = loadSound(href="assets/High hat.mp3");
  
}
 
function setup() {
  createCanvas(1200,670);
  //background(0);
 
  image(img, width/10, height/10);
  
  
  var Bass_Phrase = new p5.Phrase('Bass_Phrase', make_Bass_Sound, r);
  var Snare_Phrase = new p5.Phrase('Snare_Phrase', make_Snare_Sound, g);
  var HighHat_Phrase = new p5.Phrase('HighHat_Phrase', make_HighHat_Sound, b);
 
  myPart = new p5.Part();
  myPart.addPhrase(Bass_Phrase);
  myPart.addPhrase(Snare_Phrase);
  myPart.addPhrase(HighHat_Phrase);
  
  myPart.setBPM(50);
  masterVolume(0.1);
  

 
}



function draw() {

  noStroke();
  fill(0);
  text(msg, width/15 + img.width/2, height/11);
  
}

function make_Bass_Sound(time, playbackRate) {
  bass_sound.rate(playbackRate);
  bass_sound.play(time);
}

function make_Snare_Sound(time, playbackRate) {
  snare_sound.rate(playbackRate);
  snare_sound.play(time);
}

function make_HighHat_Sound(time, playbackRate) {
  highHat_sound.rate(playbackRate);
  highHat_sound.play(time);
}

function mouseClicked() 
{
  
   if ((mouseX > width/10) && (mouseX < (width/10+img.width)) && (mouseY > height/10) && mouseY < (height/10 + img.height) ) 
  {   
    
    
    if (!playing)
    {
      var c = get(mouseX, mouseY); //Returns an array of [R,G,B,A] values for any pixel 
     
     if ( c[0] > 100 )          // for red
       r.push(1);
     else
       r.push(0);
       
       
       if ( c[1] > 100 )        // for green
       g.push(1);
     else
       g.push(0);
       
       if ( c[2] > 100 )        // for blue
       b.push(1);
     else
       b.push(0);
     
     
      
      console.log('pixel red:'+ c[0] + ' ' + 'Pixel Green:'+ c[1] + ' '+ 'Pixel blue: '+ c[2]  );
      console.log('Array Red (Bass):'+ r);
      console.log('Array Green (Snare):'+ g);
      console.log('Array Blue (HighHat):'+ b);
    
      
      console.log(mouseX+' '+ mouseY);
      console.log(' width/10: '+ width/10 +'  img.width: '+ img.width+ ' height/10: '+height/10 + 'img.height: '+ img.height  );
      
        myPart.start();
        
        playing = true;
    }
    
     else
    {
      
      playing = false;
      //msg     = 'click here to play';
      
    }
    
  }  
    

  
  
  
}