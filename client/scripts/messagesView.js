var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('form .submit').submit(Parse.create($('#message').val()), Parse.readAll);
 
  },

  render: function() {
  },

  renderMessage: function(message) {
    // $('#chats').append(message);
    $('#chats').append(MessageView.render(message));
    $('#chats').find('.username').click(function() {
      Friends.toggleStatus();
    });

  },

  displayAllMessages: function(data) {
    var arrayOfMessages = data.results;
    for (let i = 0; i < arrayOfMessages.length; i++) {
      arrayOfMessages[i].username = arrayOfMessages[i].username || 'anonymous';
      arrayOfMessages[i].text = arrayOfMessages[i].text || '';     
      this.renderMessage(arrayOfMessages[i]);
    }

  } 

  
};

// $('#chats').find('p').click(Friends.toggleStatus);
// $('#chats').find('.username').click(Friends.toggleStatus)
// var messagesToDisplay = allMessages();

// for (var idx = 0 ; idx < data.length ; idx++){
//   Parse.create(data[idx])
// }

