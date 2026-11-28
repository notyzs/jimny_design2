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


const backBtn = document.getElementById('back-to-select');
  const selectArea = document.getElementById('select-area');

  window.addEventListener('scroll', () => {
    // 「どの部分をカスタムする？」の枠のページ上からの位置を取得
    const targetPosition = selectArea.getBoundingClientRect().top + window.scrollY;

    // 選択枠よりも下にスクロールしたらボタンを表示
    if (window.scrollY > targetPosition + 100) {
      backBtn.classList.add('is-show');
    } else {
      backBtn.classList.remove('is-show');
    }
  });




