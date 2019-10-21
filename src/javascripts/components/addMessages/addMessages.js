import $ from 'jquery';
import chats from '../../helpers/data/messages';
import displayMessages from '../displayMessages/displayMessages';
import utilities from '../../helpers/utilities';

const addMessage = () => {
  const messages = chats.getChats();
  const messageInput = $(document).find('#new-message');
  const messageValue = $(messageInput).val();
  messages.push({ message: messageValue });
  displayMessages.messagesPrint(messages);
  if (messages.length > 20) {
    messages.shift();
    displayMessages.messagesPrint(messages);
  }
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

const clearMessages = () => {
  const messages = chats.getChats();
  messages.length = 0;
  utilities.printToDom('defaultMessages', messages);
};

const clearMessagesClick = () => {
  $(document).on('click', '#clearButton', clearMessages);
};

export default { attachEnterEvent, clearMessagesClick };
