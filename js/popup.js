// Lấy phần tử popup và nút đóng
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');

// Gán sự kiện click cho nút đóng
    closePopup.addEventListener('click', function() {
        popupOverlay.style.display = 'none'; 
    });

