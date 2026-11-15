const form = document.getElementById("registerForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
function isEmpty(value) {
  return value.trim() ==="";
}

function isValidEmail(value) {
  const emailRegex = /^[a-z0-9-_%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
  return emailRegex.test(value);
}

function isValidPhone(value) {
  const phoneRegex = /^(0|\+84)[1-9]\d{8}$/; 
  return phoneRegex.test(value);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  
  // Kiểm tra email
  
if(isEmpty(email.value)){
  alert(" nhap email..");
  isValid=false;
}
else if(!isValidEmail(email.value)){
  alert(" email chưa hợp lệ");
  isValid=false;
}
  // Kiểm tra số điện thoại
   if (isEmpty(phone.value)) {
   alert("nhập số điện thoại");
   isValid=false;
  } 
  else if(!isValidPhone(phone.value)) {
    alert("số điện thoại không hợp lệ");
    isValid=false;
  }

  // Kiểm tra mật khẩu
    if (isEmpty(password.value)) {
    alert("nhập mật khẩu!");
    isValid=false;
  } 
  else if (password.value.length < 8) {
    alert("mật khẩu phải có ít nhất 8 ký tự!");
    isValid=false;
  }
  // Nếu tất cả hợp lệ → alert + reset form
  if(isValid==true) {
    alert("đăng ký thành công!");
    form.reset(); 
  }
});
