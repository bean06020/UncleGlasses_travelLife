// 回到頂部功能
document.addEventListener("DOMContentLoaded", function () {
    const topBtn = document.querySelector(".btntop");
    if (topBtn) {
      topBtn.addEventListener("click", function (e) {
        e.preventDefault(); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
  


// Vue顯示文字
document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#myVueBox',
    data: {
      showMessage: false
    },
    methods: {
      handleClick() {
        console.log('click triggered');
        this.showMessage = true;
        setTimeout(() => {
          window.location.href = './眼鏡大叔首頁.html';
        }, 3000);
      }
    },
    mounted() {
      console.log('Vue mounted');
    }
  });
});
