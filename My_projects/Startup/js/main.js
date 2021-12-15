//@prepros-append jq-start.js
//@prepros-append sliders.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js

$(document).ready(function () {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
    return is_ie;
  }
  if (isIE()) {
    $('body').addClass('ie');
  }
  if (isMobile.any()) {
    $('body').addClass('touch');
  }
  //SLIDERS
  if ($('.slider-clients__body').length > 0) {
    $('.slider-clients__body').slick({
      //autoplay: true,
      //infinite: false,
      dots: true,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {},
        },
      ],
    });
  }

  function ibg() {
    $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
        $(this).css(
          'background-image',
          'url("' + $(this).find('img').attr('src') + '")'
        );
      }
    });
  }
  ibg();
});
