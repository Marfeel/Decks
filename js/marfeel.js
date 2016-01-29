define(["slide-config"], function () {
    document.addEventListener("slideenter", function (e) {
        callVideosMethod(e.target, "play");

    });

    document.addEventListener("slideleave", function (e) {
        callVideosMethod(e.target, "pause");
    });

    function callVideosMethod (el, method) {
        var videos = el.querySelectorAll("video");

        for (var i = 0; i < videos.length; ++i) {
            videos[i][method]();
        }
    }


    document.getElementById("slide-presenter").innerHTML = SLIDE_CONFIG.presenters.join(", ");
});

