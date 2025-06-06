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
          window.location.href = './index.html';
        }, 1500);
      }
    },
    mounted() {
      this.showMessage = false;
      console.log('Vue mounted');
    }
  });
});
