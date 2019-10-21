import $ from 'jquery';
import './themes.scss';

// attach an event listener to the checkbox that when activated runs a function


// write the aforementioned function that will apply css classes that transform the page into a dark theme.
// const darklightMode = () => {
//   const body = document.getElementById('body');
//   const currentClass = body.className;
//   body.className = currentClass === 'dark-mode' ? 'light-mode' : 'dark-mode';
// };

const chooseDarkMode = () => {
  console.error('hi');
  $(document).ready(function () {
    $('.darkThemeBox').on('click', () => {
      console.error(this);
      if ($('.darkThemeBox').prop('checked')) {
        $('#body').addClass('dark-mode');
        console.error('line2');
        // darklightMode();
      } else {
        $('#body').removeClass('dark-mode');
        console.error('line3');
      }
    });
  });
};

export default { chooseDarkMode };
