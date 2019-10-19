import $ from 'jquery';
// import navbar from '../navBar/navBar';

//  import utilities from '../../helpers/utilities';
import './themes.scss';

const chooseDarkMode = () => {
  $('#darkThemebox').click((e) => {
    console.error(e.target);
  });
};

export default { chooseDarkMode };
