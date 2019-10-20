import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navBar';
import messageCards from './components/displayMessages/displayMessages';
import addMessages from './components/addMessages/addMessages';

const init = () => {
  messageCards.messagesPrint();
  messageCards.attachEvent();
  navbar.loadNavbar();
  addMessages.attachEnterEvent();
};

init();
