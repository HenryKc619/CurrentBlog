// Access the Images
let slideImages = document.querySelectorAll('.home-banner-box');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
  slideImages[counter].style.animation = 'next1 1s ease-in forwards';
  if(counter >= slideImages.length-1){
    counter = 0;
  }
  else{
    counter++;
  }
  slideImages[counter].style.animation = 'next2 1s ease-in forwards';
  indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
  slideImages[counter].style.animation = 'prev1 1s ease-in forwards';
  if(counter == 0){
    counter = slideImages.length-1;
  }
  else{
    counter--;
  }
  slideImages[counter].style.animation = 'prev2 1s ease-in forwards';
  indicators();
}

// Auto sliding
function autoSliding(){
  deletInterval = setInterval(timer, 5000);
  function timer(){
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when the mouse is over
const container = document.querySelector('.home-banner-image');
container.addEventListener('mouseover', function(){
  clearInterval(deletInterval);
});

// Resume sliding when the mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove the active class from the indicators
function indicators(){
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage){
  currentImage.classList.add('active');
  var imageId = currentImage.getAttribute('attr');
  if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  }
  else if(imageId == counter){
    return;
  }
  else{
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
  indicators();
}

// ... previous code ...

