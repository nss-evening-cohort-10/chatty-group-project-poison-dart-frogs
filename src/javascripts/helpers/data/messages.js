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

export default { getChats, addChat };
