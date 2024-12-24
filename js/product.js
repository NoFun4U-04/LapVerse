
  console.log('JavaScript file loaded successfully!');

  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = urlParams.get("page") || "1";

    document.querySelectorAll(".product").forEach(product => {
      product.style.display = product.getAttribute("data-page") === currentPage ? "block" : "none";
    });
  });

  // Lấy các phần tử từ DOM
const addToCartBtns = document.querySelectorAll('.me-3 .buy-now-btn');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Duyệt qua tất cả các nút "Thêm vào giỏ" và gán sự kiện cho từng nút
addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        successModal.style.display = 'flex'; 
    });
});

// Khi người dùng click vào nút "Đóng"
closeModalBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
});

// Đóng modal khi nhấn vào phần nền ngoài modal
window.addEventListener('click', (event) => {
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

const buyNowBtns = document.querySelectorAll('.product .text-start .buy-now-btn');
buyNowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = "Chitietsanpham.html"; 
    });
});


