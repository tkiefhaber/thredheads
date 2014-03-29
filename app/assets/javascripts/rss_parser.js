/**
 * parses any RSS/XML feed through Google and returns JSON data
 * source: http://stackoverflow.com/a/6271906/477958
 */
function parseRSS(url, container) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      //console.log(data.responseData.feed);
      $(container).html('<h2>'+capitaliseFirstLetter(data.responseData.feed.title)+'</h2>');

      $.each(data.responseData.feed.entries, function(key, value){
        var thehtml = '<h3><a href="'+value.link+'" target="_blank">'+value.title+'</a></h3>';
        $(container).append(thehtml);
      });
    }
  });
}

function capitaliseFirstLetter(string) {
  string = string.replace('Feedzilla:','');
  return string.charAt(0).toUpperCase() + string.slice(1);
}
