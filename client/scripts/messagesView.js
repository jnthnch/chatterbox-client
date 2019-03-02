var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('form .submit').submit(Parse.create($('#message').val()), Parse.readAll);
  },

  render: function() {
  },

  renderMessage: function(message) {
    $('#chats').append(`<p>${message}</p>`);
    // $('#chats').append(MessageView.render(message));

  }

};

$('#chats').find('p').click(Friends.toggleStatus);

// var messagesToDisplay = allMessages();

// for (var idx = 0 ; idx < data.length ; idx++){
//   Parse.create(data[idx])
// }

