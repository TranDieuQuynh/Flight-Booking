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
  