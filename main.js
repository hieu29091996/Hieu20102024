
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
 window.addEventListener('load', function () {
              const audio = document.getElementById('backgroundMusic');
              audio.play().catch((error) => {
                  console.log('Trình duyệt có thể đã chặn tự động phát nhạc:', error);
              });
          });
  