var Rooms = {
    add: function() {
        var inputTag = $('#rooms input').val()
        RoomsView.renderRoom(inputTag);
        $('#rooms input').val('')
        // console.log('inside add function')
    }



};

