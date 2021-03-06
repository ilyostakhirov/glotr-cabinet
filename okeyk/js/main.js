$(document).ready(function() {
    "use strict";
    $('a[href*=\\#]').bind('click', function(e) {
        e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

        var target = $(this).attr("href"); //Get the target

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 2000, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });

});


var galleryFeed = new Instafeed({
  get: "user",
  userId: 13565335973,
  accessToken: "13565335973.1677ed0.30a2a6838f964ea99ece71512f71a60d",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 10,
  template: '<li><a target="_blank" href="{{link}}"><img src="{{image}}" class="img-responsive"></a></li>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
});
galleryFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});