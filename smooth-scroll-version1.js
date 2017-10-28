<html>
  <head></head>

  <body>
    <nav> my test nav </nav>
  </body>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script>
  $('nav').click(function () {
    var $href = $(this).attr('href');
    $('body').stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
    return false;
  });
  </script>

</html>
