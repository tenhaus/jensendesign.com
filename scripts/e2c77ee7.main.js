function videoReady(a){hookUpVideoEvents(a)}function hookUpVideoEvents(a){var b=document.getElementById(a);player=$f(b),watchPlayForPlayer(player,a),watchPauseForPlayer(player,a),watchFinishForPlayer(player,a)}function watchPlayForPlayer(a,b){a.addEvent("play",function(){a.api("getCurrentTime",function(a){console.log("play"),ga("send","event","video","play",b,a)})})}function watchPauseForPlayer(a,b){a.addEvent("pause",function(){a.api("getCurrentTime",function(a){console.log("pause"),ga("send","event","video","pause",b,a)})})}function watchFinishForPlayer(a,b){a.addEvent("finish",function(){a.api("getCurrentTime",function(a){console.log("finish"),ga("send","event","video","finish",b,a)})})}function promotionBookChanged(){ga("send","event","book","page","promotion",promotionBook.getPageNumber())}function brandingBookChanged(){ga("send","event","book","page","branding",brandingBook.getPageNumber())}var promotionBook={},brandingBook={};$(document).ready(function(){jQuery(".video").each(function(){Froogaloop(this).addEvent("ready",videoReady)})}),window.onIssuuReadersLoaded=function(){promotionBook=window.IssuuReaders.get("1228423/11928890"),brandingBook=window.IssuuReaders.get("1228423/11928906"),promotionBook.addEventListener("change","promotionBookChanged"),brandingBook.addEventListener("change","brandingBookChanged")};