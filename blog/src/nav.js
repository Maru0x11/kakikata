 const NavHtml = `
<nav class="nav-bar">
  <div class="nav-logo">
    <img src="favicon/favicon-96x96.png" alt="Kakikata icon" class="nav-icon">
    <a href="/">Kakikata</a>
  </div>
  <ul class="nav-links">
    <li><a href="blog.html">Blog</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="https://github.com/Maru0x11/kakikata" target="_blank">GitHub</a></li>
    <li>
      <button id="darkmode-toggle" class="theme-toggle">
        <span class="material-symbols-outlined">dark_mode</span>
      </button>
    </li>
  </ul>
</nav>
`;


// inject html in nav-loader

const navLoader = document.getElementById("nav-loader");

navLoader.innerHTML = NavHtml;

const themeToggeler = navLoader.querySelector(".theme-toggle");
const btnIcon = themeToggeler.querySelector(".material-symbols-outlined");


// callback function for toggling the theme

function toggleTheme(){

  const currentTheme = localStorage.getItem("theme") ?? "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  const newIcon = newTheme === "dark" ? "dark_mode" : "light_mode";

  //apply changes

  document.documentElement.dataset.theme = newTheme;
  btnIcon.innerHTML = newIcon;

  //save to localStorage

  localStorage.setItem("theme",newTheme);
  localStorage.setItem("themeIcon",newIcon);
}

//load nav

function initTheme(){
  const theme = localStorage.getItem("theme") || "dark";
  const themeIcon = localStorage.getItem("themeIcon")|| "dark_mode";

  document.documentElement.dataset.theme = theme;
  btnIcon.innerHTML = themeIcon;
}

initTheme();


// onclick toggle theme

themeToggeler.addEventListener("click",toggleTheme);
