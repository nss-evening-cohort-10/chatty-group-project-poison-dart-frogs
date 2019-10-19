import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navBar';
import messageCards from './components/displayMessages/displayMessages';

const init = () => {
  messageCards.messagesPrint();
  messageCards.deleteEvent();
  navbar.loadNavbar();
};

init();
