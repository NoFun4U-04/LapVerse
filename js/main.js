
    // Lấy phần tử icon và dropdown
    const categoryButton = document.getElementById("categoryButton");
    const mobileCategoryDropdown = document.getElementById("mobileCategoryDropdown");

    // Bắt sự kiện nhấn vào icon 3 gạch
    categoryButton.addEventListener("click", function() {
        // Chuyển đổi hiển thị dropdown (ẩn/hiện)
        mobileCategoryDropdown.classList.toggle("d-none");
    });

    