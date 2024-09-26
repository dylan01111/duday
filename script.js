const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src =
    "https://www.bing.com/th/id/OGC.0a39670301707d0dfe5e0db50263691d?pid=1.7&rurl=https%3a%2f%2fgifdb.com%2fimages%2fhigh%2fcute-love-baby-kiss-pw26tcs2lnig9xob.gif&ehk=c2DAffjYuT4bJQbww%2fyOa1WKVMZ7ORyEMf9uQxKIe3o%3d";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});