import $ from 'jquery';

const chats = [
  {
    message: 'mom Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.',
  },
  {
    message: 'mum',
  },
  {
    message: 'mommy',
  },
  {
    message: 'mama',
  },
  {
    message: 'ma',
  },
];

const getChats = () => chats;

const addChat = (obj) => {
  chats.push(obj);
  if (chats.length > 20) {
    chats.shift();
  }
};

const deleteClick = (e) => {
  const deleteChat = $(e.target).parents('.card');
  for (let k = 0; k < chats.length; k += 1) {
    if (chats[k].message === $(deleteChat).find('p').html()) {
      chats.splice(k, 1);
    }
  }
};

const deleteEvent = () => {
  const deleteButtons = $('.d-flex').children('.delete');
  for (let j = 0; j < deleteButtons.length; j += 1) {
    const singleDeleteButton = deleteButtons[j];
    $(singleDeleteButton).click(deleteClick);
  }
};

export default { getChats, addChat, deleteEvent };
