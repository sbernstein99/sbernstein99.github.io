/*
    
CIS166AA: Introduction to JavaScript
Final Project

Author: Sammy Bernstein
Date:   May 10, 2024

*/


/* Toggle the Mobile Navigation Bar */

document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById('icon');

    const navUl = document.querySelector('nav ul');

    icon.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});


/* Image Gallery */

document.addEventListener("DOMContentLoaded", function() {
  const displayedImage = document.querySelector('.displayed-img');
  const thumbBar = document.querySelector('.thumb-bar');
  const darkButton = document.querySelector('.dark');
  const overlay = document.querySelector('.overlay');

  if (displayedImage && thumbBar && darkButton && overlay) {
      const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
      const altText = {
          'pic1.jpg': 'A vintage photograph of two young girls sitting on the lap of their great-grandmother.',
          'pic2.jpg': 'A vintage photograph of a middle-aged married couple posing inside their home.',
          'pic3.jpg': 'A vintage photograph of a newly-wed married couple on their wedding day in a candid shot with the couple smiling.',
          'pic4.jpg': 'A vintage photograph of a newly-wed married couple on their wedding day, smiling for the camera.',
          'pic5.jpg': 'A digital photograph of a group of four grandchildren smiling while sitting with their grandfather on a couch.'
      };

      images.forEach(image => {
          const newImage = document.createElement('img');
          newImage.setAttribute('src', `images/${image}`);
          newImage.setAttribute('alt', altText[image]);
          thumbBar.appendChild(newImage);

          newImage.addEventListener('click', e => {
              displayedImage.src = e.target.src;
              displayedImage.alt = e.target.alt;
          });
      });

      darkButton.addEventListener('click', () => {
          darkButton.classList.toggle('light');
          darkButton.textContent = darkButton.classList.contains('light') ? 'Lighten' : 'Darken';
          overlay.style.backgroundColor = darkButton.classList.contains('light') ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)';
      });
  } else {
      console.error('One or more required elements not found in the DOM.');
  }
});


/* Calculator */

function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add") {
        calculate = a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    } else if (op == "mod") {
        calculate = a % b;
    }

    document.querySelector("#result").innerHTML = calculate;
}


/* Number Guessing Game */

document.addEventListener('DOMContentLoaded', () => {

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessCount = 1;
  let resetButton;

 
  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');

  // Event listener for guess submission
  if (guessSubmit) {
      guessSubmit.addEventListener('click', checkGuess);
  }

  function checkGuess(event) {
      event.preventDefault(); 

      const userGuess = parseInt(guessField.value);

      if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
          lastResult.textContent = 'Congratulations! You got it right!';
          lastResult.style.backgroundColor = 'green';
          setGameOver();
      } else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          setGameOver();
      } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          if (userGuess < randomNumber) {
              lowOrHi.textContent = 'Last guess was too low!';
          } else if (userGuess > randomNumber) {
              lowOrHi.textContent = 'Last guess was too high!';
          }
      }

      guessCount++;
      guessField.value = '';
      guessField.focus();
  }

  function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
      guessCount = 1;
      const resetParas = document.querySelectorAll('.resultParas p');
      resetParas.forEach(para => (para.textContent = ''));

      if (resetButton) {
          resetButton.parentNode.removeChild(resetButton);
      }

      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();

      lastResult.style.backgroundColor = 'white';
      randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(randomNumber);
  }
});


/* Keyboard Events */

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.querySelector('#myCanvas');

    if (!canvas) {
        console.error('Canvas element not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    let x = 50;
    let y = 50;
    const size = 30;

    function drawCircle(x, y, size) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
    }

    drawCircle(x, y, size);

    document.addEventListener('keydown', function(event) {
        const speed = 10;

        switch(event.key) {
            case 'w':
                if (y - speed - size > 0) {
                    y -= speed;
                }
                break;
            case 's':
                if (y + speed + size < canvas.height) {
                    y += speed;
                }
                break;
            case 'a':
                if (x - speed - size > 0) {
                    x -= speed;
                }
                break;
            case 'd':
                if (x + speed + size < canvas.width) {
                    x += speed;
                }
                break;
        }

        drawCircle(x, y, size);
    });
});


/* Color Changing Buttons */

document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.colorButton');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = button.getAttribute('data-color');

            document.body.style.backgroundColor = color;
        });
    });
});


/* Contact Form */

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
       event.preventDefault();
      
          const emailInput = document.getElementById("email");
      
          const emailValue = emailInput.value.trim();
      
          if (!isValidEmail(emailValue)) {
        alert("Please enter a valid email address.");
      
            emailInput.focus();
            return;
          }
      
          if (emailValue.length < 5) {
            alert("Your email address must be at least 5 characters long.");
      
         emailInput.focus();
         return;
          }
        });
      
        function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        }
      });
});