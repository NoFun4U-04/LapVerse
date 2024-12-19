document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopup = document.getElementById("closePopup");

    // Hiển thị popup ngay khi tải trang
    popupOverlay.style.display = "flex";

    // Đóng popup khi ấn nút Close
    closePopup.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });

    // Đóng popup khi click vào overlay nhưng không phải popup-container
    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });

    // Thêm chuyển hướng khi click vào popup image
    document.getElementById("popupImage").addEventListener("click", function () {
        window.location.href = "https://example.com/khuyen-mai"; // Link khuyến mãi
    });
});
