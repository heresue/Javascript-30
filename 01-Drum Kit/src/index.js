function removeTransition(e) {
  e.target.classList.remove("key-press");
}

function keyPress(e) {
  const keyCode = e.key.toLowerCase();
  const $audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const $key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!$audio) return;

  $key.classList.add("key-press");
  $audio.currentTime = 0; // 재생 위치를 처음으로
  $audio.play();
}

const $keys = document.querySelectorAll(".key");
$keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", keyPress);
