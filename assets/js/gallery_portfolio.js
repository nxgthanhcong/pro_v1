const GalleryPortfolio = (function () {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    var eWatchInGallery = $$(".fas.fa-plus");
    var eGallery = $(".portfolio__gallery");
    var eGalleryImg = $(".portfolio__gallery img");
    var eGalleryCloseBtn = $(".gallery-icon.icon-close");
    var eGalleryNextBtn = $(".gallery-icon.icon-next");
    var eGalleryPrevBtn = $(".gallery-icon.icon-prev");
    var eListImages = $$(".portfolio__item img");

    var currentIndex = 0;

    function showGalleryImage(index) {
        eGalleryImg.src = eListImages[index].src;
        eGallery.classList.remove("hide");
    }

    eWatchInGallery.forEach((item, index) => {
        item.addEventListener("click", function () {
            currentIndex = index;
            showGalleryImage(currentIndex);
        })
    })

    eGalleryNextBtn.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex >= eListImages.length)
            currentIndex = 0;
        showGalleryImage(currentIndex);
    });

    eGalleryPrevBtn.addEventListener("click", function () {
        currentIndex--;
        if (currentIndex <= 0)
            currentIndex = eListImages.length - 1;
        showGalleryImage(currentIndex);
    });

    eGalleryCloseBtn.addEventListener("click", function () {
        eGallery.classList.add("hide");
    })

    var eWatchPortfolioDetail = $$(".fas.fa-link");
    var ePortfolioDetail = $(".portfolio__detail");
    var ePortfolioDetailCloseBtn = $(".portfolio__detail-icon.icon-close");

    eWatchPortfolioDetail.forEach((item) => {
        item.addEventListener("click", function () {
            ePortfolioDetail.classList.remove("hide");
        })
    })

    ePortfolioDetailCloseBtn.addEventListener("click", function () {
        ePortfolioDetail.classList.add("hide");
    })
}());

export default GalleryPortfolio;