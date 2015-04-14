'use strict';

$(document).ready(function() {
  $("#emailsubmit").click(function() {
    var email = $('#email');
    sendEmail(email.val());

    // if(email.val() === '' || !re.test(email.val())) {
    //   $('.email-error').show();
    //   return false;
    // }
    // else {
    //   sendEmail(email.val());
    // }
  });
});

function sendEmail(toemail) {
  ga('send', 'event', 'email', 'send', toemail);

  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': '9F0a1ZxEVOhJw6GLYEZzZw',
      'message': {
        'from_email': 'info@jensendesignstudio.com',
        'to': [
            {
              'email': 'chayen@gmail.com',
              'name': 'Chris Hayen',
              'type': 'to'
            },
            {
              'email': 'rrytter@jensendesignstudio.com',
              'name': 'Robert Rytter',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'Information Requested from jensendesignstudio.com',
        'html': toemail
      }
    }
   }).done(function(response) {
     $('.email-header').text('We will be in touch');
     $('.email-thanks').toggle('show');
     $('.info').toggle('hide');
     $('.form').toggle('hide');
   });
}
