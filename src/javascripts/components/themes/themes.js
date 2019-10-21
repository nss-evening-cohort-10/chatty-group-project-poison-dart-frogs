import $ from 'jquery';
import './themes.scss';

const chooseDarkMode = () => {
  $(document).ready(() => {
    $('.darkThemeBox').on('click', () => {
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
  $(document).ready(() => {
    $('.largeTxtBox').on('click', () => {
      if ($('.largeTxtBox').prop('checked')) {
        $('.card').addClass('large-font');
      } else {
        $('.card').removeClass('large-font');
      }
    });
  });
};

export default { chooseDarkMode, chooseLargeText };
