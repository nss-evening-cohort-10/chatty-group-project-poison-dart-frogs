import $ from 'jquery';
import chats from '../../helpers/data/messages';
import displayMessages from '../displayMessages/displayMessages';
import utilities from '../../helpers/utilities';

const addMessage = () => {
  const messages = chats.getChats();
  const messageInput = $(document).find('#new-message');
  const messageValue = $(messageInput).val();
  const newMessage = { message: messageValue };
  messages.unshift(newMessage);
  displayMessages.messagesPrint(messages);
  if (messages.length > 20) {
    messages.pop();
    displayMessages.messagesPrint(messages);
  } else if (messages.length === 0) {
    displayMessages.messagesPrint(newMessage);
  }
};

const enterEvent = (e) => {
  const key = e.keyCode;
  if (key === 13) {
    e.preventDefault();
    addMessage();
    $('#clearButton').attr('disabled', false);
  }
};

const attachEnterEvent = () => {
  $('#new-message').on('keypress', enterEvent);
};

const messagesButton = () => {
  const messages = chats.getChats();
  if (messages.length === 0) {
    $('#clearButton').attr('disabled', true);
  }
};

const clearMessages = () => {
  const messages = chats.getChats();
  if (messages.length !== 0) {
    messages.length = 0;
  }
  displayMessages.messagesPrint(messages);
};

const clearMessagesClick = () => {
  $(document).on('click', '#clearButton', clearMessages);
  $(document).on('click', '#clearButton', messagesButton);
};

export default { attachEnterEvent, clearMessagesClick };
