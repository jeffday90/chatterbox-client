var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(roomname) {
    $('#rooms select').append(new Option (roomname, Rooms[roomname]));
  },

  renderRoomname: function () {
    for (let i = 0; i < Rooms.storage.length; i++){
      let roomnameFromObj = Rooms.storage[i];
      RoomsView.render(roomnameFromObj);
    }    
  }
};
