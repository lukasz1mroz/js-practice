const countdown = document.querySelector(".countdown");

const launchDate = new Date("Jan 1, 2021 13:00:00").getTime();

const intvl = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `
  <div>${days} days</div>
  <div>${hours} hours</div>
  <div>${mins} minutes</div>
  <div>${seconds} seconds</div>
  `;

  if (distance < 0) {
    clearInterval(intvl);
    countdown.getElementsByClassName.color = "#";
  }
}, 1000);
