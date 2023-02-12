const bird = document.querySelector('.bird');
const pipe = document.querySelector('.pipe');

const jump = () => {
    bird.classList.add('jump');
    setTimeout(() => {
        bird.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const birdPosition = +window.getComputedStyle(bird).bottom.replace('px', '');
  
    if(pipePosition <= 110 && pipePosition >0 && birdPosition < 85) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        bird.style.animation = 'none';
        bird.style.bottom = `${birdPosition}px`;

        bird.src = './images/died_bird.png';
        bird.style.width = '100px';
        bird.style.marginLeft = '50px';

        clearInterval(loop);
    }

   
}, 10)
document.addEventListener ('click', jump);
