
const quantityInput = document.getElementById('quantity');
const unitPriceElement = document.querySelector('.unit-price h4');
const totalPriceElement = document.querySelector('.total-price h4');
const totalSummaryElement = document.getElementById('total');
const totalSummary = document.getElementById('total_2');

const unitPrice = parseInt(unitPriceElement.innerText.replace(' &#8363', '').replace(/\./g, ''));

function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value) || 0;
    const totalPrice = unitPrice * quantity;

    totalPriceElement.innerHTML = totalPrice.toLocaleString('de-DE') + ' &#8363';
    totalSummaryElement.innerHTML = totalPrice.toLocaleString('de-DE') + ' &#8363';
    totalSummary.innerHTML = totalPrice.toLocaleString('de-DE') + ' &#8363';
}

quantityInput.addEventListener('input', updateTotalPrice);
updateTotalPrice();
// Thay thế nội dung trong cart-container với thông báo "Không có sản phẩm nào trong giỏ hàng"
const removeCartButton = document.querySelector('.cart-remove');
const cartContainer = document.querySelector('.cart-part');
removeCartButton.addEventListener('click', function () {

    cartContainer.innerHTML = '<h6 style="color: white;">Không có sản phẩm nào trong giỏ hàng!!!</h6>';
    totalSummaryElement.innerHTML = '0' + '&#8363';
    totalSummary.innerHTML = '0' + '&#8363';
});

// Bảng thanh toán
const checkoutButton = document.querySelector('.checkout');
const paymentPopup = document.getElementById('payment-popup');
const closePaymentButton = document.getElementById('close-payment');
const paymentForm = document.getElementById('payment-form');
const confirmPaymentButton = document.getElementById('confirm-payment');

// Hiển thị popup khi nhấn vào nút "Thanh toán"
checkoutButton.addEventListener('click', function () {
    paymentPopup.style.display = 'flex'; // Hiển thị popup
});

// Đóng popup khi nhấn vào nút "Đóng"
closePaymentButton.addEventListener('click', function () {
    paymentPopup.style.display = 'none'; // Ẩn popup
});

// Kiểm tra và xử lý khi người dùng xác nhận thanh toán
paymentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng gửi form mặc định

    // Lấy thông tin từ form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;
    // Kiểm tra nếu tất cả thông tin đã được điền đầy đủ
    if (name && phone && email && address && paymentMethod) {
        alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm!');
        paymentPopup.style.display = 'none';
        cartContainer.innerHTML = '<h6 style="color: white;">Không có sản phẩm nào trong giỏ hàng!!!</h6>';
        totalSummaryElement.innerHTML = '0' + '&#8363';
        totalSummary.innerHTML = '0' + '&#8363';
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});