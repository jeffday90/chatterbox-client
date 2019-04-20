var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var messageText = $('input:text').val();
    var inputUsername = new URLSearchParams(window.location.search);

    var Message = {
      username: inputUsername.get('username'),
      text: messageText,
      roomname: 'ballersClub'
    };
    
    var submitMessage = Message;


    Messages.data.results.unshift(submitMessage);
    //debugger;
    //console.log(Messages.data);
    MessagesView.renderMessage(submitMessage);

    Parse.create(Message);
    
    //console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};