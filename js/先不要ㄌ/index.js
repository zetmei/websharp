$(document).ready(function(e) {
    (function() {
        var i = e("#vision"),
            n = e(".frame", i);
        n.mightySlider({
            speed: 800,
            viewport: "fill",
            navigation: {
                slideSize: "100%",
                keyboardNavBy: "slides"
            },
            dragging: {
                swingSpeed: .1,
                mouseDragging: 0
            },
            pages: {
                activateOn: "click"
            },
            cycling: {
                cycleBy: "slides",
                pauseTime: 6e3,
                loop: 1,
                pauseOnHover: 1,
                startPaused: 0
            },
            commands: {
                pages: 1,
                buttons: 1
            }
        })
    })()
}), $(function() {
    $("#vision").hover(function() {
        $(".main li").removeClass("active")
    })
});
