'use strict';

var client = contentful.createClient({
    // ID of Space
    space: 'w6zrmuo60d1p',

    // A valid access token within the Space
    accessToken: '21eeb92ae64b00197f221d0fde13ec467bfda6e57798cafab272a741cf251e55',

    // Enable or disable SSL. Enabled by default.
    secure: false,

    // Resolve links to entries and assets
    resolveLinks: true
  });


$(document).ready(function() {

  // Get logos from contentful
  client.getContentType({ content_type: 'educationLogos' })
  .then(function (entries) {
    populateLogoSection('education', entries);
    // initializeFlipsForSection('education');
  });
  var educationLogos = [];

  function populateLogoSection(sectionName, entries) {
    var entry = entries[0];
    var count = 0;

    _.forEach(entry.fields.files, function(file) {
      educationLogos.push({
        file: file,
        displaying: false,
        element: null
      });

      if(count <=4) {
        educationLogos[count].displaying = true;
        educationLogos[count].element = '#' + sectionName + '_logo_' + count;
        $('#' + sectionName + '_logo_' + count).attr('src', educationLogos[count].file.fields.file.url);
      }

      count++;

      // set a timer for 6 seconds
      setInterval(educationTimerTick, 6000);
    });
  }
  console.log(client);

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

  $('#carouselEdu').carousel({
    interval: 9000
  });

  // add more carousels


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

