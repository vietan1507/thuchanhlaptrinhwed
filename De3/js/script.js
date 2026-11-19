// begin validation

const form = document.getElementById("register-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ten = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const tuoi = document.getElementById("age").value.trim();

  // Kiểm tra bỏ trống
  if (!ten || !email || !tuoi) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  // Kiểm tra email
  if (!/^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(email)) {
    alert("Email sai định dạng!");
    return;
  }

  // Kiểm tra tuổi
  const age = Number(tuoi);

  if (!Number.isInteger(age) || age < 16 || age > 60) {
    alert("Tuổi phải là số nguyên từ 16 đến 60!");
    return;
  }

  alert("Đăng ký tư vấn thành công!");
});

// end validation