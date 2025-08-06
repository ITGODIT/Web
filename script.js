window.onload = () => {
  gsap.from(".avatar", { y: -50, opacity: 0, duration: 1 });
  gsap.from("h1", { opacity: 0, delay: 0.5 });
  gsap.from(".bio", { opacity: 0, y: 20, delay: 1, duration: 1 });

  gsap.from(".social-card", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    delay: 1.5,
    duration: 0.8
  });

  gsap.from(".discord-sponsor", {
    opacity: 0,
    y: 40,
    delay: 2.2,
    duration: 1
  });

};
