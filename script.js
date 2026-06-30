/* clock */
setInterval(() => {
  document.getElementById("date").textContent =
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
}, 1000);

/* neofetch animation */
const neofetchLines = [
  { label: "iskra@kali ~", value: "" },
  { label: "-----------------------------", value: "" },
  { label: "OS      :", value: "Kali Linux" },
  { label: "Role    :", value: "Cybersecurity & CS Student" },
  { label: "Focus   :", value: "Bug Hunting, Web Security, CTFs" },
  { label: "Stack   :", value: "Python, Bash, JS, Linux" },
  { label: "Tools   :", value: "Burp, Nmap, ffuf, custom scripts" },
  { label: "Labs    :", value: "HTB / PortSwigger / VulnLab / CTFs / WEB Kids 2.0" },
  { label: "Status  :", value: "Building • Learning • Breaking" }
];

const container = document.getElementById("neofetchText");
let lineIndex = 0;

function typeLine(line, callback) {
  let charIndex = 0;
  const lineEl = document.createElement("div");

  const labelSpan = document.createElement("span");
  labelSpan.style.color = "var(--accent)";
  labelSpan.textContent = line.label + " ";
  lineEl.appendChild(labelSpan);

  const valueSpan = document.createElement("span");
  valueSpan.style.color = "var(--cyan)";
  lineEl.appendChild(valueSpan);

  container.appendChild(lineEl);

  function typeChar() {
    if (charIndex < line.value.length) {
      valueSpan.textContent += line.value[charIndex++];
      setTimeout(typeChar, 20);
    } else callback();
  }

  line.value.length ? typeChar() : callback();
}

(function typeNext() {
  if (lineIndex < neofetchLines.length)
    typeLine(neofetchLines[lineIndex++], typeNext);
})();

/* skills & tools typing */
function type(el, lines, speed = 30) {
  let i = 0, j = 0;
  el.textContent = "";
  function tick() {
    if (i < lines.length) {
      if (j < lines[i].length) {
        el.textContent += lines[i][j++];
        setTimeout(tick, speed);
      } else {
        el.textContent += "\n";
        i++; j = 0;
        setTimeout(tick, speed);
      }
    }
  }
  tick();
}

type(document.getElementById("skillsBox"), [
"$ Web Application Security",
"$ Bug Hunting & Vulnerability Research",
"$ Recon & Attack Surface Mapping",
"$ Authentication & Authorization Testing",
"$ API Security Testing",
"$ CTF Challenge Solving",
"$ Linux & Bash Automation",
"$ Python Tool Development",
"$ Custom Security Workflows",
"$ Technical Writeups & Research"
]);

type(document.getElementById("toolsBox"), [
"$ which tools",
"/usr/bin/burp-suite",
"/usr/bin/nmap",
"/usr/bin/ffuf",
"/usr/bin/sqlmap",
"/usr/bin/gobuster",
"/usr/bin/httpx",
"/usr/bin/subfinder",
"/usr/bin/amass",
"/usr/bin/katana",
"/usr/bin/wireshark",
]);
