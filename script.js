$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var braceletColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + braceletColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
