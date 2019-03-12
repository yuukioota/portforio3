$(function() {

  $('.product-hover').hover(function() {

    $(this).find('p').addClass('comment-active');

  }, function() {

    $(this).find('p').removeClass('comment-active');
  });

});
