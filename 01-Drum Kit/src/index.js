document.addEventListener("keydown", (e) => {
  const keyCode = e.key.toLowerCase();
  const $key = document.querySelector(`div[data-key="${keyCode}"]`);
  const $audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  // 방어 코드: 요소가 없을 경우 에러 방지
  if (!$key) return;

  $key.classList.add("key-press");

  if ($audio) {
    $audio.currentTime = 0; // 재생 위치를 처음으로
    $audio.play();
  }

  setTimeout(() => {
    $key.classList.remove("key-press");
  }, 150);
});
