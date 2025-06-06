document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const radius = 5; // cuánto se mueve el ojo dentro del socket

    const moveX = Math.cos(angle) * radius;
    const moveY = Math.sin(angle) * radius;

    eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
