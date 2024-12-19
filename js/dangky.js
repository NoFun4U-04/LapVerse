document.querySelector("form").addEventListener("submit" ,function(){ 
    alert("Đăng ký thành công")
  });
  
  // Hiện mật khẩu
  document.getElementById("showPassword").addEventListener("change", () => {
    if (showPassword.checked) {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  });

/*-- Giải thích
-- document.querySelector("form"):
+ Chọn phần tử đầu tiên trên trang có thẻ <form>.
+ Đây là form mà muốn xử lý khi người dùng nhấn nút "Đăng ký".
-- .addEventListener("submit", function() {...}):
+ Lắng nghe sự kiện submit trên form.
+ Sự kiện này kích hoạt khi người dùng nhấn nút submit hoặc nhấn Enter trong một ô input thuộc form.
-- alert("Đăng ký thành công");:
+ Hiển thị hộp thoại thông báo với nội dung "Đăng ký thành công" khi form được gửi.
*/

/*-- Giải thích "Hiện mật khẩu"
-- document.getElementById("showPassword"):
+ Tìm phần tử có id="showPassword" (checkbox dùng để bật/tắt hiển thị mật khẩu).
-- .addEventListener("change", () => {...}):
+ Lắng nghe sự kiện change của checkbox.
+ Sự kiện này kích hoạt mỗi khi trạng thái của checkbox thay đổi (tích chọn hoặc bỏ chọn).
-- if (showPassword.checked) {...}:
+ showPassword.checked:
+ Trả về true nếu checkbox được chọn, false nếu không.
+ Kiểm tra trạng thái checkbox để quyết định hiển thị hay ẩn mật khẩu.
-- password.setAttribute("type", "text");:
+ Nếu checkbox được chọn (checked là true):
+ Đặt thuộc tính type="text" cho ô input mật khẩu (ô này hiển thị ở dạng văn bản).
-- password.setAttribute("type", "password");:
+ Nếu checkbox không được chọn (checked là false):
+ Đặt lại thuộc tính type="password" để ô input mật khẩu trở về chế độ ẩn ký tự.