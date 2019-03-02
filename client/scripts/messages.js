var Messages = {
    displayAllMessages: function(data) {
        var arrayOfMessages = data.results;
        for (let i = 0; i < arrayOfMessages.length; i++) {
            MessagesView.renderMessage(arrayOfMessages[i].text);
        }
    }

};