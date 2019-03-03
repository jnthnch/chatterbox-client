var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms').find('button').click(Rooms.add);
  },

  render: function() {
  },

  renderRoom: function(room) {
    this.$select.append(`<option value=${room}>${room}</option>`);
  },

  displayAllRooms: function(data){
    var roomsWithId={};
    var arrayOfMessages = data.results;
    for (var i =0 ; i < arrayOfMessages.length; i++){
      if (roomsWithId[arrayOfMessages[i].roomname] === undefined ) {
        roomsWithId[arrayOfMessages[i].roomname] = []
      } else {
        roomsWithId[arrayOfMessages[i].roomname].push(arrayOfMessages[i].objectId)
      }
      
    }
    var roomsArray = Object.keys(roomsWithId);
    for (let i = 0; i < roomsArray.length; i++) {
      this.renderRoom(roomsArray[i])
    }
  }

};

