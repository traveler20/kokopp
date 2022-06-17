// #js-loading animation
window.onload = function () {
    const loadingAnimation = document.getElementById("js-loading");

    loadingAnimation.classList.add("is-loaded");

    document.getElementById("js-fv").classList.add("is-show");
};

// swiper
const swiper = new Swiper(".swiper-container", {
    loop: true,
    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const share_twitter = document.getElementById("js-share-twitter");
const share_url = document.getElementById("js-share-url");
const url = location.href;
const title = document.title;
share_twitter.setAttribute(
    "href",
    "https://twitter.com/share?url=" +
        url +
        "&text=" +
        title +
        "&via=kokopp_designer&hashtags=ここっぷ"
);
share_url.onclick = function () {
    navigator.clipboard.writeText("【" + title + "】" + " " + url);
    document.getElementById("js-share-url").value = "コピーしました！";
};
