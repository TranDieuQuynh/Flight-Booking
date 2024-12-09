// Script để xử lý form
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn việc gửi form thực sự
    alert("Tìm kiếm chuyến bay thành công!");
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
      loop: true, // Cho phép lặp lại
      autoplay: {
        delay: 4000, // 4 giây
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

// Lắng nghe sự kiện khi nhấp vào tiêu đề của mỗi phần
document.querySelectorAll('.form-section h2').forEach(section => {
    section.addEventListener('click', function() {
      const parentSection = this.parentElement;
      parentSection.classList.toggle('active'); // Tạo hoặc bỏ lớp 'active'
    });
  });



// Mở/Đóng cửa sổ chat
document.getElementById("chatBtn").addEventListener("click", function() {
  var chatbox = document.getElementById("chatbox");
  chatbox.classList.toggle("show"); // Toggle trạng thái hiển thị cửa sổ chat
});

// Đóng cửa sổ chat khi nhấn nút đóng
document.getElementById("closeChat").addEventListener("click", function() {
  var chatbox = document.getElementById("chatbox");
  chatbox.classList.remove("show"); // Ẩn cửa sổ chat
});

// Gửi tin nhắn
document.getElementById("sendMessage").addEventListener("click", function() {
  var input = document.getElementById("chatInput");
  var messages = document.querySelector(".messages");

  if (input.value.trim() !== "") {
    var newMessage = document.createElement("p");
    newMessage.textContent = input.value;
    messages.appendChild(newMessage);
    input.value = ""; // Xóa nội dung input sau khi gửi
    messages.scrollTop = messages.scrollHeight; // Cuộn xuống dưới
  }
});



  
  