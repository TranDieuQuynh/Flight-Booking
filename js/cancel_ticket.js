function searchBooking() {
    // Giả lập dữ liệu tìm vé
    const bookingData = {
        code: "VN123456",
        passenger: "Nguyễn Văn A",
        date: "15/12/2024",
        price: "1,500,000 VND"
    };

    // Cập nhật nội dung vào các thẻ HTML
    document.getElementById("result-code").textContent = bookingData.code;
    document.getElementById("result-passenger").textContent = bookingData.passenger;
    document.getElementById("result-date").textContent = bookingData.date;
    document.getElementById("result-price").textContent = bookingData.price;

    // Hiển thị thẻ kết quả
    document.getElementById("result-card").style.display = "block";
}

function cancelTicket() {
    alert("Vé của bạn đã được hủy thành công!");
    // Bạn có thể thêm logic hủy vé thực tế tại đây
}
