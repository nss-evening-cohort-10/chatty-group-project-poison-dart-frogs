import $ from 'jquery';
import './themes.scss';

const chooseDarkMode = () => {
  $(document).ready(() => {
    $('.darkThemeBox').on('click', () => {
      if ($('.darkThemeBox').prop('checked')) {
        $('#body').addClass('dark-mode');
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

let bgColor = '';
let textColor = '';

const applyMoreThemes = () => {
  $(document).ready(() => {
    $('#apply-themes').on('click', () => {
      bgColor = document.getElementById('background').value;
      textColor = document.getElementById('text').value;
      $('body').css('background-color', bgColor);
      $('.card-text').css('color', textColor);
    });
  });
};

const updateTextColor = () => {
  $('.card-text').css('color', textColor);
};

export default {
  chooseDarkMode, chooseLargeText, applyMoreThemes, updateTextColor,
};
