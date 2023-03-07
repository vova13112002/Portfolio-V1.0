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

function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute('dark', '');
  } else {
    document.body.removeAttribute('dark');
  }
}

//Зміна мови

const allLangs = ['en', 'ua'];
let currentLang = 'en';
const langButtons = document.querySelectorAll('data-btn');

const currentPathName = window.location.pathname;
let currentTexts = {};

const homeTexts = {
  'home__page-title': {
    en: "Portfolio",
    ua: "Портфоліо"
  },
  'OnePunkt': {
    en: "Home",
    ua: "Головна"
  },
  'TwoPunkt': {
    en: "Works",
    ua: "Роботи"
  },
  'FrePunkt': {
    en: "Skills",
    ua: "Вміння"
  },
  'ForPunkt': {
    en: "Resume",
    ua: "Резюме"
  },
  'FifePunkt': {
    en: "Contact",
    ua: "Контакти"
  },
  'SexPunkt': {
    en: "EN",
    ua: "Англійська"
  },
  'SevenPunkt': {
    en: "UA",
    ua: "Українська"
  }

}

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homeTexts;
      break;
    case "/another_page.html":
      currentTexts = anotherTexts;
      break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }

}
changeLang();

langButtons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    currentLang = event.target.dataset.btn;
    resetActiveClass(langButtons, 'header__btn ');
    btn.classList.add('');
    changeLang();
  })
})

function resetActiveClass(arr, activeClass) {
  arr.forEach(elem => {
    elem.classList.remove(activeClass)
  })
}