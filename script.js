const ball = document.getElementById('ball');

function moveBall() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}

ball.addEventListener('click', () => {
  alert('You caught the ball!');
  moveBall();
});

moveBall();

