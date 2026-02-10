const messages = [
  "In every lifetime, I’d still find you.",
  "In every version of me, I choose you.",
  "You are my favorite feeling.",
  "If forever had a name — it would be yours.",
  "I choose you. Always. ❤️"
];

let index = 0;

function revealText() {
  const linesDiv = document.getElementById("lines");
  if (!linesDiv) return;

  if (index < messages.length) {
    const p = document.createElement("p");
    p.textContent = messages[index];
    p.style.opacity = 0;
    linesDiv.appendChild(p);
    setTimeout(() => {
      p.style.transition = "opacity 1s";
      p.style.opacity = 1;
    }, 100);
    index++;
  }
}