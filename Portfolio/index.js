let icon1 = document.querySelector('.img1'); 
let icon2 = document.querySelector('.img2'); 

function changeImg() {
  let body = document.body;
  let currentColor = window.getComputedStyle(body).backgroundColor;

  if (currentColor === 'rgb(255, 255, 255)' || currentColor === '#fff') {
    body.style.backgroundColor = 'black';
    icon1.style.display = 'none'; 
    icon2.style.display = 'block';
    body.style.color='white'
  } else {
    body.style.color='black';
    body.style.backgroundColor = 'white';
    icon1.style.display = 'block';
    icon2.style.display = 'none';
  }
}
