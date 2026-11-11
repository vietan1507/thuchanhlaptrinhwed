document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const btnHuy = document.getElementById('btnhuy');

  // 1. Xử lý sự kiện khi bấm nút Submit (Đăng ký)
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn form tự load lại trang
    
    // Lấy dữ liệu
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    // Các điều kiện Validate (Gặp lỗi thì bật alert và dừng luôn)
    if (!fullname || !email || !phone || !password) {
      return alert('Vui lòng điền đầy đủ thông tin!');
    }

    if (!/^[a-zA-Z\s]+$/.test(fullname)) {
      return alert('Tên không được chứa số và ký tự đặc biệt!');
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return alert('Định dạng email không hợp lệ!');
    }
    
    if (!/^(0|\+84)[1-9]\d{8}$/.test(phone)) {
      return alert('Số điện thoại phải là chữ số và có từ 10 số!');
    }
    
    if (password.length < 6) {
      return alert('Mật khẩu phải có tối thiểu 6 ký tự!');
    }

    // Nếu vượt qua tất cả -> Thành công
    alert('Đăng ký thành viên thành công!');
    form.reset(); // Xóa trắng các ô input sau khi đăng ký xong
  });

  // 2. Xử lý sự kiện khi bấm nút Hủy (nếu có nút này trên giao diện)
  if (btnHuy) {
    btnHuy.addEventListener('click', () => {
      form.reset(); // Xóa sạch dữ liệu đang nhập dở trên form
    });
  }
});
