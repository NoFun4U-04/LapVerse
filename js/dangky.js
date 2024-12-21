document.addEventListener("DOMContentLoaded", function () {
  // Gắn sự kiện chỉ cho form đăng ký
  const registrationForm = document.getElementById("registrationForm");
  if (registrationForm) {
      registrationForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Ngăn form chuyển trang
          alert("Đăng ký thành công");
      });
  }

  // Hiện mật khẩu
  document.getElementById("showPassword").addEventListener("change", () => {
      const password = document.getElementById("password");
      if (document.getElementById("showPassword").checked) {
          password.setAttribute("type", "text");
      } else {
          password.setAttribute("type", "password");
      }
  });
});