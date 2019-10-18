import '../styles/main.scss';
import 'bootstrap';
import messageCards from './components/displayMessages/displayMessages';

const init = () => {
  messageCards.messagesPrint();
  messageCards.attachEvent();
};

init();
