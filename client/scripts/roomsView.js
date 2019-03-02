var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms').find('button').click(Rooms.add);
  },

  render: function() {
  },
  renderRoom: function(room) {
    this.$select.append('<p>' + room + '</p>');
  }
};

