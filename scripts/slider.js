let index = 0;
let img = [document.getElementById('img1'),document.getElementById('img2'),document.getElementById('img3'),document.getElementById('img4')];
let dots = [document.getElementById('dot1'),document.getElementById('dot2'),document.getElementById('dot3'),document.getElementById('dot4')];

let timerImage = setInterval(()=>currentSlide(index + 1), 4000);

let currentSlide = function(n){
  console.log("n = "+n);
  console.log("inx = "+index);
  clearInterval(timerImage);
  if(n === -1){
    n = 3;
  }
  if(n === 4){
    n = 0;
  }
    if(n != index){ 
      dots[index].style.backgroundColor = '#bbb';
      dots[n].style.backgroundColor = 'rgb(223, 143, 58)';

      for (let i = 0; i < img.length; i++) {
        if(i!=n && i!=index){
          img[i].style.zIndex = 1;
        }
        img[i].style.opacity = 1;
        img[i].classList.remove('fade-out');
        img[i].classList.remove('fade-in');
      }

      img[index].style.zIndex = 10;
      img[n].style.zIndex = 9;

      img[index].classList.add('fade-out');
      img[n].classList.add('fade-in');

      index = n;
    }
    timerImage = setInterval(()=>currentSlide(index + 1), 4000);
}

let nextSlide = function(){
  currentSlide(index + 1);
} 

let prevSlide = function(){
  currentSlide(index - 1);
} 