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
      if (message.username === undefined){
        message.username = 'something'
      }

      if (message.text === undefined){
        message.text = 'another thing'
      }
      //console.log(message);
      MessagesView.renderMessage(message);
    }
  }

};