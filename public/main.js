console.log('ok');
$(document).ready(function() {

  $('form').on('submit', function() {

    var subject = $('#subject');
    var from = $('#email');
    var phone = $('#phone');
    var text = $('#message')
    var mail = {
      subject: subject.val(),
      from: from.val(),
      phone: phone.val(),
      text: text.val()
    };

    $.ajax({
      type: 'POST',
      url: '/email',
      data: mail,
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });

    return false;

  });
});