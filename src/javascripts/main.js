import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navBar';
import messageCards from './components/displayMessages/displayMessages';
import darkMode from './components/themes/themes';

const init = () => {
  messageCards.messagesPrint();
  messageCards.deleteEvent();
  darkMode.chooseDarkMode();
  navbar.loadNavbar();
};

init();
