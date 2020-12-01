// color theme manager
const switcher = document.querySelector('.mode');
const body = document.querySelector('body');

const darkMode = () => {
  body.classList.toggle('dark')
}

switcher.addEventListener('click', () => {
  setDarkMode = localStorage.getItem('dark');

  if (setDarkMode !== "on") {
    darkMode();
    setDarkMode = localStorage.setItem('dark', 'on');

  } else {
    darkMode();
    setDarkMode = localStorage.setItem('dark', null);
  }
});

let setDarkMode = localStorage.getItem('dark');
if (setDarkMode === 'on') {
  darkMode();
}