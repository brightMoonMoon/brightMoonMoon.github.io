function main() {

    (function () {
        'use strict';

        // jQuery to collapse the navbar on scroll
        $(window).scroll(function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });

        // selfTestimonial Slider
        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                target = target.length ? target :$(this.hash.slice(1)) ;
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
        Show Menu on Book
        ======================================*/
        $(document).ready(function () {
            $("#testimonial").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
            });

        });

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
        $(window).load(function () {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function () {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });
        // ======================3D convas
        $(function () {
            FSS("3dConvas", "output");
        });
        // ================== 滚动监听
        $(function () {
            var scrollPoint = new Waypoint({
                element: document.getElementById('basics-infor'),
                handler: function () {
                    var i = 0;
                    var timer = setInterval(function() {
                        $(".zoomIn").eq(i).css({ "display": "block" })
                        i += 1;
                        if (i >= $(".zoomIn").length) {
                            clearInterval(timer);
                        }
                    }, 600)
                },
                offset: '75%'
            })
            var wayPonit = new Waypoint({
                element: document.getElementById("skills"),
                handler: function () {
                    var i = 0;
                    var timer = setInterval(function() {
                        $(".about-skill").eq(i).css({ "display": "block" })
                        i += 1;
                        if (i >= $(".about-skill").length) {
                            clearInterval(timer);
                        }
                    }, 600)
                },
                offset: '30%'
            })
        })
        //====================判断终端类型
        $(function () {
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('Windows Phone') > -1 || navigator.userAgent.indexOf("iPad") > -1) {
              $(".hover-bg .hover-text").css({ 'opacity': '1' });
      
              $(".hover-bg .hover-text>h4").css({ 'opacity': '1', '-webkit-transform': 'translateY(0)', 'transform': 'translateY(0)' });
      
              $(".hover-bg .hover-text>i").css({ 'opacity': '1' });
            }
          });
    }());


}
main();