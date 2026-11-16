// begin validation

const form = document.getElementById("book-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const book = document.getElementById("book").value.trim();
  const quantityText = document.getElementById("quantity").value.trim();

  // Kiểm tra bỏ trống
  if (!email || !book || !quantityText) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Kiểm tra email: giữ cách viết cũ, sửa điều kiện và regex
  if (!/^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(email)) {
    alert("Email sai định dạng!");
    return;
  }

  // Kiểm tra số lượng
  const quantity = Number(quantityText);

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    alert("Số lượng phải là số nguyên từ 1 đến 10!");
    return;
  }

  // Dữ liệu hợp lệ
  alert("Đăng ký tư vấn thành công!");
});

// end validation