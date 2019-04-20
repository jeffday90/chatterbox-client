var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    //user name that you enter when there is a drop down
        //window.location.search

    //things we need to do

    //grab the username
    //grab the message from the submit

    //create an instance of a message
      //there is another file, but for now let's look at the constructor here

    // what does .val do ? (jQuery)
    // Set the value of the <input> field:
    // $("button").click(function(){
    //   $("input:text").val("Glenn Quagmire");
    // });
    // -input message
    // -URL search params
    // var searchParams = new URLSearchParams(paramsString);
    // Returns a URLSearchParams object instance.
    // -use constructor to build tweet


    //jQuery to get an entry in a form
    const messageText = $('input#message').val();

    //the passed in username parameter returns an object
      //if i'm not mistaken the below method takes a window object (like username entry)
      //
    const inputUsername = new URLSearchParams(window.location.search);

    //access to the username
    console.log(inputUsername.get('username'));

    //the message constructor
    var Message = {
      userName: inputUsername.get('username'),
      text: messageText,
      roomname: 'ballersClub'
    };

    Parse.create(Message);
    
    //console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};