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
  
