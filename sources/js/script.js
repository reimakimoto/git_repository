$( function() {
  var $body = $('body');
  var ua = navigator.userAgent.toLowerCase();

  // anchor link
  function anchorLink() {
    $(document).on('click', 'a[href^="#"]', function(e) {
      e.preventDefault();

      var $el     = $(this);
      var $target = $($el.attr('href'));
      var paddingTop = 70; //ヘッダー高さ

      if (!$target[0]) {
        return;
      }

      var offset = $target.offset().top;
      $('html, body').animate({scrollTop: offset - paddingTop});
    });
  }

  function navControl() {
    var $navBtn = $('#navBtn');
    var $nav = $('#nav');

    $navBtn.on('click', function() {
      $nav.toggleClass('is-open');
      $body.toggleClass('nav-open');
    });

    $('body').on('click', function() {
      if ( $nav.hasClass('is-open') ) {
        $nav.toggleClass('is-open');
        $body.toggleClass('nav-open');
      }
    });

    $('#nav, #navBtn').on('click', function(e) {
      e.stopPropagation();
    });

  }

  //kato 追加 0205 要素が表示域に達したら表示 jquery plugin inview 使用
  function columnBloomingTopVisible() {
    $('.column_bloomingTop').on('inview', function(event, isInView) {
      if (isInView) {
        $(this).addClass('column_bloomingTop_visible');
      } else {
        $(this).removeClass('column_bloomingTop_visible');
      }
    });
  }

  //kato 追加 0205 スクロールの量によってヘッダーを表示
  function navScroll() {
    $(window).scroll(function() {
      var topDistance = 800; //上から800pxスクロール
      if($(window).scrollTop() > topDistance){
        $('.l-header__drawerTop').addClass('l-header__drawerTop__visible');
      } else {
        $('.l-header__drawerTop').removeClass('l-header__drawerTop__visible');
      }
    });
  }

  //kato 追加 0205 ページ内スクロール
  function pageScroll() {
    $('a[href^="#"]').on('click',function(){
      var href = $(this).attr('href');
      var target = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, 1000, 'swing');
      return false;
    });
  }

  // fire when DOM is ready
  $(function() {
    anchorLink();
    navControl();
    columnBloomingTopVisible();
    navScroll();
    pageScroll();
  });

  // fire when page is fully loaded
  $(window).on('load',function(){
  });

});
