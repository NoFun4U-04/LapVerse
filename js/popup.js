document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popupOverlay');
    const closePopupBtn = document.getElementById('closePopup');
    const popupLink = document.getElementById('popupLink');
    
    if (!popup || !closePopupBtn || !popupLink) {
        console.error('One or more elements are missing!');
        return;
    }

    // Đóng popup khi nhấn vào overlay (bên ngoài container)
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            e.preventDefault(); // Ngừng hành động mặc định
            popup.style.display = 'none'; // Ẩn popup
        }
    });

    // Xử lý sự kiện khi nhấn vào nút đóng
    closePopupBtn.addEventListener('click', function (event) {
        event.stopPropagation();  // Ngừng sự kiện bấm vào thẻ <a>
        popup.style.display = 'none';  // Ẩn popup
    });

    // Giữ hành động click trên <a> để chuyển trang nếu không phải nút đóng
    popupLink.addEventListener('click', function (event) {
        if (popup.style.display === 'none') {
            event.preventDefault(); 
        }
    });
});