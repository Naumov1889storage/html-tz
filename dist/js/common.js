(function () {
    if (Boolean(document.querySelector('[data-tabs]'))) {
        new Tabby('[data-tabs]');
    }
}());
(function () {
    document.querySelectorAll('.tab-title__link').forEach(tab_title => {
        tab_title.addEventListener('click', e => {
            document.querySelectorAll('.tab-content__item').forEach(tab => {
                let isTabHidden = tab.getAttribute('hidden');

                if (isTabHidden == "hidden" && Boolean(tab.querySelector('.js-video-container'))) {
                    let video_container = tab.querySelector('.js-video-container');
                    video_container.style.zIndex = "1";
                    while (video_container.firstChild) video_container.removeChild(video_container.firstChild);
                }
            });
        })
    });

    document.querySelectorAll('.js-video-play-btn').forEach(thumb => {
        thumb.addEventListener('click', e => {
            let video_container = thumb.closest('.video').querySelector('.js-video-container');
            video_container.style.zIndex = "6";
            let video_id = video_container.getAttribute('data-video-id');
            let yt_iframe = generateIframe(video_id, '100%', '100%');
            video_container.innerHTML = yt_iframe;
        })
    });

    function generateIframe(vcode, width, height) {
        return '<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + vcode + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>';
    }
}());