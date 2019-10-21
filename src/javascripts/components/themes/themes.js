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
  $(document).ready(function () {
    $('.darkThemeBox').on('click', () => {
      console.error(this);
      if ($('.darkThemeBox').prop('checked')) {
        $('#body').addClass('dark-mode');
        // darklightMode();
      } else {
        $('#body').removeClass('dark-mode');
      }
    });
  });
};

const chooseLargeText = () => {
  $(document).ready(function () {
    $('.largeTxtBox').on('click', () => {
      console.error('he', this);
      if ($('.largeTxtBox').prop('checked')) {
        $('.card').addClass('large-font');
      } else {
        $('.card').removeClass('large-font');
      }
    });
  });
};

export default { chooseDarkMode, chooseLargeText };
