var promotionBook = {};
var brandingBook = {};

$(document).ready(function() {
  jQuery('.video').each(function(){
    Froogaloop(this).addEvent('ready', videoReady);
  });
});

function videoReady(videoName)
{
  hookUpVideoEvents(videoName);
}

function hookUpVideoEvents(name)
{
  var playerFrame = document.getElementById(name);
  player = $f(playerFrame);

  watchPlayForPlayer(player, name);
  watchPauseForPlayer(player, name);
  watchFinishForPlayer(player, name);
}

function watchPlayForPlayer(player, playerName)
{
  player.addEvent('play', function(event) {
    player.api('getCurrentTime', function(time) {
      ga('send', 'event', 'video', 'play', playerName, time);
    });
  });
}

function watchPauseForPlayer(player, playerName)
{
  player.addEvent('pause', function(event) {
    player.api('getCurrentTime', function(time) {
      ga('send', 'event', 'video', 'pause', playerName, time);
    });
  });
}

function watchFinishForPlayer(player, playerName)
{
  player.addEvent('finish', function(event) {
    player.api('getCurrentTime', function(time) {
      ga('send', 'event', 'video', 'finish', playerName, time);
    });
  });
}



window.onIssuuReadersLoaded = function() {
  promotionBook = window.IssuuReaders.get("1228423/11928890");
  brandingBook = window.IssuuReaders.get("1228423/11928906");

  promotionBook.addEventListener('change', 'promotionBookChanged');
  brandingBook.addEventListener('change', 'brandingBookChanged');
};

function promotionBookChanged(event) {
  ga('send', 'event', 'book', 'page', 'promotion', promotionBook.getPageNumber());
}

function brandingBookChanged(event) {
  ga('send', 'event', 'book', 'page', 'branding', brandingBook.getPageNumber());
}
