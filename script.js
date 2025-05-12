const image = document.getElementById('image');
const animateBtn = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');
const saveColorBtn = document.getElementById('saveColorBtn');


document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('bgColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
});


animateBtn.addEventListener('click', () => {
  image.classList.add('spin');

 
  image.addEventListener('animationend', () => {
    image.classList.remove('spin');
  }, { once: true });
});


saveColorBtn.addEventListener('click', () => {
  const selectedColor = colorPicker.value;
  document.body.style.backgroundColor = selectedColor;
  localStorage.setItem('bgColor', selectedColor);
});
