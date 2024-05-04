const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
  'pic1.jpg': 'Sunset over mountains',
  'pic2.jpg': 'Waterfall in a lush forest',
  'pic3.jpg': 'City skyline at night',
  'pic4.jpg': 'Fields of flowers',
  'pic5.jpg': 'Beach with palm trees'
};

/* Looping through images */
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  const imagePath = `images/${filename}`;

  newImage.setAttribute('src', imagePath);
  newImage.setAttribute('alt', altText[filename]);
  thumbBar.appendChild(newImage);

 // Add click event listener to each thumbnail image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', imagePath);
    displayedImage.setAttribute('alt', altText[filename]);
  });
});  

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.setAttribute("class", "dark");
btn.textContent = "Darken";
overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";

btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute("class");

  if (currentClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});
