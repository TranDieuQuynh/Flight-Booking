// Hàm thay đổi thông tin trải nghiệm dựa trên lựa chọn của người dùng
function showExperience(seatClass) {
    var experienceDetail = document.getElementById('experience-detail');
    var content = '';

    if (seatClass === 'economy') {
        content = `
            <h3>Hạng Phổ Thông</h3>
            <p>Hạng phổ thông mang lại cho bạn một chuyến bay tiện nghi với mức giá phải chăng. Với các ghế ngồi thoải mái, bạn sẽ có một trải nghiệm bay dễ chịu. Chúng tôi cũng cung cấp các dịch vụ ăn uống và giải trí tiêu chuẩn.</p>
        `;
    } else if (seatClass === 'business') {
        content = `
            <h3>Hạng Thương Gia</h3>
            <p>Hạng thương gia mang đến cho bạn không gian rộng rãi và dịch vụ cao cấp. Ghế ngả thoải mái, đồ ăn đặc biệt và các tiện ích ưu tiên sẽ giúp chuyến bay của bạn trở nên dễ chịu hơn bao giờ hết.</p>
        `;
    } else if (seatClass === 'first') {
        content = `
            <h3>Hạng Nhất</h3>
            <p>Hạng nhất là lựa chọn cao cấp nhất với các dịch vụ ưu tiên và không gian riêng biệt. Bạn sẽ được trải nghiệm dịch vụ chăm sóc tận tình từ đội ngũ nhân viên, ghế ngả sâu và các bữa ăn đặc biệt đẳng cấp.</p>
        `;
    }

    experienceDetail.innerHTML = content;
}

function proceedToBooking() {
    const extraSeat = document.getElementById("extra-seat").value;
    const vipService = document.getElementById("vip-service").checked;
    
    if (extraSeat && vipService) {
        alert("Cảm ơn bạn đã chọn các dịch vụ! Chúng tôi sẽ chuyển bạn đến trang đặt vé.");
        // Chuyển đến trang đặt vé
        window.location.href = "page-booking.html"; // Điều hướng đến trang đặt vé
    } else {
        alert("Vui lòng chọn đầy đủ các dịch vụ trước khi đặt vé.");
    }
}
