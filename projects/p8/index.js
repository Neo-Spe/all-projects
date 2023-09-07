const player = document.getElementById("player");
const btns = document.querySelectorAll("button");
const soundLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
player.volume = 1;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    player.pause();
    const src = `./sounds/${btn.dataset.sound}.wav`;
    player.src = src;
    player.play();
  });
});

document.addEventListener("keypress", (e) => {
  //   console.log(e);
  const key = e.key;
  if (soundLetters.includes(key)) {
    btns.forEach((b) => {
      b.classList.remove("active");
    });
    btns.forEach((b) => {
      const text = b.firstElementChild.innerHTML?.toLowerCase();
      if (text === key) {
        b.classList.add("active");
        const src = `./sounds/${b.dataset.sound}.wav`;
        player.pause();
        player.src = src;
        player.play();
      }
    });
  }
});
