import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navBar';
import messageCards from './components/displayMessages/displayMessages';
import newMessages from './components/addMessages/addMessages';

const init = () => {
  messageCards.messagesPrint();
  messageCards.deleteEvent();
  navbar.loadNavbar();
  newMessages.attachEnterEvent();
};

init();
