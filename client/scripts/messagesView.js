var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  },
  
  render: function () {
    for (let i = 0; i < Messages.data.results.length; i++){
      var message = Messages.data.results[i]; 

      if (message.roomname === undefined || message.roomname.length === 0){
        message.roomname = 'No room';
      }
      if(!Rooms.storage.includes(message.roomname)){
        Rooms.storage.push(message.roomname);
      }
      if (message.username === undefined){
        message.username = 'newb'
      }

      if (message.text === undefined){
        message.text = 'Im getting pwned!!!'
      }

      MessagesView.renderMessage(message);
    }
  }

};