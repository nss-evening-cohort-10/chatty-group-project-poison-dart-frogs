import chats from '../../helpers/data/messages';
import utilities from '../../helpers/utilities';

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
          <a href="#" class="btn btn-primary btn-sm align-items-end flex-row">Go somewhere</a>
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
