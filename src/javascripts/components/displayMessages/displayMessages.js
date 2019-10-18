import $ from 'jquery';
import chats from '../../helpers/data/messages';
import utilities from '../../helpers/utilities';
import './displayMessages.scss';

const messagesPrint = () => {
  let messageString = '<div class="row">';
  const messages = chats.getChats();
  for (let i = 0; i < messages.length; i += 1) {
    const message = messages[i];
    messageString += `
    <div class="col">
      <div id="${message.id}" class="card">
        <div class="card-body">
          <p class="card-text">${message.message}</p>
          <div class="d-flex justify-content-between">
            <p>timestamp placeholder</p>
            <button class="btn btn-primary delete">Delete</button>
          </div>  
        </div>
      </div>
    </div>
    <div class="w-100"></div>  
    `;
  }
  messageString += '</div>';
  utilities.printToDom('defaultMessages', messageString);
};

const deleteClick = (e) => {
  const messages = chats.getChats();
  const deleteChat = $(e.target).parents('.card-body').find('p').html();
  for (let k = 0; k < messages.length; k += 1) {
    if (messages[k].message === deleteChat) {
      messages.splice(k, 1);
    }
    messagesPrint(messages);
  }
};

const deleteButton = () => {
  const deleteButtons = $('.d-flex').children('.delete');
  for (let j = 0; j < deleteButtons.length; j += 1) {
    const singleDeleteButton = deleteButtons[j];
    singleDeleteButton.addEventListener('click', deleteClick);
  }
};

const attachEvent = () => {
  $(document).click(deleteButton);
};

export default { messagesPrint, attachEvent };
