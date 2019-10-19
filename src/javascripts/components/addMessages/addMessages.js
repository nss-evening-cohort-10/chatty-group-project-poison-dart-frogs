import $ from 'jquery';
import chats from '../../helpers/data/messages';
import display from '../displayMessages/displayMessages';

const addMessage = () => {
  const messageInput = $('input:text').val();
  const newMessage = { message: '' };
  newMessage.message += messageInput;
  chats.addChat(newMessage);
  display.messagesPrint();
};

const enterEvent = (e) => {
  const key = e.keyCode;
  if (key === 13) {
    e.preventDefault();
    addMessage();
  }
};

const attachEnterEvent = () => {
  $('#new-message').on('keypress', enterEvent);
};

export default { attachEnterEvent };
