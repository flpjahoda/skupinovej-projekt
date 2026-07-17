function nactiAktualniTema() {
  const ulozenoTema = localStorage.getItem("theme");

  if (ulozenoTema) {
    return ulozenoTema;
  }

  const preferujeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return preferujeDark ? "dark" : "light";
}

const aktualniTema = nactiAktualniTema();

if (aktualniTema === "light") {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  
  const btn = document.querySelector(".theme-button");
  if (btn) btn.textContent = "LIGHT MODE";
} else {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  
  const btn = document.querySelector(".theme-button");
  if (btn) btn.textContent = "DARK MODE";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  const btn = document.querySelector(".theme-button");

  if (document.body.classList.contains("light")) {
    if (btn) btn.textContent = "LIGHT MODE";
    localStorage.setItem("theme", "light");
  } else {
    if (btn) btn.textContent = "DARK MODE";
    localStorage.setItem("theme", "dark");
  }
}


function nactiSdilenyHeader() {
  const headerContainer = document.getElementById("shared-header");
  
  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="header" onclick="openMenu()">
        <div class="header-content">
          <div class="header-logo">NEKROSIS</div>
          <nav class="nav">
            <a href="index.html">Home</a>
            <a href="index.html#maps">Mapy</a>
            <a href="index.html#gameplay">Gameplay</a>
            <a href="index.html#contacts">Kontakt</a>
            <a href="dwnld.html">Stáhnout</a>
          </nav>
          <button class="theme-button" onclick="toggleTheme()">DARK MODE</button>
        </div>
      </header>
    `;
  }
}

nactiSdilenyHeader();