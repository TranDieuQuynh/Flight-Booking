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



// Hàm mở cửa sổ chat
function openChat() {
  document.getElementById("chat-modal").style.display = "block";  // Hiển thị modal
}

// Hàm đóng cửa sổ chat
function closeChat() {
  document.getElementById("chat-modal").style.display = "none";  // Ẩn modal
}

// Mã thêm tin nhắn vào chat box (cho người dùng)
document.querySelector('.send-btn').addEventListener('click', function() {
  let messageInput = document.querySelector('.chat-input').value;
  if (messageInput) {
      let messageContainer = document.querySelector('.messages');
      let userMessage = document.createElement('div');
      userMessage.classList.add('message', 'user-message');
      userMessage.innerText = messageInput;
      messageContainer.appendChild(userMessage);
      document.querySelector('.chat-input').value = ''; // Xóa input sau khi gửi
      messageContainer.scrollTop = messageContainer.scrollHeight; // Cuộn xuống tin nhắn mới
  }
});


  
  