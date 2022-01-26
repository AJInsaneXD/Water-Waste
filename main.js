var img = [
  'images.jpg',
  'images (1).jpg',
  'Langston-Hughes.webp',
  'save-water-conservation-slogans-quotes_2.jpg',
  'water-quote-2-300x300.webp',
  'World-Water-Day-Image-HD.jpg'
 ];

var i = 0;
function nextslide() {
  if(i == 6)
   {
  i=0;
}
  document.getElementById("album"). src = img[i];
  i++
  
}

var images = [
  "slide2.png",
  "slide3.png",
  "slide4.png",
  "slide5.png",
  "slide6.png",
  "slide7.png",
    "slide8.png",
    "slide9.png"
 ];

var i = 0;
function nextppt() {
  if(i == 8)
   {
  i=0;
}
  document.getElementById("slide"). src = images[i];
  i++
  
}