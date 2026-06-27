$(function () {

  /* =====================
  MENU
  ====================== */
  $('.menu-btn').on('click', function () {
    $('.overlay-menu')
      .css('display', 'grid')
      .hide()
      .fadeIn(300)
      .addClass('is-open');
  });

  $('.overlay-menu a').on('click', function () {
    $('.overlay-menu').fadeOut(300, function () {
      $(this).removeClass('is-open');
    });
  });

  $('.overlay-menu').on('click', function (e) {
    if (e.target === this) {
      $(this).fadeOut(300, function () {
        $(this).removeClass('is-open');
      });
    }
  });


  /* =====================
  MODAL
  ====================== */
  $('.character-card').on('click', function () {
    const target = $(this).data('target');

    $('#' + target)
      .css('display', 'flex')
      .hide()
      .fadeIn(300, function () {
        $(this).addClass('is-open');
      });
  });

  $('.modal, .close').on('click', function (e) {
    if ($(e.target).is('.modal') || $(e.target).is('.close')) {
      $('.modal').removeClass('is-open').fadeOut(250);
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('.modal').removeClass('is-open').fadeOut(250);
      $('.overlay-menu').removeClass('is-open').fadeOut(250);
    }
  });


  /* =====================
  TAB
  ====================== */
  $('.tab').on('click', function () {
    const tab = $(this).data('tab');

    $('.tab').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').removeClass('active');
    $('#tab' + tab).addClass('active');
  });


  /* =====================
  SCROLL ANIMATION
  ====================== */
  function scrollAnimation() {
    const scroll = $(window).scrollTop();
    const winH = $(window).height();

    $('.section').each(function () {
      const pos = $(this).offset().top;

      if (scroll > pos - winH + 120) {
        $(this).addClass('show');
      }
    });

    $('.character-card').each(function () {
      const pos = $(this).offset().top;

      if (scroll > pos - winH + 80) {
        $(this).addClass('show');
      }
    });
  }

  $(window).on('scroll resize', scrollAnimation);
  scrollAnimation();


  /* =====================
  PARALLAX LIGHT
  ====================== */
  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();

    $('.hero__inner').css({
      transform: 'translateY(' + scroll * 0.08 + 'px)'
    });
  });

});

$(function(){

    $(window).on("scroll",function(){
        if($(this).scrollTop()>400){
            $("#page-top").addClass("show");
        }else{
            $("#page-top").removeClass("show");
        }
    });

    $("#page-top").on("click",function(e){
        e.preventDefault();
        $(this).addClass("fly");
        $("html,body").animate({
            scrollTop:0
        },900);

        setTimeout(()=>{
            $("#page-top").removeClass("fly");
        },950);

    });

});

  /* =====================
  RESPONSIVE
  ====================== */

function systemTitleAnimation(){

    if(window.innerWidth > 1080) return;
    $('.tab-content').each(function(){
        const pos=$(this).offset().top;
        const scroll=$(window).scrollTop();
        const winH=$(window).height();

        if(scroll > pos - winH + 120){
            $(this).addClass('show');
        }
    });
    
}

$(window).on('scroll resize',systemTitleAnimation);
systemTitleAnimation();