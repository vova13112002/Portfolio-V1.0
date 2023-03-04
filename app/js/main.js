//Зміна теми
document.querySelector('.themetoggle').addEventListener('click', (event) => {
  // event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }

  addDarkClassToHTML();
});

const addDarkClassToHTML = () => {
  try {
    if (localStorage.getItem('theme') === 'dark') {

      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    }
    else {
      document.querySelector('html').classList.remove('dark');
    }



  } catch (err) { }
}

addDarkClassToHTML();
const button = document.getElementById("myButton");
const image = document.getElementById("myImage");
let isDarkTheme = false; // true, якщо встановлена темна тема, false - якщо встановлена світла тема
button.addEventListener("click", function () {
  if (isDarkTheme) {
    image.src = "images/github_light.png";
  } else {
    image.src = "images/github.svg";
  }
  isDarkTheme = !isDarkTheme; // змінюємо тему сайту на протилежну
});