// store current url here
var currentURL = "";  

// change the url of the 'browser'
function changeURL(url){
  $('#viewportframe').attr('src', url);
  $('#urlBarInput').attr('value', url);
  
  currentURL = url;
}  

$(document).ready(function(){
  changeURL("http://google.com");
  
  $('.changeURL').bind('click', function() {
    changeURL(this);        
    return false;
  });
  
  $('#urlBarForm').submit(function() {
    changeURL($('#urlBarInput').val());
    return false;
  });
  
  $('.reload').bind('click', function() {
    changeURL(currentURL);
  });

  $('#searchForm').submit(function() {
    var query = $('#searchInput').val();
    var newQuery = query.split(" ").join("+");
    var googleUrl = "http://www.google.com/search?q=";
    changeURL( googleUrl + newQuery );
    return false;
  });      

        
});
