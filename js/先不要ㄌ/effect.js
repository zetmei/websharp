document.all && document.querySelector && !document.addEventListener && alert("Your browser is old!\nPlease update!"), $(function() {
    var t = $(window),
        o = 130;
    t.on("scroll touchmove", function() {
        $(this).scrollTop() >= o ? $(".this-sub").addClass("sub-sticky", 0) : $(".this-sub").removeClass("sub-sticky", 0)
    }).scroll(), $(".main li").hover(function() {
        var t = $(this),
            o = t.attr("rel");
        return t.addClass("active").siblings().removeClass("active"), $(this).hasClass("go-sub") ? ($(".sub-box").show(), $(o).stop(!1).fadeIn().siblings().hide()) : $(".sub-box").hide(), !1
    }, function() {
        $(".sub-box").hover(function() {
            $(".sub-box").show()
        }, function() {
            $(".sub-box").hide(), $(".main li").removeClass("active")
        }), $(".sub-box").hide(), $(".contain-to-grid >.row").hover(function() {
            $(".main li").removeClass("active")
        }), $(".this-sub").hover(function() {
            $(".main li").removeClass("active")
        })
    }), $(".main li a").clone().appendTo(".small-nav"), $(".lan a").clone().prependTo("footer .columns ul").wrap("<li class='lan-block show-for-small-only'></li>"), $(".menu-icon").on("click touchstart", function() {
        return $(".small-nav").slideToggle(), $(".right-nav-box").slideUp(), !1
    });
    var i = t.width() - 25;
    $(".goright").on("click touchstart", function(t) {
        $(".search-box input").val("").focus(), t.stopPropagation()
    }), $(".search-box input").on("click touchstart", function(t) {
        $(this).animate({
            width: i
        }, function() {
            $(".goright").show()
        }).addClass("see"), t.stopPropagation()
    }), $(document).on("click touchstart", function(t) {
        $(t.target).is(".goright, .search-box input, .search-box input *") || ($(".search-box input").val("").animate({
            width: 46
        }).removeClass("see"), $(".goright").hide())
    }), $(".filter-go").on("click touchstart", function() {
        return $(".filter-box").slideToggle(), !1
    }), $(".features-tag li a").clone().appendTo(".right-nav-box"), $(".nav-botton").on("click touchstart", function() {
        return $(".right-nav-box").slideToggle(), $(".small-nav").slideUp(), !1
    }), t.on("resize orientationchange", function() {
        $(".small-nav").slideUp(), $(".right-nav-box").slideUp();
        var t = $(this).width() - 25;
        $(".search-box input").val("").css({
            width: 46
        }).removeClass("see"), $(".goright").hide(), $(".search-box input").on("click touchstart", function() {
            $(this).stop().animate({
                width: t
            }, function() {
                $(".goright").show()
            }).addClass("see")
        })
    }).resize(), $(".hide-select select").on("change", function() {
        var t = $(this).val();
        "" === t || null == t || $(this).parent().parent().next().fadeIn()
    });
    var s = $(".features-tag .active").width(),
        e = (s + 5) / 2;
    $(".features-tag .active img").css({
        left: e
    }), $(".show-results").on("click", function() {
        $(".results-box").fadeIn(), $(".has-more").animate({
            "background-position-y": "10000px"
        }, 0)
    })
});
