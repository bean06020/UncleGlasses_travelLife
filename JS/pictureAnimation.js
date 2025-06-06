 // /輪播圖片JS/ 
const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1, // 每次只顯示一張
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 3000, 
    disableOnInteraction: false, // 互動後仍繼續自動播放
  },
  });