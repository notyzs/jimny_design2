$(function(){
    $(".hamburger").click(function () {
        $(this) .toggleClass("active");
        $("#header .navi").toggleClass("active");
    });

    $(".navi a").click(function () {
        $(".hamburger").removeClass("active");
        $("#header .navi").removeClass("active");
    });
});

const thumbs =document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", function() {
        //1.クリックされた画像のdata-image属性から、切り替え先のパスを取得
        const newImageSrc = this.getAttribute("data-image");
        const parentBlock = this.closest(".custom-part");
        const targetMainImage = parentBlock.querySelector(".main-image");

        targetMainImage.classList.add("fade-out");
        setTimeout(() => {
            targetMainImage.src = newImageSrc;
            targetMainImage.classList.remove("fade-out");
        }, 400);

        //2.下の大きい画像の src を書き換える
        mainImage.src = newImageSrc;
    })
})




