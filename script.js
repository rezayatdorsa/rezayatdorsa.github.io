// year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// subtle "active section" highlight in nav
const links = [...document.querySelectorAll(".nav a")];
const sections = links
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const onScroll = () => {
  const y = window.scrollY + 140;
  let active = sections[0]?.id;

  for (const s of sections) {
    if (s.offsetTop <= y) active = s.id;
  }

  links.forEach(a => {
    const isActive = a.getAttribute("href") === `#${active}`;
    a.style.color = isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.68)";
    a.style.background = isActive ? "rgba(255,255,255,0.06)" : "transparent";
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
// Autoplay helper + mute/unmute button
const v = document.getElementById("heroVideo");
const btn = document.getElementById("unmuteBtn");

if (v && btn) {
  v.muted = true;
  v.play().catch(() => {});

  const updateBtn = () => {
    btn.textContent = v.muted ? "Unmute" : "Mute";
  };

  btn.addEventListener("click", () => {
    v.muted = !v.muted;
    v.play().catch(() => {});
    updateBtn();
  });

  updateBtn();
}
