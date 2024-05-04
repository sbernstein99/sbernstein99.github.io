const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
  'pic1.jpg': 'Aerial View of the Horseshoe Bend',
  'pic2.jpg': 'A glowing waterfall amidst a grey sky',
  'pic3.jpg': 'A group of cacti amidst an Arizona sunset',
  'pic4.jpg': 'A close-up of the inside of a canyon',
  'pic5.jpg': 'A waterfall nestled within a rock formation amidst a sunny sky'
};

/* Looping through images */
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  const imagePath = 'images/${image}';
  newImage.setAttribute('src', imagePath);
  newImage.setAttribute('alt', altText[filename]);
  thumbBar.appendChild(newImage);

/* Add click event listener to each thumbnail image */
 newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', imagePath);
    displayedImage.setAttribute('alt', altText[filename]);
  });
}); 

const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/${image}');
newImage.setAttribute('alt', altText[image]);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
