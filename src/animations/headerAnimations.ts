import gsap from "gsap";

export function animateMobileMenuIn(menuEl: HTMLDivElement) {
  const items = menuEl.querySelectorAll(".mobile-item");

  gsap.set(menuEl, { autoAlpha: 1, y: -14 });
  gsap.set(items, { autoAlpha: 0, y: 10 });

  gsap.timeline()
    .to(menuEl, {
      y: 0,
      duration: 0.24,
      ease: "power2.out",
    })
    .to(items, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.045,
      duration: 0.28,
      ease: "power2.out",
    }, "-=0.08");
}

export function animateMobileMenuOut(
  menuEl: HTMLDivElement,
  onComplete: () => void
) {
  gsap.to(menuEl, {
    autoAlpha: 0,
    y: -10,
    duration: 0.2,
    ease: "power2.in",
    onComplete,
  });
}