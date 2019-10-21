import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navBar';
import messageCards from './components/displayMessages/displayMessages';
import addMessages from './components/addMessages/addMessages';
// import themes from './components/themes/themes';

const init = () => {
  messageCards.messagesPrint();
  messageCards.attachEvent();
  navbar.loadNavbar();
  addMessages.attachEnterEvent();
  // themes.modal();
};

init();
