// coding implementation
// coding implementation
document.addEventListener("DOMContentLoaded", function () {
    // Lấy form bình luận
    const form = document.querySelector(".frmcomment form");

    form.addEventListener("submit", function (e) {
        const email = document.getElementById("email").value.trim();
        const comment = document.getElementById("com").value.trim();
        const rate = document.getElementById("rate").value.trim();

        // 1. Validate bỏ trống
        if (email === "" || comment === "" || rate === "") {
            alert("Vui lòng không bỏ trống thông tin!");
            e.preventDefault(); // Ngăn chặn gửi form
            return;
        }

        // 2. Validate Email đúng định dạng
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Email không đúng định dạng!");
            e.preventDefault();
            return;
        }

        // 3. Validate Rating phải là số
        if (isNaN(rate)) {
            alert("Rating phải nhập một số!");
            e.preventDefault();
            return;
        }
    });
});
// end coding implementation
// end coding implementation