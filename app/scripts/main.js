'use strict';

$(document).ready(function() {


  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });

  $("#emailsubmit").click(function() {
    var email = $('#email');
    sendEmail(email.val());
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

