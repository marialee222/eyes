const eyesContainer = document.querySelector('.eyes');
const balls = document.getElementsByClassName('ball');
const pupils = document.getElementsByClassName('pupil');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = `translate(-${x}, -${y})`;

    pupils[i].style.left = x;
    pupils[i].style.top = y;
    pupils[i].style.transform = `translate(-${x}, -${y})`;
  }
};

function changeEyeColor(color) {
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.background = color;
  }
}

function changeBackgroundColor(color) {
  eyesContainer.style.background = color;
}

function changeAnimationSpeed(speed) {
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.transition = `transform ${speed}s linear`;
  }
}

function blink() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.transition = 'height 0.3s ease-in-out';
    balls[i].style.height = '40%'; // Adjust the height as needed
    pupils[i].style.transition = 'height 0.3s ease-in-out';
    pupils[i].style.height = '40%'; // Adjust the height as needed
    setTimeout(() => {
      balls[i].style.height = '100%';
      pupils[i].style.height = '100%';
    }, 300);
  }
}

// Trigger blinking every 5 seconds
setInterval(blink, 5000);

document.getElementById('eyeColor').addEventListener('change', function () {
  changeEyeColor(this.value);
});

document.getElementById('backgroundColor').addEventListener('change', function () {
  changeBackgroundColor(this.value);
});

document.getElementById('animationSpeed').addEventListener('input', function () {
  changeAnimationSpeed(this.value);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    // Reset customization panel to default values
    document.getElementById('eyeColor').value = '#000000';
    document.getElementById('backgroundColor').value = '#14495e';
    document.getElementById('animationSpeed').value = '1';
    changeEyeColor('#000000');
    changeBackgroundColor('#14495e');
    changeAnimationSpeed(1);
  }
});
