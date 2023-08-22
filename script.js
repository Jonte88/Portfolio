let darkMode = new Boolean(true);


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function colorChange() {
    if (darkMode == true) {
        console.log("light");
        const root_theme = document.querySelector(':root');
        root_theme.style.setProperty('--blurBackground', 'rgba( 255, 255, 255, 0.3 )');
        root_theme.style.setProperty('--blurText', 'rgb( 0, 0, 0 )');
        root_theme.style.setProperty('--navHover', 'rgba( 100, 100, 100, 0.3)');
        document.body.style.backgroundImage = "url('assets/img/lightBg.jpg')";
        document.getElementById("portfolioWebsite").src = "assets/img/lightPortfolio.png";
        document.getElementById("darkToggle").innerText = "Darkmode";
        darkMode = false;
    }
    else {
        console.log("dark");
        const root_theme = document.querySelector(':root');
        root_theme.style.setProperty('--blurBackground', 'rgba( 10, 10, 10, 0.7 )');
        root_theme.style.setProperty('--blurText', 'rgb( 220, 220, 220 )');
        root_theme.style.setProperty('--navHover', 'rgb( 200, 200, 200)');
        document.body.style.backgroundImage = "url('assets/img/darkBg.jpg')";
        document.getElementById("portfolioWebsite").src = "assets/img/darkPortfolio.png";
        document.getElementById("darkToggle").innerText = "Lightmode";
        darkMode = true;
    }
  }