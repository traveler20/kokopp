// // #js-loading animation
// window.onload = function () {
//     const loadingAnimation = document.getElementById("js-loading");

//     loadingAnimation.classList.add("is-loaded");

//     document.getElementById("js-fv").classList.add("is-show");
// };

// // swiper
// const swiper = new Swiper(".swiper-container", {
//     loop: true,
//     // ページネーション
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     // 前後の矢印
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// const share_twitter = document.getElementById("js-share-twitter");
// const share_url = document.getElementById("js-share-url");
// const url = location.href;
// const title = document.title;
// share_twitter.setAttribute(
//     "href",
//     "https://twitter.com/share?url=" +
//         url +
//         "&text=" +
//         title +
//         "&via=kokopp_designer&hashtags=ここっぷ"
// );
// share_url.onclick = function () {
//     navigator.clipboard.writeText("【" + title + "】" + " " + url);
//     document.getElementById("js-share-url").value = "コピーしました！";
// };

// ────────────────────────────────────────────────────────────
(window.onload = function () {
    const e = document.getElementById("js-loading");
    e.classList.add("is-loaded"),
        document.getElementById("js-fv").classList.add("is-show");
}),
    (function () {
        const e = document.getElementById("js-header");
        let t = 0,
            n,
            i = !1;
        window.addEventListener("scroll", function () {
            (n = window.scrollY),
                i ||
                    (window.requestAnimationFrame(function () {
                        n,
                            60 < n &&
                                (n > t
                                    ? e.classList.add("is-headIn")
                                    : e.classList.remove("is-headIn"),
                                (t = n)),
                            (i = !1);
                    }),
                    (i = !0));
        });
    })();

const swiper = new Swiper(".swiper-container", {
    loop: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
function urlCopy() {
    var e = location.href,
        t = document.title;
    navigator.clipboard.writeText("【" + t + "】 " + e),
        (document.getElementById("urlcopyBtn").value = "コピーしました！");
}
function twitterShare() {
    const e = document.getElementById("twitterBtn");
    var t = location.href,
        n = document.title;
    e.setAttribute(
        "href",
        "https://twitter.com/share?url=" +
            t +
            "&text=" +
            n +
            "&via=kokopp_designer&hashtags=ここっぷ"
    );
}
