// load nav bar dynamically in html files per request

async function loadNav(){
  const NavModule = await import('./fetch_nav.js');
  const data = await NavModule.FetchNav();
  document.getElementById("nav-loader").innerHTML=data;
}

// run the function

loadNav();
