const newYears = "1 Jan 2023";

const countdown = () =>{
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds)%60;

  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;

  if(newYearsDate === currentDate || newYearsDate < currentDate){
    document.querySelector('#heading').textContent = "Happy New Year!";
  }
}
countdown();

setInterval(countdown, 1000);
