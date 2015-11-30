$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$("#NextLink").attr("href", NextLink);
$("#NextMeetup").html(NextMeetup);
$("#NextDate").html(NextDay + "<span>/" + NextMonth + "</span></h4><h3>" + NextYear + "</h3>");
$("#NextMap").attr("href", NextMap);
$("#NextLocation").html("<h5>" + NextLocationTitle + "</h5><h6>" + NextLocationSubtitle + "</h6>");
$("#NextTime").html(NextTime);
