// begin validation
// begin validation

const form = document.getElementById("tour-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const guestsText = document.getElementById("guests").value.trim();

  // Kiểm tra bỏ trống
  if (!email || !destination || !guestsText) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Kiểm tra email
  if (!/^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(email)) {
    alert("Email sai định dạng!");
    return;
  }

  // Kiểm tra số khách
  const guests = Number(guestsText);

  if (!Number.isInteger(guests) || guests < 1 || guests > 15) {
    alert("Số khách phải là số nguyên từ 1 đến 15!");
    return;
  }

  alert("Đăng ký tư vấn thành công!");
});

// end validation
// Viết JavaScript kiểm tra form tại đây.

// end validation