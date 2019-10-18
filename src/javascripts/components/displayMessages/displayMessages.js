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
      <div id="${message.id}" class="card" style="width: 20rem">
        <div class="card-body">
          <p class="card-text">${message.message}</p>
          <button id="delete" class="btn btn-primary btn-sm">Delete</button>
        </div>
      </div>
    </div>
    <div class="w-100"></div>  
    `;
  }
  messageString += '</div>';
  utilities.printToDom('defaultMessages', messageString);
};

export default { messagesPrint };
